export default function Frame({ itemName }: { itemName: string }) {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex items-center justify-center left-0 p-[10px] rounded-[4px] top-0" data-name="tooltip">
        <div aria-hidden="true" className="absolute bg-[#4e4e4e] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
        <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {itemName}
        </p>
      </div>
    </div>
  );
}