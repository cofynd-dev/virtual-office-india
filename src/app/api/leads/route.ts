import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  city: string;
  requirement: string;
  email?: string;
  source?: string;
  pageUrl?: string;
  token?: string;
};

function isNonEmptyString(v: unknown) {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Missing GOOGLE_SHEETS_WEBHOOK_URL" },
      { status: 500 }
    );
  }

  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isNonEmptyString(body.name) || !isNonEmptyString(body.phone) || !isNonEmptyString(body.city) || !isNonEmptyString(body.requirement)) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const payload = {
    ...body,
    timestamp: new Date().toISOString(),
  };

  try {
    const requestId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        ...(process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN
          ? { token: process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN }
          : {}),
      }),
      cache: "no-store",
    });

    const rawText = await res.text().catch(() => "");
    let parsed: unknown = null;
    try {
      parsed = rawText ? JSON.parse(rawText) : null;
    } catch {
      parsed = null;
    }

    // Helpful server logs for debugging (no secrets).
    console.log("[leads]", {
      requestId,
      webhookStatus: res.status,
      webhookOk: res.ok,
      webhookBodyPreview: rawText?.slice?.(0, 300) ?? "",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Webhook error",
          requestId,
          webhookStatus: res.status,
          webhookBody: rawText.slice(0, 1500),
        },
        { status: 502 }
      );
    }

    // If webhook returns JSON with ok=false, treat as failure.
    if (
      parsed &&
      typeof parsed === "object" &&
      "ok" in (parsed as Record<string, unknown>) &&
      (parsed as Record<string, unknown>).ok !== true
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Webhook returned ok=false",
          requestId,
          webhookStatus: res.status,
          webhookBody: rawText.slice(0, 1500),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      requestId,
      webhookStatus: res.status,
      webhookResponse: parsed ?? rawText.slice(0, 1500),
    });
  } catch (_e) {
    return NextResponse.json(
      { ok: false, error: "Request failed" },
      { status: 502 }
    );
  }
}

