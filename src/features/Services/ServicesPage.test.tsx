import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import i18n from "i18next";
import "@/i18n";
import ServicesPage from "./ServicesPage";

describe("contextual solution CTAs", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("id");
  });

  it.each([
    ["Bahas Sistem yang Dibutuhkan", "build"],
    ["Otomatiskan Proses Saya", "automate"],
    ["Mulai Proyek Kreatif", "create"],
    ["Eksplorasi Ide Bersama", "explore"],
    ["Tingkatkan Solusi Saya", "improve"],
  ])("sends %s to its preselected category", (label, category) => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      `/contact?category=${category}`,
    );
  });
});
