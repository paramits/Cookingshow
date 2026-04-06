import svgPaths from "./svg-ijdhf288un";
import imgStage1Wide from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgStage1Wide1 from "figma:asset/1e11969d2d7bcf82fe79e295a5ee1fcd55ec4e5f.png";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useGame } from "../app/context/GameContext";

function Group() {
  return (
    <div className="col-1 h-[357px] ml-0 mt-[4.29px] relative row-1 w-[270px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 357">
        <g id="Group 14306">
          <g id="Vector 47">
            <path d={svgPaths.p139d2400} fill="var(--fill-0, #4B4B4B)" style={{ mixBlendMode: "multiply" }} />
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
            <path d={svgPaths.p2e5ebc40} fill="var(--fill-0, #D0DCFF)" style={{ mixBlendMode: "color-dodge" }} />
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

function HLines() {
  const { bullets, setBullets } = useGame();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
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

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
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
  };

  return (
    <>
      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start ml-[55.13px] mt-[103.84px] relative row-1 w-[315px] z-10" data-name="h_lines">
        {bullets.map((bullet, index) => (
          <div key={index} className="content-stretch flex gap-[7.141px] items-center w-full">
            <div className="bg-[#b0dfff] shrink-0 size-[5.356px]" />
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={bullet}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="flex-1 font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.75] bg-transparent border-none outline-none text-[#b0dfff] text-[17.85px] placeholder:text-[#b0dfff]/50 pointer-events-auto"
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
      <div className="bg-gradient-to-b col-1 from-[#070f21] h-[539px] ml-[2.13px] mt-[29px] row-1 to-[#43588b] w-[378px]" />
      <HLines />
      <div className="col-1 flex h-[598.907px] items-center justify-center ml-0 mt-0 relative row-1 w-[409.574px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="h-[409.574px] relative w-[598.907px]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 598.907 409.574">
              <g filter="url(#filter0_i_1_823)" id="Union">
                <path d={svgPaths.p24e1a7f0} fill="url(#paint0_linear_1_823)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="413.574" id="filter0_i_1_823" width="598.907" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.842047 0 0 0 0 0.842047 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_823" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_823" x1="598.907" x2="0" y1="204.787" y2="204.787">
                  <stop stopColor="#717171" />
                  <stop offset="1" stopColor="#4B4B4B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[598.907px] items-center justify-center ml-0 mt-0 relative row-1 w-[409.574px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="h-[409.574px] relative w-[598.907px]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 598.907 409.574">
              <g id="Union">
                <path d={svgPaths.p24e1a7f0} fill="url(#paint0_linear_1_804)" style={{ mixBlendMode: "color-dodge" }} />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_804" x1="598.907" x2="0" y1="204.787" y2="204.787">
                  <stop stopColor="#4463C0" />
                  <stop offset="1" stopColor="#636880" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[104.176px] left-[221px] top-[427px] w-[115.759px]">
      <div className="absolute inset-[-0.96%_-0.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.76 106.176">
          <g id="Group 14381">
            <path d={svgPaths.p23960e00} id="Vector 33" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3343380} id="Vector 34" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3aeefc00} id="Vector 35" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2386b760} id="Vector 36" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1032dd40} id="Vector 37" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1b801d40} id="Vector 38" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p492f200} id="Vector 39" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p27645700} id="Vector 40" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
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
  return (
    <div className="relative size-full" data-name="Stage 1 - wide">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage1Wide} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage1Wide1} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <div className="absolute blur-[5.8px] h-[750px] left-0 top-0 w-[1300px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage1Wide} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage1Wide1} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}