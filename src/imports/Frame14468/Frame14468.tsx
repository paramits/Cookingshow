export default function Frame({ itemName }: { itemName: string }) {
  return (
    <div className="relative rounded-[4px] p-[10px]" data-name="tooltip">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[4px] bg-[#4e4e4e] mix-blend-multiply" />
      <p
        className="relative whitespace-nowrap text-center font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] text-[16px] text-white"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {itemName}
      </p>
    </div>
  );
}