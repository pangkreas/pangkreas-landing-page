import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import AppRouter from "./AppRouters";
import "@/i18n";
describe("main user journeys", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
    localStorage.setItem("language", "id");
  });
  it("renders the homepage", async () => {
    render(<AppRouter />);
    expect(
      await screen.findByRole("heading", { level: 1, name: /Satu Pangkalan/i }),
    ).toBeInTheDocument();
  });
  it("redirects legacy project routes", async () => {
    window.history.pushState({}, "", "/projects");
    render(<AppRouter />);
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Kreasi yang lahir/i,
      }),
    ).toBeInTheDocument();
    expect(location.pathname).toBe("/creations");
  });
  it("switches language", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);
    await user.click(screen.getByRole("button", { name: "EN" }));
    expect(
      (await screen.findAllByRole("link", { name: "Solutions" })).length,
    ).toBeGreaterThan(0);
  });
  it("does not expose an inactive contact form", async () => {
    window.history.pushState({}, "", "/contact");
    render(<AppRouter />);
    expect(
      await screen.findByText(
        /Form diskusi sedang dipersiapkan|conversation form is being prepared/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Kirim Kebutuhan|Send Inquiry/i }),
    ).not.toBeInTheDocument();
  });
  it("opens and closes the mobile menu accessibly", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);
    const menu = await screen.findByRole("button", {
      name: /Buka menu|Open menu/i,
    });
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(menu).toHaveAttribute("aria-expanded", "false");
  });
  it("renders the 404 page", async () => {
    window.history.pushState({}, "", "/missing");
    render(<AppRouter />);
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /tidak ditemukan|not found/i,
      }),
    ).toBeInTheDocument();
  });
  it("exposes the privacy policy from the footer", async () => {
    render(<AppRouter />);
    const privacyLinks = await screen.findAllByRole("link", {
      name: /Kebijakan Privasi|Privacy Policy/i,
    });
    expect(privacyLinks[0]).toHaveAttribute("href", "/privacy");
  });
});
