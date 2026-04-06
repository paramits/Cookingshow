export default function SpeakBanner() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full" data-name="speak_banner">
      <div aria-hidden="true" className="absolute bg-[#4e4e4e] inset-0 mix-blend-multiply pointer-events-none opacity-80" />
      <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hold [SPACE] to speak
      </p>
    </div>
  );
}