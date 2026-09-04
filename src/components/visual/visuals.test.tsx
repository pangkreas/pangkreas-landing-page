import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  CreationVisual,
  PangkreasCoreVisual,
  SolutionIcon,
  SolutionVisual,
} from ".";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("decorative visual components", () => {
  it("uses the creation variant supplied by content data", () => {
    const { container } = render(
      <CreationVisual category="automate" variant="loop" />,
    );
    const visual = container.firstElementChild;

    expect(visual).toHaveAttribute("aria-hidden", "true");
    expect(visual).toHaveAttribute("data-space", "automate");
    expect(visual).toHaveAttribute("data-variant", "loop");
  });

  it("provides a category-specific fallback creation variant", () => {
    const { container } = render(<CreationVisual category="create" />);

    expect(container.firstElementChild).toHaveAttribute(
      "data-variant",
      "layers",
    );
  });

  it("keeps solution visuals and icons out of the accessibility tree", () => {
    const { container } = render(
      <>
        <SolutionVisual space="explore" />
        <SolutionIcon space="improve" />
      </>,
    );

    expect(container.querySelector(".solution-visual")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(container.querySelector(".solution-icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("does not activate core motion when reduced motion is requested", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );

    const { container } = render(<PangkreasCoreVisual />);

    expect(container.firstElementChild).toHaveAttribute(
      "data-motion",
      "paused",
    );
  });
});
