import alienJudgeSvg from "../../assets/alien_judge.svg";

export default function AlienJudge() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative size-full" data-name="alien_judge">
      <img
        alt=""
        className="block max-h-full w-full object-contain object-bottom"
        src={alienJudgeSvg}
      />
    </div>
  );
}
