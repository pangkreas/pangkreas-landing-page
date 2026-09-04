import type { SpaceKey } from "@/data/content";
import "./visuals.css";

export type SolutionVisualProps = {
  space: SpaceKey;
  className?: string;
};

export type SolutionIconProps = {
  space: SpaceKey;
  className?: string;
};

function joinClassNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

function IconPaths({ space }: Pick<SolutionIconProps, "space">) {
  switch (space) {
    case "build":
      return (
        <>
          <rect x="5" y="5" width="9" height="9" rx="2" />
          <rect x="18" y="5" width="9" height="9" rx="2" />
          <rect x="5" y="18" width="22" height="9" rx="2" />
        </>
      );
    case "automate":
      return (
        <>
          <path d="M7 22L15 10L25 20" />
          <circle cx="7" cy="22" r="3" />
          <circle cx="15" cy="10" r="3" />
          <circle cx="25" cy="20" r="3" />
        </>
      );
    case "create":
      return (
        <>
          <circle cx="12" cy="15" r="7" />
          <rect x="14" y="10" width="13" height="13" rx="4" />
          <path d="M7 25L14 18" />
        </>
      );
    case "explore":
      return (
        <>
          <ellipse cx="16" cy="16" rx="12" ry="6" />
          <ellipse cx="16" cy="16" rx="6" ry="12" />
          <circle cx="24" cy="12" r="2.5" />
        </>
      );
    case "improve":
      return (
        <>
          <path d="M5 25L12 18L17 21L27 9" />
          <path d="M21 9H27V15" />
          <path d="M6 28H27" />
        </>
      );
  }
}

/** A small, currentColor icon for a solution-space card or CTA. */
export function SolutionIcon({ space, className }: SolutionIconProps) {
  return (
    <svg
      className={joinClassNames("solution-icon", className)}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <IconPaths space={space} />
    </svg>
  );
}

/** Decorative mini-composition for solution headers and selectable cards. */
export function SolutionVisual({ space, className }: SolutionVisualProps) {
  return (
    <div
      className={joinClassNames("solution-visual", className)}
      data-space={space}
      aria-hidden="true"
    >
      <span className="solution-visual__grid" />
      <span className="solution-visual__orbit" />
      <span className="solution-visual__connector solution-visual__connector--one" />
      <span className="solution-visual__connector solution-visual__connector--two" />
      <span className="solution-visual__satellite solution-visual__satellite--one" />
      <span className="solution-visual__satellite solution-visual__satellite--two" />
      <span className="solution-visual__satellite solution-visual__satellite--three" />
      <span className="solution-visual__core">
        <SolutionIcon space={space} />
      </span>
    </div>
  );
}

export default SolutionVisual;
