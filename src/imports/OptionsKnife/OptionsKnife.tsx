const knifeOptionButtonClass =
  "group relative shrink-0 w-full cursor-default select-none bg-[#95e3c9] transition-[background-color,color] duration-150 hover:bg-black";

const knifeOptionLabelClass =
  "font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e4c42] text-[16px] whitespace-nowrap cursor-default select-none transition-colors duration-150 group-hover:text-white";

function ButtonChop() {
  return (
    <div className={knifeOptionButtonClass} data-name="button_chop">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex cursor-default select-none items-center justify-center p-[10px] relative w-full">
          <p className={knifeOptionLabelClass} style={{ fontVariationSettings: "'wdth' 100" }}>
            Chop
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonSlice() {
  return (
    <div className={knifeOptionButtonClass} data-name="button_slice">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex cursor-default select-none items-center justify-center p-[10px] relative w-full">
          <p className={knifeOptionLabelClass} style={{ fontVariationSettings: "'wdth' 100" }}>
            Slice
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonMince() {
  return (
    <div className={knifeOptionButtonClass} data-name="button_mince">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex cursor-default select-none items-center justify-center p-[10px] relative w-full">
          <p className={knifeOptionLabelClass} style={{ fontVariationSettings: "'wdth' 100" }}>
            Mince
          </p>
        </div>
      </div>
    </div>
  );
}

function OptionsKnife1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[linear-gradient(to_bottom,rgba(0,108,124,0.78)_0%,rgba(0,30,52,0.86)_100%)] border-[3px] border-[#95E3C9] content-stretch flex flex-col gap-[16px] items-start left-[8.26%] p-4 right-[8.26%] top-[calc(50%+152.56px)]" data-name="options-knife">
      <ButtonChop />
      <ButtonSlice />
      <ButtonMince />
    </div>
  );
}

export default function OptionsKnife() {
  return (
    <div className="relative shadow-[0px_0px_6.3px_0px_#9ffffa] size-full" data-name="Options-knife">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <object
          className="block size-full"
          data={`${import.meta.env.BASE_URL}Options-knife.svg`}
          type="image/svg+xml"
        >
          <img
            alt=""
            className="absolute inset-0 block size-full object-fill"
            src={`${import.meta.env.BASE_URL}Options-knife.svg`}
          />
        </object>
      </div>
      <OptionsKnife1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15.6px_0px_#b0ffd0]" />
    </div>
  );
}
