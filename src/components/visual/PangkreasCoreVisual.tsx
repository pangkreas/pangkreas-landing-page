import { useEffect, useId, useRef } from "react";
import "./visuals.css";

export type PangkreasCoreVisualProps = {
  className?: string;
  compact?: boolean;
};

function joinClassNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

/**
 * Decorative map of Pangkreas as one core connected to five solution spaces.
 *
 * The visual never captures pointer events. On fine-pointer devices it reacts
 * to the pointer through CSS variables, while remaining entirely static for
 * reduced-motion users and when it is outside the viewport.
 */
export function PangkreasCoreVisual({
  className,
  compact = false,
}: PangkreasCoreVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const glowId = `pangkreas-core-glow-${reactId}`;
  const gridId = `pangkreas-core-grid-${reactId}`;
  const arrowId = `pangkreas-core-arrow-${reactId}`;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    let isVisible = !document.hidden;
    let isInView = true;

    const syncMotion = () => {
      root.dataset.motion =
        !reducedMotion?.matches && isVisible && isInView ? "running" : "paused";
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      syncMotion();
    };

    const Observer = window.IntersectionObserver;
    const observer =
      typeof Observer === "function"
        ? new Observer(
            ([entry]) => {
              isInView = entry?.isIntersecting ?? false;
              syncMotion();
            },
            { rootMargin: "80px" },
          )
        : null;

    observer?.observe(root);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion?.addEventListener("change", syncMotion);
    syncMotion();

    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion?.removeEventListener("change", syncMotion);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (typeof window.matchMedia !== "function") return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame: number | null = null;
    let latestPointer: PointerEvent | null = null;
    let isListening = false;

    const resetTilt = () => {
      root.style.setProperty("--core-tilt-x", "0deg");
      root.style.setProperty("--core-tilt-y", "0deg");
      root.style.setProperty("--core-shift-x", "0px");
      root.style.setProperty("--core-shift-y", "0px");
    };

    const updateTilt = () => {
      animationFrame = null;
      if (!latestPointer || !finePointer.matches || reducedMotion.matches) {
        resetTilt();
        return;
      }

      const bounds = root.getBoundingClientRect();
      const localX = latestPointer.clientX - bounds.left;
      const localY = latestPointer.clientY - bounds.top;
      const isInside =
        localX >= 0 &&
        localX <= bounds.width &&
        localY >= 0 &&
        localY <= bounds.height;

      if (!isInside || bounds.width === 0 || bounds.height === 0) {
        resetTilt();
        return;
      }

      const x = localX / bounds.width - 0.5;
      const y = localY / bounds.height - 0.5;
      root.style.setProperty("--core-tilt-x", `${(-y * 3.5).toFixed(2)}deg`);
      root.style.setProperty("--core-tilt-y", `${(x * 4.5).toFixed(2)}deg`);
      root.style.setProperty("--core-shift-x", `${(x * 5).toFixed(2)}px`);
      root.style.setProperty("--core-shift-y", `${(y * 5).toFixed(2)}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      latestPointer = event;
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateTilt);
      }
    };

    const removePointerListener = () => {
      if (!isListening) return;
      window.removeEventListener("pointermove", onPointerMove);
      isListening = false;
    };

    const syncPointerListener = () => {
      const shouldListen = finePointer.matches && !reducedMotion.matches;
      if (shouldListen && !isListening) {
        window.addEventListener("pointermove", onPointerMove, {
          passive: true,
        });
        isListening = true;
      } else if (!shouldListen) {
        removePointerListener();
        resetTilt();
      }
    };

    finePointer.addEventListener("change", syncPointerListener);
    reducedMotion.addEventListener("change", syncPointerListener);
    syncPointerListener();

    return () => {
      removePointerListener();
      finePointer.removeEventListener("change", syncPointerListener);
      reducedMotion.removeEventListener("change", syncPointerListener);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={joinClassNames("pangkreas-core-visual", className)}
      data-compact={compact ? "true" : undefined}
      data-motion="paused"
      aria-hidden="true"
    >
      <div className="pangkreas-core-visual__tilt">
        <svg
          className="pangkreas-core-visual__svg"
          viewBox="0 0 640 560"
          fill="none"
          focusable="false"
        >
          <defs>
            <radialGradient id={glowId} cx="0" cy="0" r="1">
              <stop offset="0" stopColor="#818cf8" stopOpacity="0.34" />
              <stop offset="0.58" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <pattern
              id={gridId}
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0H0V32"
                stroke="#6366f1"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            </pattern>
            <marker
              id={arrowId}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M1 1L9 5L1 9" stroke="#6366f1" strokeWidth="1.5" />
            </marker>
          </defs>

          <rect
            className="pangkreas-core-visual__frame"
            x="30"
            y="24"
            width="580"
            height="512"
            rx="44"
          />
          <rect
            className="pangkreas-core-visual__grid"
            x="30"
            y="24"
            width="580"
            height="512"
            rx="44"
            fill={`url(#${gridId})`}
          />
          <ellipse
            className="pangkreas-core-visual__glow"
            cx="320"
            cy="280"
            rx="245"
            ry="220"
            fill={`url(#${glowId})`}
          />

          <g className="pangkreas-core-visual__ambient">
            <path d="M68 280C123 280 156 280 218 280" />
            <path d="M80 264H128" />
            <path d="M92 296H164" />
            <circle cx="58" cy="280" r="5" />
            <circle cx="80" cy="264" r="3" />
            <circle cx="92" cy="296" r="3" />
          </g>

          <g className="pangkreas-core-visual__connections">
            <path d="M275 230C232 196 201 170 158 150" />
            <path d="M369 226C408 190 444 163 488 142" />
            <path d="M390 290C438 294 478 308 516 333" />
            <path d="M347 349C357 386 370 418 395 448" />
            <path d="M271 342C228 372 190 393 150 407" />
          </g>

          <g className="pangkreas-core-visual__packets">
            <circle
              className="pangkreas-core-visual__packet packet-one"
              r="4"
            />
            <circle
              className="pangkreas-core-visual__packet packet-two"
              r="4"
            />
            <circle
              className="pangkreas-core-visual__packet packet-three"
              r="4"
            />
          </g>

          <g transform="translate(115 112)">
            <g className="pangkreas-core-visual__node core-node-one">
              <circle className="core-node__halo" cx="42" cy="38" r="37" />
              <rect
                className="core-node__surface"
                x="7"
                y="3"
                width="70"
                height="70"
                rx="22"
              />
              <rect
                className="core-node__shape"
                x="24"
                y="21"
                width="18"
                height="18"
                rx="4"
              />
              <rect
                className="core-node__shape-soft"
                x="46"
                y="21"
                width="14"
                height="18"
                rx="4"
              />
              <rect
                className="core-node__shape-soft"
                x="24"
                y="43"
                width="36"
                height="11"
                rx="4"
              />
            </g>
          </g>

          <g transform="translate(446 104)">
            <g className="pangkreas-core-visual__node core-node-two">
              <circle className="core-node__halo" cx="42" cy="38" r="37" />
              <rect
                className="core-node__surface"
                x="7"
                y="3"
                width="70"
                height="70"
                rx="22"
              />
              <path className="core-node__path" d="M24 50L41 30L59 46" />
              <circle className="core-node__shape" cx="24" cy="50" r="6" />
              <circle className="core-node__shape-soft" cx="41" cy="30" r="6" />
              <circle className="core-node__shape" cx="59" cy="46" r="6" />
            </g>
          </g>

          <g transform="translate(487 296)">
            <g className="pangkreas-core-visual__node core-node-three">
              <circle className="core-node__halo" cx="42" cy="38" r="37" />
              <rect
                className="core-node__surface"
                x="7"
                y="3"
                width="70"
                height="70"
                rx="22"
              />
              <circle
                className="core-node__shape-soft"
                cx="33"
                cy="33"
                r="14"
              />
              <rect
                className="core-node__shape"
                x="38"
                y="29"
                width="22"
                height="22"
                rx="7"
              />
            </g>
          </g>

          <g transform="translate(353 415)">
            <g className="pangkreas-core-visual__node core-node-four">
              <circle className="core-node__halo" cx="42" cy="38" r="37" />
              <rect
                className="core-node__surface"
                x="7"
                y="3"
                width="70"
                height="70"
                rx="22"
              />
              <ellipse
                className="core-node__path"
                cx="42"
                cy="38"
                rx="22"
                ry="13"
              />
              <ellipse
                className="core-node__path"
                cx="42"
                cy="38"
                rx="13"
                ry="22"
              />
              <circle className="core-node__shape" cx="59" cy="31" r="5" />
            </g>
          </g>

          <g transform="translate(108 369)">
            <g className="pangkreas-core-visual__node core-node-five">
              <circle className="core-node__halo" cx="42" cy="38" r="37" />
              <rect
                className="core-node__surface"
                x="7"
                y="3"
                width="70"
                height="70"
                rx="22"
              />
              <path className="core-node__path" d="M23 50L36 39L45 43L61 24" />
              <path className="core-node__shape-soft" d="M24 56H61" />
              <circle className="core-node__shape" cx="61" cy="24" r="5" />
            </g>
          </g>

          <g className="pangkreas-core-visual__orbit">
            <ellipse cx="320" cy="280" rx="104" ry="93" />
            <circle
              className="pangkreas-core-visual__orbit-dot"
              cx="416"
              cy="244"
              r="5"
            />
            <circle
              className="pangkreas-core-visual__orbit-dot-soft"
              cx="235"
              cy="334"
              r="3"
            />
          </g>

          <g className="pangkreas-core-visual__core">
            <circle className="core__outer" cx="320" cy="280" r="74" />
            <circle className="core__inner" cx="320" cy="280" r="60" />
            <path
              className="core__letter"
              d="M283 329V231H326C358 231 377 248 377 276C377 304 357 321 326 321H308V329H283ZM308 254V298H324C342 298 352 291 352 276C352 261 342 254 324 254H308Z"
            />
            <circle className="core__signal" cx="373" cy="227" r="6" />
          </g>

          <path
            className="pangkreas-core-visual__direction"
            d="M185 501H458"
            markerEnd={`url(#${arrowId})`}
          />
          <circle
            className="pangkreas-core-visual__direction-dot"
            cx="185"
            cy="501"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

export default PangkreasCoreVisual;
