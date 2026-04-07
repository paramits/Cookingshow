import { useState, useEffect } from "react";
import { useGame } from "../app/context/GameContext";
import SpeakBanner from "./SpeakBanner/SpeakBanner";

/** Same countdown + copy as Stage 2 left panel (`Stage2Complete` Group2 + Time). */
function Stage2Time({ onTimeEnd }: { onTimeEnd?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (prev > 0 && onTimeEnd) {
            onTimeEnd();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] w-[205px]"
      data-name="Time"
    >
      <p
        className="font-['Martian_Mono:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-center whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        TIME LEFT
      </p>
      <p className="font-['Digital_Numbers:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[64px] w-[min-content]">
        {timeDisplay}
      </p>
    </div>
  );
}

function Stage2InstructionsAndTimer({ onTimeEnd }: { onTimeEnd?: () => void }) {
  return (
    <div className="absolute left-[62px] top-[86px] z-10 flex w-[307px] flex-col gap-[29px] text-[#b0dfff]">
      <p
        className="m-0 font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Present your dish to the judges until time runs out!
      </p>
      <Stage2Time onTimeEnd={onTimeEnd} />
    </div>
  );
}

function PitchNoteHeader() {
  return (
    <div className="bg-[#b0dfff] col-1 content-stretch flex items-center ml-0 mt-0 px-[4px] relative row-1" data-name="pitch-note-label">
      <p className="font-['Departure_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#192648] text-[16px] whitespace-nowrap">
        Pitch notes
      </p>
    </div>
  );
}

function PitchNoteHeaderRow() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <PitchNoteHeader />
    </div>
  );
}

function PitchNotesHeading() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="header">
      <PitchNoteHeaderRow />
    </div>
  );
}

function PitchBulletsReadOnly() {
  const { pitchBullets } = useGame();
  const displayBullets = pitchBullets.filter((bullet) => bullet.trim() !== "");

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="pitch-bullets">
      {displayBullets.length > 0 ? (
        displayBullets.map((bullet, index) => (
          <div
            key={index}
            className="content-stretch flex gap-[7.141px] min-h-[35px] items-start relative shrink-0 w-[286px] font-['Martian_Mono:Regular',sans-serif] text-[16px] leading-[150%]"
          >
            <div
              className="bg-[#b0dfff] shrink-0 size-[5.356px] self-start mt-[calc((1lh-5.356px)/2)]"
              aria-hidden
            />
            <p
              className="flex-[1_0_0] font-['Martian_Mono:Regular',sans-serif] font-normal leading-[150%] min-h-px min-w-px relative text-[#b0dfff] text-[16px] break-words"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {bullet}
            </p>
          </div>
        ))
      ) : (
        <div className="content-stretch flex gap-[7.141px] min-h-[35px] items-center relative shrink-0 w-[286px]">
          <div className="bg-[#b0dfff] shrink-0 size-[5.356px]" aria-hidden />
          <p
            className="flex-[1_0_0] font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#b0dfff]/50 text-[14.28px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            No pitch notes added
          </p>
        </div>
      )}
    </div>
  );
}

function PitchNotesPanel() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[16px] h-[353px] items-start left-[73px] top-[313px] w-[286px] z-10"
      data-name="pitchNotes"
    >
      <PitchNotesHeading />
      <PitchBulletsReadOnly />
    </div>
  );
}

export default function Stage4Complete() {
  const [showSpeakBanner, setShowSpeakBanner] = useState(true);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [ellipsisCount, setEllipsisCount] = useState(1);
  const [showJudgeScore, setShowJudgeScore] = useState(false);

  // Animate "Judges are discussing." / ".." / "..." once time is up
  useEffect(() => {
    if (!isTimeUp) {
      setEllipsisCount(1);
      return;
    }

    const interval = setInterval(
      () => setEllipsisCount((prev) => (prev === 3 ? 1 : prev + 1)),
      500,
    );

    return () => clearInterval(interval);
  }, [isTimeUp]);

  // Hide/show banner while SPACE is held
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space" || e.repeat) return;
      if (isTimeUp) return;
      e.preventDefault();
      setShowSpeakBanner(false);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (isTimeUp) return;
      setShowSpeakBanner(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isTimeUp]);

  // Keep the discussing banner visible for 5s, then swap judges graphic.
  useEffect(() => {
    if (!isTimeUp) return;
    setShowSpeakBanner(true);

    const timeout = setTimeout(() => {
      setShowSpeakBanner(false);
      setShowJudgeScore(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isTimeUp]);

  const handleTimeEnd = () => {
    setIsTimeUp(true);
    setShowSpeakBanner(true);
  };

  const bannerText = isTimeUp
    ? `Judges are discussing${".".repeat(ellipsisCount)}`
    : "Hold [SPACE] to speak";

  return (
    <div className="relative size-full" data-name="Stage 4">
      <img
        src={`${import.meta.env.BASE_URL}${showJudgeScore ? "Stage4_score.svg" : "Stage4.svg"}`}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 block size-full object-fill select-none"
        draggable={false}
      />
      <Stage2InstructionsAndTimer onTimeEnd={handleTimeEnd} />
      <PitchNotesPanel />
      {showSpeakBanner && (
        <div
          className="absolute left-0 flex w-full items-center justify-center"
          style={{ top: "50%", transform: "translateY(-50%)", zIndex: 1000 }}
        >
          <div className="flex h-[200px] w-full items-center justify-center">
            <SpeakBanner text={bannerText} />
          </div>
        </div>
      )}
    </div>
  );
}
