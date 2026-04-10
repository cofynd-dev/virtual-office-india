export default function CityPagesPage() {
  // Legacy route: keep it working, but use the new SEO-friendly URLs.
  // This is a server component, so `redirect()` is safe here.
  const { redirect } = require("next/navigation"); // eslint-disable-line @typescript-eslint/no-require-imports
  redirect("/virtual-office-in-gurgaon");
}