import { afterEach, describe, expect, it, vi } from "vitest";
import type { ContactPayload } from "@/schemas/contact";
import { createWhatsAppUrl, getContactConfig, submitInquiry } from "./contact";

const payload: ContactPayload = {
  name: "Dewi",
  organization: null,
  email: "dewi@example.com",
  whatsapp: null,
  category: "build",
  message: "Saya membutuhkan sistem inventaris baru.",
  targetTimeline: null,
  locale: "id",
  privacyAccepted: true,
  source: "website-contact",
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("contact configuration", () => {
  it("normalizes public contact configuration without inventing channels", () => {
    vi.stubEnv("VITE_CONTACT_API_URL", " https://api.example.com/inquiries ");
    vi.stubEnv("VITE_CONTACT_EMAIL", " hello@example.com ");
    vi.stubEnv("VITE_CONTACT_WHATSAPP", "+62 812-3456-7890");

    expect(getContactConfig()).toEqual({
      apiUrl: "https://api.example.com/inquiries",
      email: "hello@example.com",
      whatsapp: "+62 812-3456-7890",
      whatsappUrl: "https://wa.me/6281234567890",
    });
  });

  it("rejects invalid public channels", () => {
    vi.stubEnv("VITE_CONTACT_EMAIL", "not-an-email");
    vi.stubEnv("VITE_CONTACT_WHATSAPP", "123");

    expect(getContactConfig()).toMatchObject({
      email: null,
      whatsappUrl: null,
    });
    expect(createWhatsAppUrl(null)).toBeNull();
  });
});

describe("submitInquiry", () => {
  it("does not submit when the contact API is unavailable", async () => {
    vi.stubEnv("VITE_CONTACT_API_URL", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(submitInquiry(payload)).rejects.toThrow(
      "CONTACT_API_UNAVAILABLE",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts to the configured contact URL", async () => {
    vi.stubEnv("VITE_CONTACT_API_URL", "https://api.example.com/inquiries");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    await submitInquiry(payload);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/inquiries",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: expect.any(AbortSignal),
      }),
    );
  });
});
