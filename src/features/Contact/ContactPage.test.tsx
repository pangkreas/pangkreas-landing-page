import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import i18n from "i18next";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import "@/i18n";
import ContactPage from "./ContactPage";

function renderContact(entry = "/contact") {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <ContactPage />
    </MemoryRouter>,
  );
}

describe("contact availability", () => {
  beforeEach(async () => {
    vi.unstubAllEnvs();
    vi.stubEnv("VITE_CONTACT_API_URL", "");
    vi.stubEnv("VITE_CONTACT_EMAIL", "");
    vi.stubEnv("VITE_CONTACT_WHATSAPP", "");
    await i18n.changeLanguage("id");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("does not present an inactive form when no API is configured", () => {
    renderContact();

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText(/form diskusi sedang dipersiapkan/i)).toBeVisible();
  });

  it("only shows valid configured fallback channels", () => {
    vi.stubEnv("VITE_CONTACT_EMAIL", "hello@example.com");
    vi.stubEnv("VITE_CONTACT_WHATSAPP", "+62 812-3456-7890");
    renderContact();

    expect(
      screen.getByRole("link", { name: /hello@example.com/i }),
    ).toHaveAttribute("href", "mailto:hello@example.com");
    expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
      "href",
      "https://wa.me/6281234567890",
    );
  });

  it("shows neither fallback link when no channel is configured", () => {
    renderContact();

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("shows the working form and privacy link when an API is configured", () => {
    vi.stubEnv("VITE_CONTACT_API_URL", "https://api.example.com/inquiries");
    renderContact();

    expect(screen.getByRole("textbox", { name: /nama|name/i })).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /kirim kebutuhan|send inquiry/i,
      }),
    ).toBeEnabled();
    expect(
      screen.getByRole("link", {
        name: /kebijakan privasi|privacy policy/i,
      }),
    ).toHaveAttribute("href", "/privacy");
  });

  it("prevents duplicate submissions while a request is pending", async () => {
    vi.stubEnv("VITE_CONTACT_API_URL", "https://api.example.com/inquiries");
    let resolveRequest: ((value: { ok: boolean }) => void) | undefined;
    const fetchMock = vi.fn(
      () =>
        new Promise<{ ok: boolean }>((resolve) => {
          resolveRequest = resolve;
        }),
    );
    vi.stubGlobal("fetch", fetchMock);
    renderContact("/contact?category=build");

    fireEvent.change(screen.getByLabelText(/nama/i), {
      target: { value: "Dewi" },
    });
    fireEvent.change(screen.getByLabelText(/^email/i), {
      target: { value: "dewi@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/ceritakan masalah/i), {
      target: { value: "Saya membutuhkan sistem inventaris baru." },
    });
    fireEvent.click(screen.getByRole("checkbox"));

    const submitButton = screen.getByRole("button", {
      name: /kirim kebutuhan/i,
    });
    const form = submitButton.closest("form");
    expect(form).not.toBeNull();

    fireEvent.submit(form!);
    fireEvent.submit(form!);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    resolveRequest?.({ ok: true });
    await waitFor(() => expect(submitButton).not.toBeInTheDocument());
  });
});

describe("contact category query", () => {
  beforeEach(async () => {
    vi.unstubAllEnvs();
    vi.stubEnv("VITE_CONTACT_API_URL", "https://api.example.com/inquiries");
    await i18n.changeLanguage("id");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("selects an allowlisted category from the URL", () => {
    renderContact("/contact?category=automate");

    expect(screen.getByRole("combobox")).toHaveValue("automate");
  });

  it("falls back to unsure for an invalid category", () => {
    renderContact("/contact?category=not-a-category");

    expect(screen.getByRole("combobox")).toHaveValue("unsure");
  });

  it("keeps the selected category when the locale changes", async () => {
    renderContact("/contact?category=improve");
    const category = screen.getByRole("combobox");

    expect(category).toHaveValue("improve");
    fireEvent.change(category, { target: { value: "create" } });
    expect(category).toHaveValue("create");

    await act(async () => {
      await i18n.changeLanguage("en");
    });

    expect(category).toHaveValue("create");
  });
});
