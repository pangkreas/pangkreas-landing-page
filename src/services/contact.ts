import type { ContactPayload } from "@/schemas/contact";

export type ContactConfig = {
  apiUrl: string | null;
  email: string | null;
  whatsapp: string | null;
  whatsappUrl: string | null;
};

function optionalValue(value: string | undefined) {
  const normalized = value?.trim();
  return normalized || null;
}

function publicEmail(value: string | undefined) {
  const email = optionalValue(value);
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

export function createWhatsAppUrl(value: string | null) {
  if (!value) return null;

  const phoneNumber = value.replace(/\D/g, "");
  return phoneNumber.length >= 8 && phoneNumber.length <= 15
    ? `https://wa.me/${phoneNumber}`
    : null;
}

export function getContactConfig(): ContactConfig {
  const whatsapp = optionalValue(import.meta.env.VITE_CONTACT_WHATSAPP);

  return {
    apiUrl: optionalValue(import.meta.env.VITE_CONTACT_API_URL),
    email: publicEmail(import.meta.env.VITE_CONTACT_EMAIL),
    whatsapp,
    whatsappUrl: createWhatsAppUrl(whatsapp),
  };
}

export async function submitInquiry(payload: ContactPayload) {
  const { apiUrl } = getContactConfig();
  if (!apiUrl) throw new Error("CONTACT_API_UNAVAILABLE");

  const controller = new AbortController();
  const timeout = globalThis.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) throw new Error("CONTACT_API_ERROR");
  } finally {
    globalThis.clearTimeout(timeout);
  }
}
