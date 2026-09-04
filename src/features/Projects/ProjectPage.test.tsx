import { act, render, screen, within } from "@testing-library/react";
import i18n from "i18next";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import "@/i18n";
import ProjectPage from "./ProjectPage";

describe("localized creation content", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("id");
  });

  it("updates creation details and type labels when the locale changes", async () => {
    render(
      <MemoryRouter>
        <ProjectPage />
      </MemoryRouter>,
    );

    const indonesianTitle = screen.getByRole("heading", {
      name: "Sistem Manajemen Inventaris",
    });
    const indonesianCard = indonesianTitle.closest("article");

    expect(indonesianCard).not.toBeNull();
    expect(
      within(indonesianCard!).getByText(
        "Pencatatan stok dan pembelian tersebar di beberapa tempat.",
      ),
    ).toBeInTheDocument();
    expect(within(indonesianCard!).getByText("Prototipe")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Stock and purchasing records are spread across several places.",
      ),
    ).not.toBeInTheDocument();

    await act(async () => {
      await i18n.changeLanguage("en");
    });

    const englishTitle = await screen.findByRole("heading", {
      name: "Inventory Management System",
    });
    const englishCard = englishTitle.closest("article");

    expect(englishCard).not.toBeNull();
    expect(
      within(englishCard!).getByText(
        "Stock and purchasing records are spread across several places.",
      ),
    ).toBeInTheDocument();
    expect(within(englishCard!).getByText("Prototype")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Pencatatan stok dan pembelian tersebar di beberapa tempat.",
      ),
    ).not.toBeInTheDocument();
  });
});
