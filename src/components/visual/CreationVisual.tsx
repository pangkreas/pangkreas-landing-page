import type { CreationVisualVariant, SpaceKey } from "@/data/content";
import type { ReactNode } from "react";
import "./visuals.css";

export type CreationVisualProps = {
  category: SpaceKey;
  variant?: CreationVisualVariant;
  className?: string;
};

const defaultVariant: Record<SpaceKey, CreationVisualVariant> = {
  build: "modules",
  automate: "flow",
  create: "layers",
  explore: "orbit",
  improve: "progress",
};

function joinClassNames(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

function ModulesVisual() {
  return (
    <g className="creation-scene creation-scene--modules">
      <rect
        className="creation-shape creation-shape--soft"
        x="82"
        y="58"
        width="124"
        height="78"
        rx="18"
      />
      <rect
        className="creation-shape creation-shape--paper"
        x="118"
        y="92"
        width="164"
        height="104"
        rx="20"
      />
      <rect
        className="creation-shape creation-shape--strong"
        x="162"
        y="129"
        width="56"
        height="46"
        rx="12"
      />
      <rect
        className="creation-shape creation-shape--tint"
        x="228"
        y="129"
        width="30"
        height="46"
        rx="10"
      />
      <rect
        className="creation-shape creation-shape--outline"
        x="294"
        y="77"
        width="104"
        height="142"
        rx="22"
      />
      <path
        className="creation-line"
        d="M318 112H374M318 136H362M318 160H374M318 184H350"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="398"
        cy="77"
        r="8"
      />
    </g>
  );
}

function WindowsVisual() {
  return (
    <g className="creation-scene creation-scene--windows">
      <rect
        className="creation-shape creation-shape--paper"
        x="74"
        y="52"
        width="332"
        height="198"
        rx="24"
      />
      <path className="creation-line creation-line--quiet" d="M74 92H406" />
      <circle
        className="creation-dot creation-dot--soft"
        cx="99"
        cy="72"
        r="5"
      />
      <circle
        className="creation-dot creation-dot--soft"
        cx="117"
        cy="72"
        r="5"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="135"
        cy="72"
        r="5"
      />
      <rect
        className="creation-shape creation-shape--soft"
        x="98"
        y="116"
        width="94"
        height="108"
        rx="16"
      />
      <rect
        className="creation-shape creation-shape--tint"
        x="212"
        y="116"
        width="168"
        height="44"
        rx="14"
      />
      <rect
        className="creation-shape creation-shape--outline"
        x="212"
        y="176"
        width="76"
        height="48"
        rx="14"
      />
      <rect
        className="creation-shape creation-shape--strong"
        x="304"
        y="176"
        width="76"
        height="48"
        rx="14"
      />
    </g>
  );
}

function FlowVisual() {
  return (
    <g className="creation-scene creation-scene--flow">
      <path
        className="creation-line creation-line--flow"
        d="M77 153C130 76 188 83 225 145C261 205 326 216 404 126"
      />
      <path
        className="creation-line creation-line--quiet"
        d="M77 187C142 238 207 227 244 177C289 117 346 84 404 105"
      />
      <circle
        className="creation-node creation-node--paper"
        cx="78"
        cy="153"
        r="24"
      />
      <circle
        className="creation-node creation-node--soft"
        cx="225"
        cy="145"
        r="31"
      />
      <circle
        className="creation-node creation-node--strong"
        cx="404"
        cy="126"
        r="26"
      />
      <circle
        className="creation-dot creation-dot--strong creation-dot--traveler"
        r="7"
      />
      <path className="creation-mark" d="M214 145L222 153L238 135" />
    </g>
  );
}

function LoopVisual() {
  return (
    <g className="creation-scene creation-scene--loop">
      <path
        className="creation-line creation-line--wide"
        d="M133 94H319C365 94 395 119 395 155C395 192 365 217 319 217H163"
      />
      <path
        className="creation-line creation-line--wide creation-line--quiet"
        d="M170 68L126 94L170 120M307 191L351 217L307 243"
      />
      <rect
        className="creation-shape creation-shape--paper"
        x="171"
        y="126"
        width="138"
        height="58"
        rx="20"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="198"
        cy="155"
        r="8"
      />
      <path className="creation-line" d="M220 145H282M220 165H262" />
      <circle
        className="creation-dot creation-dot--soft creation-dot--pulse"
        cx="395"
        cy="155"
        r="13"
      />
    </g>
  );
}

function LayersVisual() {
  return (
    <g className="creation-scene creation-scene--layers">
      <path
        className="creation-shape creation-shape--soft"
        d="M112 78L242 40L368 88L235 130L112 78Z"
      />
      <path
        className="creation-shape creation-shape--tint"
        d="M112 128L242 90L368 138L235 180L112 128Z"
      />
      <path
        className="creation-shape creation-shape--paper"
        d="M112 178L242 140L368 188L235 230L112 178Z"
      />
      <circle
        className="creation-shape creation-shape--strong"
        cx="278"
        cy="132"
        r="38"
      />
      <rect
        className="creation-shape creation-shape--outline"
        x="173"
        y="112"
        width="68"
        height="68"
        rx="20"
        transform="rotate(-12 207 146)"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="367"
        cy="88"
        r="8"
      />
    </g>
  );
}

function CompositionVisual() {
  return (
    <g className="creation-scene creation-scene--composition">
      <circle
        className="creation-shape creation-shape--soft"
        cx="170"
        cy="147"
        r="85"
      />
      <rect
        className="creation-shape creation-shape--strong"
        x="215"
        y="68"
        width="132"
        height="160"
        rx="32"
        transform="rotate(9 281 148)"
      />
      <path
        className="creation-shape creation-shape--paper"
        d="M83 216L198 71L267 229L83 216Z"
      />
      <circle
        className="creation-shape creation-shape--outline"
        cx="346"
        cy="106"
        r="50"
      />
      <path className="creation-line" d="M328 202C358 171 388 169 414 194" />
      <circle
        className="creation-dot creation-dot--strong"
        cx="414"
        cy="194"
        r="9"
      />
    </g>
  );
}

function OrbitVisual() {
  return (
    <g className="creation-scene creation-scene--orbit">
      <circle
        className="creation-shape creation-shape--soft"
        cx="240"
        cy="151"
        r="58"
      />
      <ellipse
        className="creation-line creation-line--orbit orbit-one"
        cx="240"
        cy="151"
        rx="151"
        ry="68"
        transform="rotate(-14 240 151)"
      />
      <ellipse
        className="creation-line creation-line--orbit creation-line--quiet orbit-two"
        cx="240"
        cy="151"
        rx="112"
        ry="121"
        transform="rotate(29 240 151)"
      />
      <circle
        className="creation-node creation-node--strong"
        cx="240"
        cy="151"
        r="22"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="384"
        cy="113"
        r="10"
      />
      <circle
        className="creation-dot creation-dot--soft"
        cx="149"
        cy="207"
        r="8"
      />
      <circle
        className="creation-dot creation-dot--strong creation-dot--pulse"
        cx="284"
        cy="44"
        r="6"
      />
    </g>
  );
}

function RadarVisual() {
  return (
    <g className="creation-scene creation-scene--radar">
      <circle
        className="creation-line creation-line--quiet"
        cx="240"
        cy="150"
        r="100"
      />
      <circle
        className="creation-line creation-line--quiet"
        cx="240"
        cy="150"
        r="68"
      />
      <circle
        className="creation-line creation-line--quiet"
        cx="240"
        cy="150"
        r="36"
      />
      <path
        className="creation-line creation-line--quiet"
        d="M140 150H340M240 50V250"
      />
      <path
        className="creation-shape creation-shape--tint creation-radar-sweep"
        d="M240 150L240 50A100 100 0 0 1 327 100L240 150Z"
      />
      <circle
        className="creation-node creation-node--strong"
        cx="240"
        cy="150"
        r="10"
      />
      <circle
        className="creation-dot creation-dot--strong creation-dot--pulse"
        cx="305"
        cy="111"
        r="7"
      />
      <circle
        className="creation-dot creation-dot--soft"
        cx="187"
        cy="186"
        r="6"
      />
    </g>
  );
}

function ProgressVisual() {
  return (
    <g className="creation-scene creation-scene--progress">
      <path
        className="creation-shape creation-shape--soft"
        d="M83 225V181H151V225H83Z"
      />
      <path
        className="creation-shape creation-shape--tint"
        d="M168 225V145H236V225H168Z"
      />
      <path
        className="creation-shape creation-shape--paper"
        d="M253 225V108H321V225H253Z"
      />
      <path
        className="creation-shape creation-shape--strong"
        d="M338 225V66H406V225H338Z"
      />
      <path
        className="creation-line creation-line--wide creation-line--progress"
        d="M95 164L191 126L281 87L386 41"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="386"
        cy="41"
        r="9"
      />
      <path className="creation-mark" d="M370 39L385 42L379 57" />
    </g>
  );
}

function RefineVisual() {
  return (
    <g className="creation-scene creation-scene--refine">
      <rect
        className="creation-shape creation-shape--outline"
        x="74"
        y="55"
        width="142"
        height="190"
        rx="28"
      />
      <rect
        className="creation-shape creation-shape--soft"
        x="115"
        y="82"
        width="142"
        height="164"
        rx="26"
      />
      <rect
        className="creation-shape creation-shape--tint"
        x="158"
        y="108"
        width="142"
        height="138"
        rx="24"
      />
      <rect
        className="creation-shape creation-shape--paper"
        x="201"
        y="134"
        width="142"
        height="112"
        rx="22"
      />
      <rect
        className="creation-shape creation-shape--strong"
        x="244"
        y="160"
        width="162"
        height="86"
        rx="20"
      />
      <path
        className="creation-mark creation-mark--light"
        d="M293 202L313 219L354 182"
      />
      <circle
        className="creation-dot creation-dot--strong"
        cx="406"
        cy="160"
        r="8"
      />
    </g>
  );
}

const visualScenes: Record<CreationVisualVariant, () => ReactNode> = {
  modules: ModulesVisual,
  windows: WindowsVisual,
  flow: FlowVisual,
  loop: LoopVisual,
  layers: LayersVisual,
  composition: CompositionVisual,
  orbit: OrbitVisual,
  radar: RadarVisual,
  progress: ProgressVisual,
  refine: RefineVisual,
};

export function CreationVisual({
  category,
  variant,
  className,
}: CreationVisualProps) {
  const resolvedVariant = variant ?? defaultVariant[category];
  const Scene = visualScenes[resolvedVariant];

  return (
    <div
      className={joinClassNames("creation-visual", className)}
      data-space={category}
      data-variant={resolvedVariant}
      aria-hidden="true"
    >
      <svg
        className="creation-visual__svg"
        viewBox="0 0 480 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <path className="creation-visual__axis" d="M38 260H442M40 40V260" />
        <Scene />
        <circle className="creation-visual__corner-dot" cx="42" cy="42" r="4" />
        <path className="creation-visual__corner-mark" d="M422 40H440V58" />
      </svg>
    </div>
  );
}

export default CreationVisual;
