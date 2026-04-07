import imgImage645 from "./6f284b13ef1b2df6bcae048560a1da795b962f40.png";

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

function OptionButtons() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-1/2 w-full" data-name="option-buttons">
      <ButtonChop />
      <ButtonSlice />
      <ButtonMince />
    </div>
  );
}

function OptionsKnife1() {
  return (
    <div className="absolute contents left-[8.26%] right-[8.26%] top-[calc(50%+2.56px)]" data-name="options-knife">
      <OptionButtons />
    </div>
  );
}

export default function OptionsKnife() {
  return (
    <div className="relative shadow-[0px_0px_6.3px_0px_#9ffffa] size-full" data-name="Options-knife">
      <div className="absolute h-[207px] left-0 top-[-1px] w-[230px]" data-name="image 645">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage645} />
      </div>
      <OptionsKnife1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15.6px_0px_#b0ffd0]" />
    </div>
  );
}