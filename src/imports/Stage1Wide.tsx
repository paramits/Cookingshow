import svgPaths from "./svg-ijdhf288un";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useGame } from "../app/context/GameContext";

function Group() {
  return (
    <div className="col-1 h-[357px] ml-0 mt-[4.29px] relative row-1 w-[270px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 357">
        <g id="Group 14306">
          <g id="Vector 47">
            <path d={svgPaths.p139d2400} fill="#262626" fillOpacity={0.75} />
            <path d={svgPaths.p139d2400} stroke="var(--stroke-0, #196DE7)" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start leading-[normal] ml-[27px] mt-[117.29px] relative row-1 text-[#d3edfe] w-[205px]" data-name="Time">
      <p className="font-['Martian_Mono:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIME LEFT
      </p>
      <p className="font-['Digital_Numbers:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[64px] w-[min-content]">{timeDisplay}</p>
    </div>
  );
}

function Frame() {
  const navigate = useNavigate();

  return (
    <div 
      className="col-1 content-stretch flex items-center justify-center ml-[40px] mt-[258.29px] p-[24px] relative rounded-[16px] row-1 shadow-[0px_4px_2.5px_0px_#667bfa,0px_-1px_9.1px_0px_#667bfa] w-[189px] cursor-pointer"
      onClick={() => navigate('/stage2')}
    >
      <div aria-hidden="true" className="absolute bg-gradient-to-b from-[#3357e1] inset-0 pointer-events-none rounded-[16px] to-[#196de7] via-[#4847e1] via-[14.468%]" />
      <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fffcea] text-[21.424px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Finish
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_16.1px_0px_#f9b1ff]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 h-[21.14px] ml-[23px] mt-0 relative row-1 w-[50.565px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5651 21.1403">
        <g id="Frame 14419">
          <path d={svgPaths.p12144a00} fill="var(--fill-0, #196DE7)" id="Vector 52" />
          <path d={svgPaths.p1a396540} fill="var(--fill-0, #196DE7)" id="Union" />
          <path d={svgPaths.pdc5d000} fill="var(--fill-0, #196DE7)" id="Vector 50" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <p className="col-1 font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] ml-[27px] mt-[48.29px] relative row-1 text-[#d3edfe] text-[16px] w-[226px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prepare points to remember the recipe.
      </p>
      <Time />
      <Frame />
      <Frame1 />
      <div className="col-1 h-[15px] ml-[68px] mt-[7.29px] relative row-1 w-[199px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199 15.0004">
          <g id="Vector 53">
            <path d={svgPaths.p2e5ebc40} fill="var(--fill-0, #196DE7)" style={{ width: "300px" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33px] mt-[38px] place-items-start relative row-1 text-black">
      <p className="col-1 font-['Poppins:Regular',sans-serif] leading-[normal] ml-0 mt-[52px] not-italic relative row-1 text-[16px] w-[304px]">To prepare this dish, begin by heating a pot of galaxy broth until it starts to boil. Once the broth is boiling, add a handful of canopus noodles and stir them occasionally so they absorb the flavor of the broth. While the noodles cook, slice the glowroot into thin pieces and drop them into the pot to add texture and sweetness. Serve in a bowl and finish the dish by sprinkling a pinch of Kentaurus seasoning just before serving to enhance the flavour.</p>
      <p className="col-1 font-['Poppins:Bold','Noto_Sans:Bold',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[21.424px] w-[304px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>{`How to make ⍀⟒☊⟟⌿⟒ `}</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[549px] ml-0 mt-0 row-1 w-[370px]" style={{ backgroundImage: "linear-gradient(rgb(255, 253, 241) 0%, rgb(231, 223, 201) 76.097%, rgb(230, 228, 220) 99.669%, rgb(171, 167, 158) 100%)" }} />
      <Group3 />
    </div>
  );
}

function adjustTextAreaHeight(el: HTMLTextAreaElement | null) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

function HLines() {
  const { bullets, setBullets } = useGame();
  const inputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);
  const [wordsRemaining, setWordsRemaining] = useState(30);

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const getTotalWords = () => {
    return bullets.reduce((total, bullet) => total + countWords(bullet), 0);
  };

  useEffect(() => {
    const totalWords = getTotalWords();
    setWordsRemaining(Math.max(0, 30 - totalWords));
  }, [bullets]);

  useEffect(() => {
    inputRefs.current.forEach(adjustTextAreaHeight);
  }, [bullets]);

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      // Create new bullet after current one
      const newBullets = [...bullets];
      newBullets.splice(index + 1, 0, "");
      setBullets(newBullets);
      
      // Focus the new input after render
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    } else if (e.key === "Backspace" && bullets[index] === "" && bullets.length > 1) {
      e.preventDefault();
      // Delete current bullet if empty and not the last one
      const newBullets = bullets.filter((_, i) => i !== index);
      setBullets(newBullets);
      
      // Focus previous input
      setTimeout(() => {
        inputRefs.current[Math.max(0, index - 1)]?.focus();
      }, 0);
    }
  };

  const handleChange = (index: number, value: string) => {
    const newBullets = [...bullets];
    newBullets[index] = value;
    setBullets(newBullets);
    requestAnimationFrame(() => adjustTextAreaHeight(inputRefs.current[index]));
  };

  return (
    <>
      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start ml-[55.13px] mt-[103.84px] relative row-1 w-[315px] z-10" data-name="h_lines">
        {bullets.map((bullet, index) => (
          <div key={index} className="content-stretch flex gap-[7.141px] items-start w-full">
            <div className="bg-[#b0dfff] shrink-0 size-[5.356px] mt-[12px]" />
            <textarea
              spellCheck={false}
              ref={(el) => {
                inputRefs.current[index] = el;
                if (el) requestAnimationFrame(() => adjustTextAreaHeight(el));
              }}
              value={bullet}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              rows={1}
              wrap="soft"
              className="w-[270px] min-h-[31px] resize-none overflow-hidden font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.75] bg-transparent border-none outline-none text-[#b0dfff] text-[17.85px] placeholder:text-[#b0dfff]/50 pointer-events-auto break-words whitespace-pre-wrap"
              placeholder="Type here..."
              style={{ fontVariationSettings: "'wdth' 100" }}
            />
          </div>
        ))}
      </div>
      <div className="bg-[#b0dfff] col-1 content-stretch flex font-['Departure_Mono:Regular',sans-serif] gap-[8px] items-center leading-[normal] ml-[55.13px] mt-[65px] not-italic px-[4px] relative row-1 text-[#192648] text-[16px] whitespace-nowrap z-10" data-name="words-remaining">
        <p className="relative shrink-0">Words remaining:</p>
        <p className="relative shrink-0">{wordsRemaining}</p>
      </div>
    </>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 relative row-1 ml-0 mt-0 h-[599px] w-[410px] pointer-events-none" aria-hidden>
        <img src={`${import.meta.env.BASE_URL}pad.svg`} alt="" className="absolute inset-0 block size-full object-fill select-none" draggable={false} />
      </div>
      <HLines />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[104.176px] left-[221px] top-[427px] w-[115.759px]">
      <div className="absolute inset-[-0.96%_-0.86%]">
        <img
          src={`${import.meta.env.BASE_URL}bowl-sketch.png`}
          alt=""
          className="block size-full object-fill select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[29px] items-center relative shrink-0">
      <Group4 />
      <Group2 />
      <Group5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[89px] items-center left-[66px] top-[77px]">
      <Group1 />
      <Frame2 />
    </div>
  );
}

export default function Stage1Wide() {
  const ambienceRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = ambienceRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    audio.loop = true;
    const playAttempt = audio.play();
    if (playAttempt !== undefined) {
      playAttempt.catch(() => {});
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="relative size-full" data-name="Stage 1 - wide">
      <audio
        ref={ambienceRef}
        src={`${import.meta.env.BASE_URL}stage2-3.mp3`}
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      </div>
      <Frame3 />
    </div>
  );
}