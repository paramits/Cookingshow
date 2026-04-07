type SpeakBannerProps = {
  text?: string;
};

export default function SpeakBanner({
  text = "Hold [SPACE] to speak",
}: SpeakBannerProps) {
  return (
    <div
      className="content-stretch flex items-center justify-center bg-black/75 p-[10px] relative size-full"
      data-name="speak_banner"
    >
      <p
        className="relative z-10 shrink-0 font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] text-[#f5f5f5] text-[24px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}
