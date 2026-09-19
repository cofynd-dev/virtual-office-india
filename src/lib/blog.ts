export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateIso: string;
  readTime: string;
  imageUrl: string;
  author: string;
  contentHtml: string;
  seoTitle?: string;
  seoDescription?: string;
};

const BLOG_API_BASE = "https://api.cofynd.com/api/user/blog";
const BLOG_TYPE = "virtualofficeindia";
const PAGE_SIZE = 15;
const AUTHOR = "Virtual Offices India";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatDate(iso?: string) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatCategory(type?: string) {
  const value = String(type || "").trim();
  if (!value || value === "virtualofficeindia" || value === "virtualoffice") {
    return "Virtual Office";
  }
  return value.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatReadTime(value?: string) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return /read/i.test(raw) ? raw : `${raw} read`;
}

function mapBlog(raw: unknown): BlogPost | null {
  if (!raw || typeof raw !== "object") return null;
  const item = raw as Record<string, any>;
  const slug = String(item.slug || "").trim();
  if (!slug) return null;

  const contentHtml = String(item.description || "");
  const seo = item.seo && typeof item.seo === "object" ? item.seo : {};
  const title = String(item.heading || seo.title || "").trim();
  const excerpt = String(seo.description || "").trim() || stripHtml(contentHtml).slice(0, 180);
  const cover = item.cover_picture && typeof item.cover_picture === "object" ? item.cover_picture : {};

  return {
    slug,
    title: title || slug,
    excerpt,
    category: formatCategory(item.blog_type),
    date: formatDate(item.added_on),
    dateIso: String(item.added_on || item.updated_on || ""),
    readTime: formatReadTime(item.reading_time),
    imageUrl: String(cover.s3_link || cover.url || "").trim(),
    author: AUTHOR,
    contentHtml,
    seoTitle: typeof seo.title === "string" ? seo.title : undefined,
    seoDescription: typeof seo.description === "string" ? seo.description : undefined,
  };
}

async function fetchJson(url: string): Promise<any | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchBlogList(): Promise<BlogPost[]> {
  const firstUrl = `${BLOG_API_BASE}?page=1&pageSize=${PAGE_SIZE}&limit=${PAGE_SIZE}&blog_type=${encodeURIComponent(BLOG_TYPE)}`;
  const first = await fetchJson(firstUrl);
  const items = Array.isArray(first?.data) ? first.data : [];
  const posts = items.map(mapBlog).filter(Boolean) as BlogPost[];
  const total = Number(first?.totalRecords ?? posts.length);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  for (let page = 2; page <= pages; page++) {
    const json = await fetchJson(
      `${BLOG_API_BASE}?page=${page}&pageSize=${PAGE_SIZE}&limit=${PAGE_SIZE}&blog_type=${encodeURIComponent(BLOG_TYPE)}`,
    );
    const more = Array.isArray(json?.data) ? json.data : [];
    posts.push(...(more.map(mapBlog).filter(Boolean) as BlogPost[]));
  }

  return posts;
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const normalized = String(slug || "").trim();
  if (!normalized) return null;

  const json = await fetchJson(`${BLOG_API_BASE}/${encodeURIComponent(normalized)}`);
  const raw = json?.data ?? json;
  return mapBlog(raw);
}

export async function fetchRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const posts = await fetchBlogList();
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}

export function blogUrl(slug: string) {
  return `/blog/${slug}`;
}
