export const CONTACT_CATEGORIES = [
  "build",
  "automate",
  "create",
  "explore",
  "improve",
  "unsure",
] as const;

export type ContactCategory = (typeof CONTACT_CATEGORIES)[number];

export function isContactCategory(value: unknown): value is ContactCategory {
  return CONTACT_CATEGORIES.some((category) => category === value);
}

export function parseContactCategory(
  value: string | null | undefined,
): ContactCategory {
  return isContactCategory(value) ? value : "unsure";
}

export type ContactPayload = {
  name: string;
  organization: string | null;
  email: string;
  whatsapp: string | null;
  category: ContactCategory;
  message: string;
  targetTimeline: string | null;
  locale: "id" | "en";
  privacyAccepted: true;
  source: string;
};
export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;
export function validateContact(
  values: Record<string, string | boolean>,
): ContactErrors {
  const errors: ContactErrors = {};
  if (!String(values.name || "").trim()) errors.name = "required";
  if (!/^\S+@\S+\.\S+$/.test(String(values.email || "")))
    errors.email = "email";
  if (!isContactCategory(values.category)) errors.category = "required";
  if (String(values.message || "").trim().length < 20)
    errors.message = "message";
  if (!values.privacyAccepted) errors.privacyAccepted = "privacy";
  return errors;
}
