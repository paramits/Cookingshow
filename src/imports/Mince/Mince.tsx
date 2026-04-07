import minceSvg from "../../assets/mince.svg";

export default function Mince() {
  return (
    <div className="relative size-full" data-name="mince">
      <img alt="" className="absolute block size-full object-fill" src={minceSvg} />
    </div>
  );
}
