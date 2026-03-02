import svgPaths from "./svg-3z9qyoxukh";

function AngularBack() {
  return (
    <div
      className="absolute inset-[33.85%_79.43%_52.22%_14.06%]"
      data-name="angular-back"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 124.958 133.692"
      >
        <g id="angular-back">
          <mask
            height="134"
            id="mask0_2_63"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="125"
            x="0"
            y="0"
          >
            <g id="mask-2">
              <path
                d={svgPaths.p1d1fd80}
                fill="var(--fill-0, white)"
                id="Vector"
              />
            </g>
          </mask>
          <g mask="url(#mask0_2_63)">
            <path
              d={svgPaths.p1d1fd80}
              fill="var(--fill-0, #DD0031)"
              id="Shape"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p30adde80}
              fill="var(--fill-0, #C3002F)"
              fillRule="evenodd"
              id="Shape-path"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Head() {
  return (
    <div
      className="absolute inset-[36.3%_80.69%_54.62%_15.32%]"
      data-name="head"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 76.5849 87.2098"
      >
        <g>
          <path
            d={svgPaths.p28b83000}
            fill="var(--fill-0, white)"
            id="chick-right"
          />
          <path
            d={svgPaths.pf49e000}
            fill="var(--fill-0, white)"
            id="chick-left"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p23b70000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="mask"
          />
          <path
            d={svgPaths.p1a786db0}
            fill="var(--fill-0, white)"
            id="bottom-chick-right"
          />
          <path
            d={svgPaths.p2b95b71}
            fill="var(--fill-0, white)"
            id="bottom-chick-left"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2b3c0700}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            d={svgPaths.p2e104e00}
            fill="var(--fill-0, white)"
            id="ear-right"
          />
          <path
            d={svgPaths.p25fc9e00}
            fill="var(--fill-0, white)"
            id="ear-left"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPrimeng() {
  return (
    <div
      className="absolute contents inset-[33.85%_79.43%_52.22%_14.06%]"
      data-name="icon-primeng"
    >
      <AngularBack />
      <Head />
    </div>
  );
}

export default function PluginFileCover() {
  return (
    <div
      className="bg-[#2563eb] relative size-full"
      data-name="Plugin / file cover - 1"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[157px] justify-center leading-[0] left-[270px] not-italic text-[128px] text-white top-[572.5px] w-[705px]">
        <p className="leading-[72px] whitespace-pre-wrap">PRIMENG</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[157px] justify-center leading-[0] left-[270px] not-italic text-[64px] text-white top-[729.5px] w-[1254px]">
        <p className="leading-[72px] whitespace-pre-wrap">
          Unofficial design system for PRIMENG
        </p>
      </div>
      <IconPrimeng />
    </div>
  );
}
