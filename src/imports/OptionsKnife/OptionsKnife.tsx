import svgPaths from "./svg-p5sfpput4m";

function ButtonChop() {
  return (
    <div className="relative shrink-0 w-full" data-name="button_chop" style={{ backgroundImage: "linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%), linear-gradient(90deg, rgb(27, 103, 104) 0%, rgb(27, 103, 104) 100%), linear-gradient(rgba(51, 87, 225, 0.62) 0%, rgba(72, 71, 225, 0.62) 14.468%, rgba(25, 109, 231, 0.62) 100%), linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e4c42] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Chop
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonSlice() {
  return (
    <div className="relative shrink-0 w-full" data-name="button_slice" style={{ backgroundImage: "linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%), linear-gradient(90deg, rgb(27, 103, 104) 0%, rgb(27, 103, 104) 100%), linear-gradient(rgba(51, 87, 225, 0.62) 0%, rgba(72, 71, 225, 0.62) 14.468%, rgba(25, 109, 231, 0.62) 100%), linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e4c42] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Slice
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonMince() {
  return (
    <div className="relative shrink-0 w-full" data-name="button_mince" style={{ backgroundImage: "linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%), linear-gradient(90deg, rgb(27, 103, 104) 0%, rgb(27, 103, 104) 100%), linear-gradient(rgba(51, 87, 225, 0.62) 0%, rgba(72, 71, 225, 0.62) 14.468%, rgba(25, 109, 231, 0.62) 100%), linear-gradient(90deg, rgb(149, 227, 201) 0%, rgb(149, 227, 201) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e4c42] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mince
          </p>
        </div>
      </div>
    </div>
  );
}

function OptionsKnife1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-[8.26%] right-[8.26%] top-[calc(50%+2.56px)]" data-name="options-knife">
      <ButtonChop />
      <ButtonSlice />
      <ButtonMince />
    </div>
  );
}

export default function OptionsKnife() {
  return (
    <div className="relative shadow-[0px_0px_6.3px_0px_#9ffffa] size-full" data-name="Options-knife">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 206.879">
        <g id="Group 14306">
          <path d={svgPaths.p2047bf00} fill="url(#paint0_linear_25_157)" id="Vector 47" stroke="var(--stroke-0, #EDEDED)" strokeWidth="3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_25_157" x1="115" x2="115" y1="0" y2="206.879">
            <stop stopColor="#006C7C" stopOpacity="0.78" />
            <stop offset="1" stopColor="#001E34" stopOpacity="0.86" />
          </linearGradient>
        </defs>
      </svg>
      <OptionsKnife1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15.6px_0px_#b0ffd0]" />
    </div>
  );
}
