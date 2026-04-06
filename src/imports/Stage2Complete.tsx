import svgPaths from "./svg-09tz5m8t3b";
import imgStage2Complete from "figma:asset/1e11969d2d7bcf82fe79e295a5ee1fcd55ec4e5f.png";
import imgRectangle34647297 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import { useGame } from "../app/context/GameContext";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Group14385 from "./Group14385";
import OptionsKnife from "./OptionsKnife-1/OptionsKnife-28-188";
import Chopped from "./Chopped/Chopped";
import Sliced from "./Sliced-1/Sliced-29-1191";
import Mince from "./Mince/Mince";
import Frame14462 from "./Frame14462-1/Frame14462";
import Frame14463 from "./Frame14463/Frame14463";
import Frame14464 from "./Frame14464-1/Frame14464";
import Frame14465 from "./Frame14465-1/Frame14465";
import Frame14466 from "./Frame14466-1/Frame14466";
import Frame14467 from "./Frame14467/Frame14467";
import BowlSoup from "./BowlSoup/BowlSoup";
import BowlSeasoning from "./BowlSeasoning/BowlSeasoning";
import AlienJudge from "./AlienJudge-2/AlienJudge";
import SpeakBanner from "./SpeakBanner/SpeakBanner";
import Tooltip from "./Frame14468/Frame14468";

// Utility function to format item names from camelCase to Title Case
function formatItemName(itemType: string): string {
  // Add space before capital letters and capitalize first letter of each word
  return itemType
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Time() {
  const [timeLeft, setTimeLeft] = useState(480); // 8 minutes in seconds

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
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start leading-[normal] left-[62px] top-[163.29px] w-[205px]" data-name="Time">
      <p className="font-['Martian_Mono:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIME LEFT
      </p>
      <p className="font-['Digital_Numbers:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[64px] w-[min-content]">{timeDisplay}</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[62px] text-[#b0dfff] top-[86px]">
      <p className="absolute font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] left-[62px] text-[16px] top-[86px] w-[307px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Click & drag items to cook. `}
        <br aria-hidden="true" />
        Watch out for judge visits!
      </p>
      <Time />
    </div>
  );
}

function WordsRemaining() {
  return (
    <div className="bg-[#b0dfff] col-1 content-stretch flex items-center ml-0 mt-0 px-[4px] relative row-1" data-name="words-remaining">
      <p className="font-['Departure_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#192648] text-[16px] whitespace-nowrap">Recipe notes</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <WordsRemaining />
    </div>
  );
}

function Header() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="header">
      <Group4 />
    </div>
  );
}

function Bullets() {
  const { bullets } = useGame();
  
  // Filter out empty bullets for display
  const displayBullets = bullets.filter(bullet => bullet.trim() !== "");

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bullets">
      {displayBullets.length > 0 ? (
        displayBullets.map((bullet, index) => (
          <div key={index} className="content-stretch flex gap-[7.141px] min-h-[35px] items-start relative shrink-0 w-[286px]">
            <div className="bg-[#b0dfff] shrink-0 size-[5.356px] mt-[6px]" />
            <p className="flex-[1_0_0] font-['Martian_Mono:Regular',sans-serif] font-normal leading-[150%] min-h-px min-w-px relative text-[#b0dfff] text-[14.28px] text-[16px] break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
              {bullet}
            </p>
          </div>
        ))
      ) : (
        <div className="content-stretch flex gap-[7.141px] min-h-[35px] items-center relative shrink-0 w-[286px]">
          <div className="bg-[#b0dfff] shrink-0 size-[5.356px]" />
          <p className="flex-[1_0_0] font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#b0dfff]/50 text-[14.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            No notes added
          </p>
        </div>
      )}
    </div>
  );
}

function RecipeNotes() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[353px] items-start left-[73px] top-[313px] w-[286px]" data-name="recipeNotes">
      <Header />
      <Bullets />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[18px] top-[0.28px]">
      <div className="absolute bg-gradient-to-b from-[#070f21] h-[693px] left-[38px] to-[#43588b] top-[32px] w-[354px]" />
      <div className="absolute h-[750.519px] left-[18px] top-[0.28px] w-[409.574px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409.574 750.519">
          <g filter="url(#filter0_i_1_1238)" id="Union">
            <path clipRule="evenodd" d={svgPaths.p36239af0} fill="url(#paint0_linear_1_1238)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="754.519" id="filter0_i_1_1238" width="409.574" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.842047 0 0 0 0 0.842047 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_1238" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1238" x1="204.787" x2="204.787" y1="626.626" y2="27.7188">
              <stop stopColor="#717171" />
              <stop offset="1" stopColor="#4B4B4B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[750.519px] left-[18px] top-[0.28px] w-[409.574px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 409.574 750.519">
          <g filter="url(#filter0_i_1_1236)" id="Union">
            <path clipRule="evenodd" d={svgPaths.p36239af0} fill="url(#paint0_linear_1_1236)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="754.519" id="filter0_i_1_1236" width="409.574" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.842047 0 0 0 0 0.842047 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_1236" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1236" x1="204.787" x2="204.787" y1="750.519" y2="0">
              <stop stopColor="#4463C0" />
              <stop offset="1" stopColor="#636880" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group2 />
      <RecipeNotes />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.67%_18.51%_12.67%_18.64%]">
      <div className="absolute inset-[-1.75%_0_-1.08%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.28 121.344">
          <g id="Group 14321">
            <rect fill="url(#paint0_radial_1_1221)" height="88" id="Rectangle 34647287" width="109" x="15" y="19.0679" />
            <g filter="url(#filter0_d_1_1221)" id="Ellipse 12">
              <ellipse cx="69.5341" cy="53.2746" fill="var(--fill-0, #3E3939)" rx="19.8681" ry="17.0866" />
            </g>
            <ellipse cx="69.5349" cy="50.8905" fill="var(--fill-0, #625F5F)" id="Ellipse 13" rx="16.6892" ry="14.7024" />
            <path d={svgPaths.p20b84ef0} fill="url(#paint1_linear_1_1221)" id="Vector 8 (Stroke)" />
            <path d={svgPaths.p388a30c0} id="Vector 9" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
            <g id="Group 14301">
              <path d={svgPaths.p12b95900} id="Vector 10" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
              <path d={svgPaths.p33a79a00} id="Vector 12" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
              <path d="M39.7362 53.2785H0" id="Vector 11" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
            </g>
            <g id="Group 14302">
              <path d={svgPaths.p31099800} id="Vector 10_2" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
              <path d={svgPaths.p1a1f3680} id="Vector 12_2" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
              <path d="M98.5435 53.2785H138.28" id="Vector 11_2" stroke="var(--stroke-0, #3E3939)" strokeWidth="7.94725" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.1732" id="filter0_d_1_1221" width="47.7362" x="45.666" y="36.1881">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1221" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1221" mode="normal" result="shape" />
            </filter>
            <radialGradient cx="0" cy="0" gradientTransform="translate(69.5 63.0679) rotate(90) scale(44 54.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1221" r="1">
              <stop stopColor="#8B8B8B" />
              <stop offset="1" stopColor="#6B6B6B" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1221" x1="70" x2="70" y1="79.0679" y2="120.068">
              <stop stopColor="#8E8D8D" />
              <stop offset="0.0866075" stopColor="#535050" />
              <stop offset="0.545472" stopColor="#020202" />
              <stop offset="0.808967" stopColor="#3E3939" />
              <stop offset="1" stopColor="#3E3939" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[6%_12.73%]">
      <div className="absolute bg-gradient-to-b from-[#3e3939] inset-[6%_12.73%] to-black via-[#505050] via-[60.104%]" />
      <Group3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[46.67%_85.68%_40.33%_11.14%]">
      <div className="absolute inset-[-0.44%_-6.26%_-1.23%_-7.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.93074 19.8271">
          <g id="Group 14324">
            <path d={svgPaths.p38ec8d80} id="Vector 64" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p3d234400} id="Vector 65" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-0.44%_-6.74%_-1.23%_-7.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.43074 19.8271">
          <g id="Group 14325">
            <path d={svgPaths.p38ec8d80} id="Vector 64" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p31097480} id="Vector 65" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CookingArea({ potOnStove, potHasBroth, potHasNoodles, potHasGlowroot, bowlOnTray, bowlHasSoup, bowlHasSeasoning }: { potOnStove: boolean; potHasBroth: boolean; potHasNoodles: boolean; potHasGlowroot: boolean; bowlOnTray: boolean; bowlHasSoup: boolean; bowlHasSeasoning: boolean }) {
  return (
    <div className="col-1 content-stretch flex gap-[20px] items-center ml-[26px] mt-[222px] relative row-1" data-name="Cooking_area">
      <div className="h-[150px] relative shrink-0 w-[220px]" data-name="stove">
        <div className="absolute bg-[rgba(234,255,0,0)] inset-0" data-name="stove_area" />
        <Group5 />
        {potOnStove && !potHasBroth && (
          <div
            className="absolute"
            style={{
              left: '50%',
              bottom: '40px',
              transform: 'translateX(-50%)',
              width: '173px',
              height: '168px'
            }}
          >
            <Frame14463 />
          </div>
        )}
        {potOnStove && potHasBroth && !potHasNoodles && (
          <div
            className="absolute"
            style={{
              left: '50%',
              bottom: '40px',
              transform: 'translateX(-50%)',
              width: '173px',
              height: '168px'
            }}
          >
            <Frame14462 />
          </div>
        )}
        {potOnStove && potHasBroth && potHasNoodles && !potHasGlowroot && (
          <div
            className="absolute"
            style={{
              left: '50%',
              bottom: '40px',
              transform: 'translateX(-50%)',
              width: '173px',
              height: '168px'
            }}
          >
            <Frame14464 />
          </div>
        )}
        {potOnStove && potHasBroth && potHasNoodles && potHasGlowroot && (
          <div
            className="absolute"
            style={{
              left: '50%',
              bottom: '40px',
              transform: 'translateX(-50%)',
              width: '173px',
              height: '168px'
            }}
          >
            <Frame14465 />
          </div>
        )}
      </div>
      <div className="h-[150px] relative shrink-0 w-[220px]" data-name="board">
        <div className="absolute bg-[rgba(234,255,0,0)] inset-0" data-name="stove_area" />
        <div className="absolute inset-[10%_9.55%_10%_10%]" data-name="cutting_board">
          <div className="absolute bg-gradient-to-b from-[#9b7f5a] from-[82.143%] inset-[6.67%_0_0_0] rounded-[6px] to-[#352c1f] to-[120.98%]" />
          <div className="absolute bg-gradient-to-b from-[#dcbe95] inset-[0_0_6.67%_0] rounded-[6px] to-[#997e59]" />
          <div className="absolute border-3 border-[#9b7f5a] border-solid inset-[10.83%_6.21%_17.5%_6.21%] rounded-[6px]" />
        </div>
      </div>
      <div className="h-[150px] relative shrink-0 w-[220px]" data-name="tray">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 150">
          <g id="Group 14329">
            <g id="stove_area" />
            <ellipse cx="110.5" cy="80" fill="var(--fill-0, #012546)" id="Ellipse 27" rx="83.5" ry="44" />
            <ellipse cx="110.5" cy="70" fill="var(--fill-0, #012546)" id="Ellipse 29" rx="86.5" ry="44" />
            <ellipse cx="110.5" cy="74" fill="url(#paint0_linear_1_1180)" id="Ellipse 28" rx="83.5" ry="44" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1180" x1="110.5" x2="110.5" y1="30" y2="118">
              <stop stopColor="#AEA5A5" />
              <stop offset="1" stopColor="#888888" />
            </linearGradient>
          </defs>
        </svg>
        <Group6 />
        <div className="absolute flex inset-[46.67%_10.68%_40.33%_86.36%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[19.5px] rotate-180 w-[6.5px]">
            <Group7 />
          </div>
        </div>
        {bowlOnTray && !bowlHasSoup && (
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '82px',
              height: '80px'
            }}
          >
            <Frame14467 />
          </div>
        )}
        {bowlOnTray && bowlHasSoup && !bowlHasSeasoning && (
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '82px',
              height: '80px'
            }}
          >
            <BowlSoup />
          </div>
        )}
        {bowlOnTray && bowlHasSoup && bowlHasSeasoning && (
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '82px',
              height: '80px'
            }}
          >
            <BowlSeasoning />
          </div>
        )}
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[11%_15%_10.56%_14%]">
      <div className="absolute inset-[0_-11.4%_-11.33%_-10.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.34 87.323">
          <g id="Group 14331">
            <path d={svgPaths.p22a0ba30} id="Vector 68" stroke="url(#paint0_linear_1_1194)" strokeLinecap="round" strokeWidth="19" />
            <ellipse cx="43.2444" cy="2" fill="var(--fill-0, #747474)" id="Ellipse 31" rx="6" ry="2" />
            <path d={svgPaths.p3346a2c8} id="Vector 67" stroke="var(--stroke-0, #4B4B4B)" strokeLinecap="round" strokeWidth="19" />
            <rect fill="url(#paint1_linear_1_1194)" height="8" id="Rectangle 34647332" width="4" x="41.2444" y="2" />
            <g id="Rectangle 34647330">
              <path d={svgPaths.p2f3fb080} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p2f3fb080} fill="url(#paint2_linear_1_1194)" />
            </g>
            <path d={svgPaths.pa294b80} id="Vector 66" stroke="url(#paint3_linear_1_1194)" strokeLinecap="round" strokeWidth="19" />
            <path d={svgPaths.pb57ab00} fill="url(#paint4_linear_1_1194)" id="Rectangle 34647331" />
            <ellipse cx="43.2444" cy="1.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 30" rx="6" ry="1.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1194" x1="9.57674" x2="76.9129" y1="74.3293" y2="73.1085">
              <stop stopColor="#69696B" />
              <stop offset="1" stopColor="#3F3F3F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1194" x1="43.2444" x2="43.2444" y1="2" y2="10">
              <stop stopColor="#A4A1A1" />
              <stop offset="1" stopColor="#3E3D3D" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1194" x1="12.2444" x2="60.2444" y1="21.5" y2="41.5">
              <stop stopColor="#EFEFEF" />
              <stop offset="1" stopColor="#737373" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1194" x1="12.6607" x2="73.8295" y1="54.6632" y2="53.5543">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#737373" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1194" x1="43.2444" x2="43.2444" y1="6" y2="16">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#737373" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GalaxyBroth() {
  return (
    <div className="absolute inset-[-2.68%_-3.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 118">
        <g id="galaxyBroth">
            <g id="Union">
              <mask fill="black" height="118" id="path-1-outside-1_1_1153" maskUnits="userSpaceOnUse" width="85" x="0" y="0">
                <rect fill="white" height="118" width="85" />
                <path d={svgPaths.p5f69f00} />
              </mask>
              <path d={svgPaths.p5f69f00} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.pf9ad200} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1153)" />
            </g>
            <g id="Group 14335">
              <path d={svgPaths.p2712b300} fill="var(--fill-0, #D9D9D9)" id="Rectangle 34647338" />
              <path d={svgPaths.p1343b900} fill="url(#paint0_linear_1_1153)" id="Rectangle 34647339" />
              <path d={svgPaths.p8085700} fill="url(#paint1_linear_1_1153)" id="Rectangle 34647340" />
              <rect fill="var(--fill-0, #7C0909)" height="2" id="Rectangle 34647341" width="15" x="58" y="13" />
              <rect fill="url(#paint2_linear_1_1153)" height="11" id="Rectangle 34647342" rx="1" width="17" x="57" y="3" />
              <g id="Group 14334">
                <g id="Mask group">
                  <mask height="100" id="mask0_1_1153" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="71" x="7" y="15">
                    <path d={svgPaths.p2712b300} fill="var(--fill-0, #3F48CC)" id="Rectangle 34647339_2" />
                  </mask>
                  <g mask="url(#mask0_1_1153)">
                    <path d={svgPaths.p2712b300} fill="var(--fill-0, #3F4055)" id="Rectangle 34647338_2" />
                    <path d={svgPaths.p3f811c00} fill="url(#paint3_linear_1_1153)" id="Vector 69" />
                  </g>
                </g>
                <g id="Union_2">
                  <path d={svgPaths.p11d95500} fill="var(--fill-0, #D9D9D9)" />
                  <path d={svgPaths.p11d95500} fill="url(#paint4_radial_1_1153)" fillOpacity="0.8" />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1153" x1="5.5" x2="5.5" y1="15" y2="37">
              <stop stopColor="#3F4055" />
              <stop offset="1" stopColor="#5064BF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1153" x1="79.5" x2="79.5" y1="15" y2="37">
              <stop stopColor="#3F4055" />
              <stop offset="1" stopColor="#5064BF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1153" x1="65.5" x2="65.5" y1="3" y2="14">
              <stop stopColor="#EC2121" />
              <stop offset="1" stopColor="#861313" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1153" x1="41.75" x2="41.75" y1="62.5" y2="117">
              <stop stopColor="#B069BB" />
              <stop offset="1" stopColor="#4463C0" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(7.08725 13.7941 -27.3545 14.0541 42.5015 54.9995)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_1153" r="1">
              <stop stopColor="#8F5395" />
              <stop offset="0.125042" stopColor="#8FF7E4" />
              <stop offset="0.240427" stopColor="#D542A2" />
              <stop offset="0.528891" stopColor="#196DE7" />
              <stop offset="0.97601" stopColor="#02204B" />
            </radialGradient>
          </defs>
        </svg>
      </div>
  );
}

function ProcyonBroth() {
  return (
    <div className="absolute inset-[-2.68%_-3.8%_-2.68%_-3.79%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 118">
          <g id="procyonBroth">
            <g id="Union">
              <mask fill="black" height="118" id="path-1-outside-1_1_1135" maskUnits="userSpaceOnUse" width="85" x="0" y="0">
                <rect fill="white" height="118" width="85" />
                <path d={svgPaths.p5f69f00} />
              </mask>
              <path d={svgPaths.p5f69f00} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.pf9ad200} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1135)" />
            </g>
            <g id="Group 14338">
              <g id="Mask group">
                <mask height="100" id="mask0_1_1135" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="6" y="15">
                  <path d={svgPaths.p1477ce00} fill="var(--fill-0, #3F48CC)" id="Rectangle 34647339" />
                </mask>
                <g mask="url(#mask0_1_1135)">
                  <path d={svgPaths.p1477ce00} fill="url(#paint0_linear_1_1135)" id="Rectangle 34647338" />
                  <ellipse cx="42.998" cy="105" fill="url(#paint1_linear_1_1135)" id="Ellipse 37" rx="47" ry="44" />
                  <g filter="url(#filter0_d_1_1135)" id="Star 1">
                    <path d={svgPaths.p23641ac0} fill="url(#paint2_linear_1_1135)" />
                  </g>
                </g>
              </g>
              <path d={svgPaths.p127df300} fill="url(#paint3_linear_1_1135)" id="Rectangle 34647338_2" />
              <path d={svgPaths.p2043a00} fill="url(#paint4_linear_1_1135)" id="Rectangle 34647339_2" />
              <rect fill="var(--fill-0, #1A0070)" height="2" id="Rectangle 34647340" width="15" x="57.998" y="13" />
              <rect fill="url(#paint5_linear_1_1135)" height="11" id="Rectangle 34647341" rx="1" width="17" x="56.998" y="3" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.7443" id="filter0_d_1_1135" width="52.654" x="16.6711" y="41.6721">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2.4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.985381 0 0 0 0 1 0 0 0 0 0.56142 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1135" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1135" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1135" x1="42.498" x2="42.498" y1="15" y2="115">
              <stop stopColor="#DBB7F6" />
              <stop offset="1" stopColor="#6C0F6C" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1135" x1="42.998" x2="42.998" y1="61" y2="149">
              <stop stopColor="#F07502" />
              <stop offset="1" stopColor="#DF0000" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1135" x1="42.998" x2="42.998" y1="38" y2="92">
              <stop stopColor="#EAFF00" />
              <stop offset="1" stopColor="#FFA3A3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1135" x1="5.49805" x2="5.49805" y1="15" y2="37">
              <stop stopColor="#D9B5F4" />
              <stop offset="1" stopColor="#A05DAC" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1135" x1="79.498" x2="79.498" y1="15" y2="37">
              <stop stopColor="#D9B5F4" />
              <stop offset="1" stopColor="#A05DAC" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1135" x1="65.498" x2="65.498" y1="3" y2="14">
              <stop stopColor="#AA97EB" />
              <stop offset="1" stopColor="#2B04AB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
  );
}

function VegaSeasoning() {
  return (
    <div className="absolute inset-[-3.75%_-1.09%_-3.75%_-3.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.9539 86">
          <g id="vegaSeasoning">
            <g id="Union">
              <mask fill="black" height="86" id="path-1-outside-1_1_1097" maskUnits="userSpaceOnUse" width="38" x="0" y="0">
                <rect fill="white" height="86" width="38" />
                <path d={svgPaths.p2d7ee800} />
              </mask>
              <path d={svgPaths.p2d7ee800} fill="var(--fill-0, #FF7F27)" />
              <path d={svgPaths.p1a972480} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1097)" />
            </g>
            <path d={svgPaths.p947b200} fill="var(--fill-0, #FFC912)" id="Rectangle 34647360" />
            <rect fill="url(#paint0_linear_1_1097)" height="13.8802" id="Rectangle 34647361" rx="2.53882" width="31.0411" x="3" y="15.6181" />
            <rect fill="url(#paint1_linear_1_1097)" height="51.2305" id="Rectangle 34647362" rx="2.53882" width="31.0411" x="3" y="31.7691" />
            <rect fill="var(--fill-0, #F2A100)" height="2.77604" id="Rectangle 34647363" width="28.7698" x="4.26113" y="28.9935" />
            <rect fill="var(--fill-0, #FFA3A3)" height="32.8077" id="Rectangle 34647364" width="31.0411" x="3" y="38.8359" />
            <rect fill="var(--fill-0, #FFE626)" height="32.8077" id="Rectangle 34647365" width="31.0411" x="3" y="38.8359" />
            <path d={svgPaths.p1fcff600} id="Vector 92" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="3.17353" />
            <g id="Ellipse 61">
              <circle cx="50.0798" cy="60.4183" fill="var(--fill-0, #D9D9D9)" r="8.81865" />
              <circle cx="50.0798" cy="60.4183" fill="url(#paint2_linear_1_1097)" r="8.81865" />
              <circle cx="50.0798" cy="60.4183" r="8.81865" stroke="var(--stroke-0, black)" strokeWidth="3" />
            </g>
            <path d={svgPaths.p2bf82740} id="Vector 93" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.90412" />
            <path d="M52.1918 58.9005H52.3109" id="Vector 94" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.90412" />
            <path d={svgPaths.p196e7680} id="Vector 95" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.90412" />
            <g id="Group 14364">
              <g id="Ellipse 54">
                <circle cx="72.1481" cy="59.9413" fill="var(--fill-0, #D9D9D9)" r="7.30444" transform="rotate(31.0263 72.1481 59.9413)" />
                <circle cx="72.1481" cy="59.9413" fill="url(#paint3_linear_1_1097)" r="7.30444" transform="rotate(31.0263 72.1481 59.9413)" />
                <circle cx="72.1481" cy="59.9413" r="7.30444" stroke="var(--stroke-0, black)" strokeWidth="3" transform="rotate(31.0263 72.1481 59.9413)" />
              </g>
              <path d={svgPaths.p4f27743} id="Vector 88" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.51016" />
              <path d={svgPaths.p1b743400} id="Vector 89" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.51016" />
              <path d={svgPaths.p2f1fa300} id="Vector 90" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.51016" />
            </g>
            <circle cx="10.6805" cy="51.0363" fill="var(--fill-0, #FF7F27)" id="Ellipse 62" r="2.52367" transform="rotate(-19.4905 10.6805 51.0363)" />
            <circle cx="22.5756" cy="46.8263" fill="var(--fill-0, #FF7F27)" id="Ellipse 63" r="2.52367" transform="rotate(-19.4905 22.5756 46.8263)" />
            <circle cx="74.6125" cy="44.7395" fill="url(#paint4_linear_1_1097)" id="Ellipse 64" r="4.02367" stroke="var(--stroke-0, black)" strokeWidth="3" transform="rotate(-19.4905 74.6125 44.7395)" />
            <circle cx="43.597" cy="40.416" fill="url(#paint5_linear_1_1097)" id="Ellipse 65" r="4.02367" stroke="var(--stroke-0, black)" strokeWidth="3" transform="rotate(-19.4905 43.597 40.416)" />
            <circle cx="62.7506" cy="73.8158" fill="url(#paint6_linear_1_1097)" id="Ellipse 66" r="4.02367" stroke="var(--stroke-0, black)" strokeWidth="3" transform="rotate(-19.4905 62.7506 73.8158)" />
            <g id="Group 14365">
              <g id="Ellipse 57">
                <circle cx="59.4823" cy="41.5653" fill="var(--fill-0, #D9D9D9)" r="7.00525" />
                <circle cx="59.4823" cy="41.5653" fill="url(#paint7_linear_1_1097)" r="7.00525" />
                <circle cx="59.4823" cy="41.5653" r="7.00525" stroke="var(--stroke-0, black)" strokeWidth="3" />
              </g>
              <path d="M58.1068 40.6349H58.2168" id="Vector 92_2" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.43232" />
              <path d="M61.0194 40.1949V40.1399" id="Vector 93_2" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.43232" />
              <path d={svgPaths.p178d2f80} id="Vector 94_2" stroke="var(--stroke-0, #FF7F27)" strokeLinecap="round" strokeWidth="1.43232" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1097" x1="18.5206" x2="18.5206" y1="15.6181" y2="29.4983">
              <stop stopColor="#FFFF00" />
              <stop offset="1" stopColor="#FFC55A" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1097" x1="18.5206" x2="18.5206" y1="31.7691" y2="82.9997">
              <stop stopColor="#FFC90E" />
              <stop offset="1" stopColor="#FFCE80" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1097" x1="50.0798" x2="50.0798" y1="53.0997" y2="67.737">
              <stop stopColor="#FFFF00" />
              <stop offset="1" stopColor="#FFC55A" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1097" x1="72.1481" x2="72.1481" y1="54.1368" y2="65.7457">
              <stop stopColor="#FFFF00" />
              <stop offset="1" stopColor="#FFC55A" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1097" x1="74.6125" x2="74.6125" y1="42.2158" y2="47.2631">
              <stop stopColor="#EAFF00" />
              <stop offset="1" stopColor="#FF7F27" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1097" x1="43.597" x2="43.597" y1="37.8924" y2="42.9397">
              <stop stopColor="#EAFF00" />
              <stop offset="1" stopColor="#FF7F27" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1097" x1="62.7506" x2="62.7506" y1="71.2921" y2="76.3395">
              <stop stopColor="#EAFF00" />
              <stop offset="1" stopColor="#FF7F27" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1097" x1="59.4823" x2="59.4823" y1="36.06" y2="47.0705">
              <stop stopColor="#FFFF00" />
              <stop offset="1" stopColor="#FFC55A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
  );
}

function KentaurusSeasoning() {
  return (
    <div className="absolute inset-[-3.75%_0_-3.75%_-3.41%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.0594 86">
          <g id="kentaurusSeasoning">
            <g id="Union">
              <mask fill="black" height="86" id="path-1-outside-1_1_1070" maskUnits="userSpaceOnUse" width="38" x="0" y="0">
                <rect fill="white" height="86" width="38" />
                <path d={svgPaths.p2d7ee800} />
              </mask>
              <path d={svgPaths.p2d7ee800} fill="var(--fill-0, #FF7F27)" />
              <path d={svgPaths.p1a972480} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1070)" />
            </g>
            <path d={svgPaths.p37344200} fill="var(--fill-0, #A769BB)" id="Rectangle 34647360" />
            <g id="Rectangle 34647361">
              <rect fill="url(#paint0_linear_1_1070)" height="13.8802" rx="2.53882" width="31.0411" x="3" y="15.6182" />
              <rect fill="url(#paint1_linear_1_1070)" height="13.8802" rx="2.53882" width="31.0411" x="3" y="15.6182" />
            </g>
            <rect fill="url(#paint2_linear_1_1070)" height="51.2305" id="Rectangle 34647362" rx="2.53882" width="31.0411" x="3" y="31.7695" />
            <rect fill="var(--fill-0, #273CB3)" height="2.77604" id="Rectangle 34647363" width="28.7698" x="4.26172" y="28.9932" />
            <rect fill="var(--fill-0, #FFA3A3)" height="32.8077" id="Rectangle 34647364" width="31.0411" x="3" y="38.8359" />
            <rect fill="var(--fill-0, #4A2F60)" height="32.8077" id="Rectangle 34647365" width="31.0411" x="3" y="38.8359" />
            <path d={svgPaths.p29d97f00} fill="var(--fill-0, #C8BFE7)" id="Star 2" />
            <path d={svgPaths.p145ace00} fill="var(--fill-0, #C8BFE7)" id="Star 3" />
            <g id="Star 4">
              <path d={svgPaths.p3888f700} fill="url(#paint3_linear_1_1070)" />
              <path d={svgPaths.p3888f700} fill="url(#paint4_linear_1_1070)" />
              <path d={svgPaths.p3888f700} stroke="var(--stroke-0, black)" strokeWidth="3" />
            </g>
            <path d={svgPaths.p3ffa5f00} fill="url(#paint5_linear_1_1070)" id="Star 5" stroke="var(--stroke-0, black)" strokeWidth="3" />
            <path d={svgPaths.p21f5fb00} fill="url(#paint6_linear_1_1070)" id="Star 6" stroke="var(--stroke-0, black)" strokeWidth="3" />
            <path d={svgPaths.p1a072c00} fill="url(#paint7_linear_1_1070)" id="Star 7" stroke="var(--stroke-0, black)" strokeWidth="3" />
            <path d={svgPaths.p34467700} fill="url(#paint8_linear_1_1070)" id="Star 8" stroke="var(--stroke-0, black)" strokeWidth="3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1070" x1="18.5206" x2="18.5206" y1="15.6182" y2="29.4984">
              <stop stopColor="#FFFF00" />
              <stop offset="1" stopColor="#FFC55A" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1070" x1="18.5206" x2="18.5206" y1="15.6182" y2="29.4984">
              <stop stopColor="#B069BB" />
              <stop offset="1" stopColor="#4463C0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1070" x1="18.5206" x2="18.5206" y1="31.7695" y2="83">
              <stop stopColor="#AB69BB" />
              <stop offset="1" stopColor="#E3DBFD" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1070" x1="55.6502" x2="51.0771" y1="23.2865" y2="43.5597">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#5124ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1070" x1="55.6502" x2="51.0771" y1="23.2865" y2="43.5597">
              <stop stopColor="#F2EEFF" />
              <stop offset="1" stopColor="#C1B1F9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1070" x1="65.0218" x2="63.7332" y1="45.6443" y2="61.1098">
              <stop stopColor="#F2EEFF" />
              <stop offset="1" stopColor="#C1B1F9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1070" x1="79.2227" x2="78.0209" y1="32.835" y2="47.2592">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#5124ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1070" x1="48.8976" x2="52.5729" y1="60.0732" y2="74.0729">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#5124ED" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1070" x1="83.31" x2="78.7499" y1="63.5725" y2="77.3095">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#5124ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
  );
}

function Group19() {
  return (
    <div className="col-1 h-[60.59px] ml-0 mt-[10px] relative row-1 w-[59.114px]">
      <div className="absolute inset-[-4.95%_-3.04%_0_-5.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9129 63.5896">
          <g id="Group 14357">
            <path d={svgPaths.p5864e12} fill="url(#paint0_linear_1_1053)" id="Vector 81 (Stroke)" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <g id="Union">
              <mask fill="black" height="27" id="path-2-outside-1_1_1053" maskUnits="userSpaceOnUse" width="29" x="2.34412e-05" y="8.92206">
                <rect fill="white" height="27" width="29" x="2.34412e-05" y="8.92206" />
                <path d={svgPaths.p1c1d96f0} />
              </mask>
              <path d={svgPaths.p1c1d96f0} fill="url(#paint1_linear_1_1053)" />
              <path d={svgPaths.pd013c80} fill="var(--stroke-0, black)" mask="url(#path-2-outside-1_1_1053)" />
            </g>
            <path d={svgPaths.pd9b9f80} fill="url(#paint2_linear_1_1053)" id="Vector 83 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p1e3ece00} fill="url(#paint3_linear_1_1053)" id="Vector 84 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <g id="Group 14356">
              <path d={svgPaths.p226e4bc0} id="Vector 79" stroke="url(#paint4_linear_1_1053)" strokeLinecap="round" strokeWidth="4" />
              <g id="Group 14355">
                <path d={svgPaths.p1aaa0c00} id="Vector 80" stroke="url(#paint5_linear_1_1053)" strokeLinecap="round" strokeWidth="3.808" />
                <path d={svgPaths.p1f63fdc0} id="Vector 77" stroke="url(#paint6_linear_1_1053)" strokeLinecap="round" strokeWidth="4" />
                <path d={svgPaths.p1017f1c0} id="Vector 78" stroke="url(#paint7_linear_1_1053)" strokeLinecap="round" strokeWidth="4" />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1053" x1="39.7305" x2="39.7305" y1="4.90317" y2="24.2233">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1053" x1="14.1143" x2="14.1143" y1="14.9221" y2="30.0697">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1053" x1="18.4019" x2="31.05" y1="35.9728" y2="52.7367">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1053" x1="44.9894" x2="56.2525" y1="40.539" y2="35.9897">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1053" x1="18.4019" x2="31.05" y1="35.9728" y2="52.7367">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1053" x1="39.7305" x2="39.7305" y1="4.90317" y2="24.2233">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1053" x1="14.1152" x2="14.1152" y1="14.9217" y2="30.0688">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1053" x1="44.9894" x2="56.2525" y1="40.539" y2="35.9897">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="h-[60.588px] relative w-[59.113px]">
      <div className="absolute inset-[-4.95%_-3.04%_0_-5.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9135 63.5896">
          <g id="Group 14358">
            <path d={svgPaths.p3a973580} fill="url(#paint0_linear_1_1021)" id="Vector 81 (Stroke)" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <g id="Union">
              <mask fill="black" height="27" id="path-2-outside-1_1_1021" maskUnits="userSpaceOnUse" width="29" x="2.34413e-05" y="8.9224">
                <rect fill="white" height="27" width="29" x="2.34413e-05" y="8.9224" />
                <path d={svgPaths.p2717e900} />
              </mask>
              <path d={svgPaths.p2717e900} fill="url(#paint1_linear_1_1021)" />
              <path d={svgPaths.p352c81f0} fill="var(--stroke-0, black)" mask="url(#path-2-outside-1_1_1021)" />
            </g>
            <path d={svgPaths.p3bf0e200} fill="url(#paint2_linear_1_1021)" id="Vector 83 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p3ba1cb70} fill="url(#paint3_linear_1_1021)" id="Vector 84 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <g id="Group 14356">
              <path d={svgPaths.p2866cf40} id="Vector 79" stroke="url(#paint4_linear_1_1021)" strokeLinecap="round" strokeWidth="4" />
              <g id="Group 14355">
                <path d={svgPaths.pe9cd700} id="Vector 80" stroke="url(#paint5_linear_1_1021)" strokeLinecap="round" strokeWidth="3.808" />
                <path d={svgPaths.p16c26180} id="Vector 77" stroke="url(#paint6_linear_1_1021)" strokeLinecap="round" strokeWidth="4" />
                <path d={svgPaths.p20e60a20} id="Vector 78" stroke="url(#paint7_linear_1_1021)" strokeLinecap="round" strokeWidth="4" />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1021" x1="39.731" x2="39.731" y1="4.90317" y2="24.2233">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1021" x1="14.1143" x2="14.1143" y1="14.9225" y2="30.07">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1021" x1="18.4025" x2="31.0505" y1="35.9728" y2="52.7367">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1021" x1="44.99" x2="56.253" y1="40.539" y2="35.9897">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1021" x1="18.4025" x2="31.0505" y1="35.9728" y2="52.7367">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1021" x1="39.731" x2="39.731" y1="4.90317" y2="24.2233">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1021" x1="14.1158" x2="14.1158" y1="14.9217" y2="30.0688">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1021" x1="44.99" x2="56.253" y1="40.539" y2="35.9897">
              <stop stopColor="#FF7F27" />
              <stop offset="1" stopColor="#C7F0B0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CanopusNoodles() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <Group19 />
      <div className="col-1 flex h-[74.26px] items-center justify-center ml-[27px] mt-0 relative row-1 w-[75.238px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[107.02deg]">
          <Group20 />
        </div>
      </div>
    </div>
  );
}

function CapellaNoodles() {
  return (
    <div className="absolute inset-[-5.18%_-0.11%_0_-3.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.9263 60.8546">
          <g id="capellaNoodles">
            <g id="Union">
              <mask fill="black" height="60" id="path-1-outside-1_1_987" maskUnits="userSpaceOnUse" width="84" x="0" y="-0.00187117">
                <rect fill="white" height="60" width="84" y="-0.00187117" />
                <path d={svgPaths.p3bf47e80} />
              </mask>
              <path d={svgPaths.p3bf47e80} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p3bf47e80} fill="url(#paint0_linear_1_987)" />
              <path d={svgPaths.p3bf47e80} fill="var(--fill-2, #9CD262)" />
              <path d={svgPaths.pfa68580} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_987)" />
            </g>
            <g id="Group 14360">
              <g id="Ellipse 40">
                <path d={svgPaths.p1c7daa80} fill="var(--fill-0, #8ED27B)" />
                <path d={svgPaths.p1c7daa80} fill="url(#paint1_linear_1_987)" />
              </g>
              <path d={svgPaths.pf00e900} fill="url(#paint2_linear_1_987)" id="Ellipse 41" />
              <g id="Mask group">
                <mask height="27" id="mask0_1_987" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="38" x="3" y="2">
                  <path d={svgPaths.p9628780} fill="var(--fill-0, #EFE4B0)" id="Ellipse 42" />
                </mask>
                <g mask="url(#mask0_1_987)">
                  <g id="Ellipse 41_2">
                    <path d={svgPaths.p3be92100} fill="var(--fill-0, #189247)" />
                    <path d={svgPaths.p3be92100} fill="var(--fill-1, #9CD262)" />
                  </g>
                </g>
              </g>
              <g id="Mask group_2">
                <path d={svgPaths.p9b35740} fill="var(--fill-0, #9CD262)" id="Ellipse 41_3" />
              </g>
              <g id="Ellipse 43">
                <path d={svgPaths.p252f7900} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p252f7900} fill="url(#paint3_linear_1_987)" />
              </g>
              <g id="Ellipse 49">
                <path d={svgPaths.p37866100} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p37866100} fill="url(#paint4_linear_1_987)" />
              </g>
              <g id="Ellipse 45">
                <path d={svgPaths.p25496280} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p25496280} fill="url(#paint5_linear_1_987)" />
              </g>
              <g id="Ellipse 50">
                <path d={svgPaths.p3bfc6200} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p3bfc6200} fill="url(#paint6_linear_1_987)" />
              </g>
              <g id="Ellipse 44">
                <path d={svgPaths.p1a369080} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p1a369080} fill="url(#paint7_linear_1_987)" />
                <path d={svgPaths.p1a369080} fill="var(--fill-2, #9CD262)" />
              </g>
              <g id="Ellipse 51">
                <path d={svgPaths.p281e6980} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p281e6980} fill="url(#paint8_linear_1_987)" />
                <path d={svgPaths.p281e6980} fill="var(--fill-2, #9CD262)" />
              </g>
              <g id="Ellipse 46">
                <path d={svgPaths.p2b9edb80} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p2b9edb80} fill="url(#paint9_linear_1_987)" />
                <path d={svgPaths.p2b9edb80} fill="var(--fill-2, #9CD262)" />
              </g>
              <g id="Ellipse 52">
                <path d={svgPaths.p2343100} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p2343100} fill="url(#paint10_linear_1_987)" />
                <path d={svgPaths.p2343100} fill="var(--fill-2, #9CD262)" />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_987" x1="70.2803" x2="74.8677" y1="42.4922" y2="47.5686">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_987" x1="22" x2="22" y1="2.99813" y2="27.9981">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_987" x1="54" x2="54" y1="28.9981" y2="45.9981">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_987" x1="58.5" x2="58.5" y1="8.58407" y2="25.5841">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_987" x1="20" x2="20" y1="26.5841" y2="43.5841">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_987" x1="42.8108" x2="35.0201" y1="45.4935" y2="54.1149">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_987" x1="69.0232" x2="76.8138" y1="40.4935" y2="49.1149">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_987" x1="59.1579" x2="59.1579" y1="11.9878" y2="21.9979">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_987" x1="19.3421" x2="19.3421" y1="29.9878" y2="39.9979">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_987" x1="41.5531" x2="36.9658" y1="47.4918" y2="52.5683">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_987" x1="70.2809" x2="74.8682" y1="42.4918" y2="47.5683">
              <stop stopColor="#8ED27B" />
              <stop offset="1" stopColor="#EAFF00" />
            </linearGradient>
          </defs>
        </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 h-[34.557px] ml-[40.49px] mt-0 relative row-1 w-[46.707px]">
      <div className="absolute inset-[-8.01%_-7.79%_-8.05%_-9.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9498 40.1056">
          <g id="Group 14347">
            <g id="Union">
              <mask fill="black" height="42" id="path-1-outside-1_1_1204" maskUnits="userSpaceOnUse" width="56" x="-0.394074" y="-0.925851">
                <rect fill="white" height="42" width="56" x="-0.394074" y="-0.925851" />
                <path d={svgPaths.p33425800} />
              </mask>
              <path d={svgPaths.p33425800} fill="url(#paint0_linear_1_1204)" />
              <path d={svgPaths.p3e07de00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1204)" />
            </g>
            <path d={svgPaths.p6708a80} fill="url(#paint1_linear_1_1204)" id="Rectangle 34647347" />
            <path d={svgPaths.pd07f500} fill="url(#paint2_linear_1_1204)" id="Subtract" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1204" x1="28.3294" x2="27.5893" y1="3.64329" y2="23.0442">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1204" x1="28.6412" x2="27.7986" y1="15.014" y2="37.1018">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#4463C0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1204" x1="28.3294" x2="27.5893" y1="3.64329" y2="23.0442">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="h-[34.558px] relative w-[46.707px]">
      <div className="absolute inset-[-8.01%_-7.79%_-8.05%_-9.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9498 40.1056">
          <g id="Group 14348">
            <g id="Union">
              <mask fill="black" height="42" id="path-1-outside-1_1_972" maskUnits="userSpaceOnUse" width="56" x="-0.394074" y="-0.925851">
                <rect fill="white" height="42" width="56" x="-0.394074" y="-0.925851" />
                <path d={svgPaths.p33425800} />
              </mask>
              <path d={svgPaths.p33425800} fill="url(#paint0_linear_1_972)" />
              <path d={svgPaths.p3e07de00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_972)" />
            </g>
            <path d={svgPaths.p6708a80} fill="url(#paint1_linear_1_972)" id="Rectangle 34647347" />
            <path d={svgPaths.pd07f500} fill="url(#paint2_linear_1_972)" id="Subtract" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_972" x1="28.3294" x2="27.5893" y1="3.64329" y2="23.0442">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_972" x1="28.6412" x2="27.7986" y1="15.014" y2="37.1018">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#4463C0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_972" x1="28.3294" x2="27.5893" y1="3.64329" y2="23.0442">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="h-[27.32px] relative w-[36.925px]">
      <div className="absolute inset-[-10.36%_-10.27%_-10.35%_-12.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.3218 32.9788">
          <g id="Group 14349">
            <g id="Union">
              <mask fill="black" height="34" id="path-1-outside-1_1_957" maskUnits="userSpaceOnUse" width="46" x="-0.39427" y="-0.92583">
                <rect fill="white" height="34" width="46" x="-0.39427" y="-0.92583" />
                <path d={svgPaths.p22554080} />
              </mask>
              <path d={svgPaths.p22554080} fill="url(#paint0_linear_1_957)" />
              <path d={svgPaths.p112e63c0} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_957)" />
            </g>
            <path d={svgPaths.pb0d0f00} fill="url(#paint1_linear_1_957)" id="Rectangle 34647347" />
            <path d={svgPaths.p31b82b80} fill="url(#paint2_linear_1_957)" id="Subtract" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_957" x1="23.3603" x2="22.7751" y1="3.52412" y2="18.8621">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_957" x1="23.6072" x2="22.9411" y1="12.5136" y2="29.9754">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#4463C0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_957" x1="23.3612" x2="22.7761" y1="3.52423" y2="18.8617">
              <stop stopColor="#C8BFE7" />
              <stop offset="1" stopColor="#8768F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PolarisShrooms() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <Group16 />
      <div className="col-1 flex h-[46.006px] items-center justify-center ml-[45px] mt-[47.4px] relative row-1 w-[54.373px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-15.86deg]">
          <Group17 />
        </div>
      </div>
      <div className="col-1 flex h-[30.941px] items-center justify-center ml-0 mt-[32.4px] relative row-1 w-[39.517px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.85deg]">
          <Group18 />
        </div>
      </div>
    </div>
  );
}

function Glowleaf() {
  return (
    <div className="h-[91.74px] relative w-[105.349px]" data-name="glowleaf">
      <div className="absolute inset-[0_-2.29%_-3.32%_-2.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109.974 94.7841">
          <g id="glowleaf">
            <g id="Union">
              <mask fill="black" height="92" id="path-1-outside-1_1_925" maskUnits="userSpaceOnUse" width="111" x="-0.999215" y="3.06772">
                <rect fill="white" height="92" width="111" x="-0.999215" y="3.06772" />
                <path d={svgPaths.p143df500} />
              </mask>
              <path d={svgPaths.p143df500} fill="var(--fill-0, #00A2E8)" />
              <path d={svgPaths.p143df500} fill="url(#paint0_linear_1_925)" />
              <path d={svgPaths.p19cfd172} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_925)" />
            </g>
            <g id="Group 14353">
              <g id="Union_2">
                <path d={svgPaths.p1997180} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p1997180} fill="url(#paint1_linear_1_925)" />
              </g>
              <g id="Union_3">
                <path d={svgPaths.p1d00fa00} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p1d00fa00} fill="url(#paint2_linear_1_925)" />
              </g>
              <g id="Union_4">
                <path d={svgPaths.p3a2e6300} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p3a2e6300} fill="url(#paint3_linear_1_925)" />
              </g>
              <g id="Union_5">
                <path d={svgPaths.p3aa892f0} fill="var(--fill-0, #D9D9D9)" />
                <path d={svgPaths.p3aa892f0} fill="url(#paint4_linear_1_925)" />
              </g>
              <g id="Vector 73 (Stroke)">
                <path d={svgPaths.p177b3f00} fill="var(--fill-0, #00A2E8)" />
                <path d={svgPaths.p177b3f00} fill="url(#paint5_linear_1_925)" />
              </g>
              <g id="Vector 74">
                <path d={svgPaths.p105d0300} stroke="var(--stroke-0, #00A2E8)" />
                <path d={svgPaths.p105d0300} stroke="url(#paint6_linear_1_925)" />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_925" x1="54.9869" x2="54.9869" y1="6.06772" y2="91.7397">
              <stop stopColor="#B0DFFF" />
              <stop offset="1" stopColor="#001482" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_925" x1="79.7966" x2="83.7748" y1="10.5713" y2="29.5773">
              <stop stopColor="#FFC90E" />
              <stop offset="1" stopColor="#FFA3A3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_925" x1="13.8754" x2="35.9586" y1="4.84072" y2="7.53845">
              <stop stopColor="#FFC90E" />
              <stop offset="1" stopColor="#FFA3A3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_925" x1="2.50524" x2="18.3108" y1="61.0379" y2="46.2583">
              <stop stopColor="#FFC90E" />
              <stop offset="1" stopColor="#FFA3A3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_925" x1="107.107" x2="82.8149" y1="59.6149" y2="40.1771">
              <stop stopColor="#FFC90E" />
              <stop offset="1" stopColor="#FFA3A3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_925" x1="46.4001" x2="46.4001" y1="29.8711" y2="91.653">
              <stop stopColor="#00A2E8" />
              <stop offset="1" stopColor="#001482" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_925" x1="48.4819" x2="48.4819" y1="16.5648" y2="74.5446">
              <stop stopColor="#B0DFFF" />
              <stop offset="1" stopColor="#001482" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[74.525px] relative w-[83.582px]">
      <div className="absolute inset-[-4.03%_-3.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.5835 80.5246">
          <g id="Group 14345">
            <g id="Union">
              <mask fill="black" height="82" id="path-1-outside-1_1_911" maskUnits="userSpaceOnUse" width="91" x="-0.999612" y="-0.999845">
                <rect fill="white" height="82" width="91" x="-0.999612" y="-0.999845" />
                <path d={svgPaths.pebd7340} />
              </mask>
              <path d={svgPaths.pebd7340} fill="url(#paint0_linear_1_911)" />
              <path d={svgPaths.pff49a00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_911)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_911" x1="53.3118" x2="53.3118" y1="18.127" y2="77.5248">
              <stop stopColor="#00E8E8" />
              <stop offset="1" stopColor="#001482" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[79.999px] relative w-[89.652px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.6528 79.9997">
        <g id="Group 14346">
          <g id="Group 14341">
            <path d={svgPaths.p9bbaf0} fill="url(#paint0_linear_1_898)" id="Union" />
          </g>
          <path d={svgPaths.p3f820c0} fill="url(#paint1_linear_1_898)" id="Union_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_898" x1="8.3647" x2="32.7638" y1="5.0196" y2="5.93712">
            <stop stopColor="#FFC90E" />
            <stop offset="1" stopColor="#FFA3A3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_898" x1="56.3825" x2="56.3825" y1="20.6004" y2="79.9997">
            <stop stopColor="#00A2E8" />
            <stop offset="1" stopColor="#E4E8FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Glowroot() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="col-1 flex h-[96.663px] items-center justify-center ml-[6.07px] mt-[5.47px] relative row-1 w-[102.487px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-17.96deg]">
          <Group14 />
        </div>
      </div>
      <div className="col-1 flex h-[103.742px] items-center justify-center ml-0 mt-0 relative row-1 w-[109.949px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-17.96deg]">
          <Group15 />
        </div>
      </div>
    </div>
  );
}

function Group21({
  onDragStart,
  onDragEnd,
  potOnStove,
  potHasBroth,
  potHasNoodles,
  potHasGlowroot,
  bowlOnTray,
  bowlHasSoup,
  bowlHasSeasoning,
  onBellClick
}: {
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
  potOnStove: boolean;
  potHasBroth: boolean;
  potHasNoodles: boolean;
  potHasGlowroot: boolean;
  bowlOnTray: boolean;
  bowlHasSoup: boolean;
  bowlHasSeasoning: boolean;
  onBellClick: () => void;
}) {
  const [bellHovered, setBellHovered] = useState(false);

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#d9d9d9] col-1 h-[393px] ml-0 mt-0 row-1 w-[893px]" data-name="table" />
      <CookingArea potOnStove={potOnStove} potHasBroth={potHasBroth} potHasNoodles={potHasNoodles} potHasGlowroot={potHasGlowroot} bowlOnTray={bowlOnTray} bowlHasSoup={bowlHasSoup} bowlHasSeasoning={bowlHasSeasoning} />
      <button
        className="col-1 ml-[757px] mt-[247px] relative row-1 size-[100px] cursor-pointer hover:scale-105 transition-transform"
        onClick={onBellClick}
        onMouseEnter={() => setBellHovered(true)}
        onMouseLeave={() => setBellHovered(false)}
      >
        <Group13 />
        {bellHovered && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] pointer-events-none z-50">
            <Tooltip itemName="Finish" />
          </div>
        )}
      </button>
      <DraggableIngredient itemType="galaxyBroth" className="col-1 h-[112px] ml-[41px] mt-[22px] relative row-1 w-[79px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <GalaxyBroth />
      </DraggableIngredient>
      <DraggableIngredient itemType="procyonBroth" className="col-1 h-[112px] ml-[164px] mt-[22px] relative row-1 w-[79.002px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <ProcyonBroth />
      </DraggableIngredient>
      <DraggableIngredient itemType="vegaSeasoning" className="col-1 h-[80px] ml-[769px] mt-[108px] relative row-1 w-[77.114px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <VegaSeasoning />
      </DraggableIngredient>
      <DraggableIngredient itemType="kentaurusSeasoning" className="col-1 h-[80px] ml-[636px] mt-[109px] relative row-1 w-[88.059px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <KentaurusSeasoning />
      </DraggableIngredient>
      <DraggableIngredient itemType="canopusNoodles" className="col-1 ml-[739px] mt-[22px] relative row-1" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <CanopusNoodles />
      </DraggableIngredient>
      <DraggableIngredient itemType="capellaNoodles" className="col-1 h-[57.856px] ml-[614px] mt-[25px] relative row-1 w-[80.834px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <CapellaNoodles />
      </DraggableIngredient>
      <DraggableIngredient itemType="polarisShrooms" className="col-1 ml-[299px] mt-[30px] relative row-1" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <PolarisShrooms />
      </DraggableIngredient>
      <DraggableIngredient itemType="glowleaf" className="col-1 flex h-[123.427px] items-center justify-center ml-[450px] mt-[9px] relative row-1 w-[131.248px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="flex-none rotate-[21.02deg]">
          <Glowleaf />
        </div>
      </DraggableIngredient>
      <DraggableIngredient itemType="glowroot" className="col-1 h-[103.742px] ml-[385px] mt-[116px] relative row-1 w-[109.949px]" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Glowroot />
      </DraggableIngredient>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[11%_1.71%_10.65%_3%]">
      <div className="absolute inset-[-3.83%_-3.15%_-3.83%_-3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.143 84.3535">
          <g id="Group 14312">
            <g id="Union">
              <mask fill="black" height="85" id="path-1-outside-1_1_876" maskUnits="userSpaceOnUse" width="102" x="7.68453e-05" y="0">
                <rect fill="white" height="85" width="102" x="7.68453e-05" />
                <path d={svgPaths.p39a9af00} />
              </mask>
              <path d={svgPaths.p39a9af00} fill="var(--fill-0, #999292)" />
              <path d={svgPaths.p2e781c40} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_876)" />
            </g>
            <g id="Group 14311">
              <path d={svgPaths.p3d32e480} fill="var(--fill-0, #D9D9D9)" id="Rectangle 34647310" />
              <ellipse cx="50.4318" cy="9.52952" fill="var(--fill-0, #999999)" id="Ellipse 18" rx="36.3788" ry="6.52952" />
              <g id="Group 14309">
                <ellipse cx="2.992" cy="3.98933" fill="var(--fill-0, #858080)" id="Ellipse 15" rx="2.992" ry="3.98933" transform="matrix(-1 0 0 1 79.733 25.4189)" />
                <path d={svgPaths.p14f85800} fill="var(--fill-0, #999292)" id="Vector 7 (Stroke)" />
              </g>
              <g id="Group 14310">
                <ellipse cx="24.1154" cy="29.4083" fill="var(--fill-0, #858080)" id="Ellipse 15_2" rx="2.992" ry="3.98933" />
                <path d={svgPaths.p32275940} fill="var(--fill-0, #999292)" id="Vector 7 (Stroke)_2" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[34%_4%_34.38%_5%]">
      <div className="absolute inset-[-8.42%_-2.93%_-9.49%_-3.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.6651 37.2862">
          <g id="Group 14320">
            <g id="Union">
              <mask fill="black" height="39" id="path-1-outside-1_1_1038" maskUnits="userSpaceOnUse" width="97" x="1.0252e-05" y="-0.998792">
                <rect fill="white" height="39" width="97" x="1.0252e-05" y="-0.998792" />
                <path d={svgPaths.pe347f00} />
              </mask>
              <path d={svgPaths.pe347f00} fill="var(--fill-0, #6E6E6E)" />
              <path d={svgPaths.p2a40eb00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_1038)" />
            </g>
            <path d={svgPaths.p17e89480} fill="var(--fill-0, #626262)" id="Vector 63 (Stroke)" />
            <path d={svgPaths.p6f15b80} fill="var(--fill-0, #AF4848)" id="Rectangle 34647321" />
            <g id="Mask group">
              <ellipse cx="36.6273" cy="19.2832" fill="var(--fill-0, #999999)" id="Ellipse 23" rx="33.6273" ry="8.11694" />
              <mask height="17" id="mask0_1_1038" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="68" x="3" y="11">
                <ellipse cx="36.6273" cy="19.2832" fill="var(--fill-0, #999999)" id="Ellipse 25" rx="33.6273" ry="8.11694" />
              </mask>
              <g mask="url(#mask0_1_1038)">
                <ellipse cx="36.6272" cy="25.467" fill="var(--fill-0, #8B8B8B)" id="Ellipse 24" rx="24.3508" ry="5.79781" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[13%_16%_12.77%_15%]">
      <div className="absolute inset-[-4.04%_-4.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 80.2297">
          <g id="Group 14320">
            <path d={svgPaths.p16746600} fill="var(--fill-0, #E5E5E5)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p3f8a4d70} fill="var(--fill-0, #D9D9D9)" id="Union" />
            <ellipse cx="23" cy="54.0001" fill="var(--fill-0, #999999)" id="Ellipse 19" rx="20" ry="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[2%_12.39%_2.8%_12%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6509 95.243">
        <g id="Group 14320">
          <g id="Union">
            <mask fill="black" height="103.531" id="path-1-outside-1_1_857" maskUnits="userSpaceOnUse" width="84.023" x="-4.0637" y="-4.18048">
              <rect fill="white" height="103.531" width="84.023" x="-4.0637" y="-4.18048" />
              <path d={svgPaths.p24101d80} />
            </mask>
            <path d={svgPaths.p24101d80} fill="var(--fill-0, #D9D9D9)" />
            <path d={svgPaths.p274e7a00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_857)" />
          </g>
          <path d={svgPaths.p1972f900} fill="var(--fill-0, #626262)" id="Rectangle 34647315" />
          <path d={svgPaths.p30a67900} fill="var(--fill-0, #D9D9D9)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-15.29%_-3.3%_-15.3%_-3.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.9093 25.6123">
          <g id="Group 14320">
            <g id="Union">
              <mask fill="black" height="26" id="path-1-outside-1_1_842" maskUnits="userSpaceOnUse" width="98" x="-0.998522" y="8.82428e-08">
                <rect fill="white" height="26" width="98" x="-0.998522" y="8.82428e-08" />
                <path d={svgPaths.pa725380} />
              </mask>
              <path d={svgPaths.pa725380} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p2e248680} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_842)" />
            </g>
            <rect fill="var(--fill-0, #626262)" height="7.06034" id="Rectangle 34647320" rx="1.96121" width="36.4784" x="57.4312" y="3.00036" />
            <path d={svgPaths.p35edb9b0} fill="var(--fill-0, #D9D9D9)" id="Rectangle 34647319" />
            <g id="Vector 62">
              <mask fill="white" id="path-5-inside-2_1_842">
                <path d={svgPaths.p7099200} />
              </mask>
              <path d={svgPaths.p7099200} fill="var(--fill-0, #626262)" />
              <path d={svgPaths.p1e829580} fill="var(--stroke-0, #626262)" mask="url(#path-5-inside-2_1_842)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[21%_9%_20.23%_9%]">
      <div className="absolute inset-[-5.1%_-3.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 64.7676">
          <g id="Group 14315">
            <g id="Union">
              <mask fill="black" height="65" id="path-1-outside-1_1_833" maskUnits="userSpaceOnUse" width="88" x="0" y="0">
                <rect fill="white" height="65" width="88" />
                <path d={svgPaths.pdad32f0} />
              </mask>
              <path d={svgPaths.pdad32f0} fill="var(--fill-0, #C8C6BB)" />
              <path d={svgPaths.p29603d00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_1_833)" />
            </g>
            <rect fill="var(--fill-0, #E0E0E0)" height="8.05023" id="Rectangle 34647313" width="39.1532" x="24.4238" y="53.717" />
            <path d={svgPaths.p93e8580} fill="var(--fill-0, #F3F3F3)" id="Rectangle 34647312" />
            <ellipse cx="44" cy="5.41507" fill="var(--fill-0, #C8C6BB)" id="Ellipse 20" rx="41" ry="2.41507" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[32%_5%_31%_5%]">
      <div className="absolute inset-[-8.11%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 43">
          <g id="Group 14320">
            <path d={svgPaths.p37608a00} fill="var(--fill-0, #C3E4FA)" id="Ellipse 21" stroke="var(--stroke-0, black)" strokeWidth="3" />
            <ellipse cx="48" cy="21.5" fill="var(--fill-0, #A3CEFF)" id="Ellipse 22" rx="33" ry="11.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Drag and Drop System
interface DragState {
  itemType: string;
  mouseX: number;
  mouseY: number;
}

interface DroppedItem {
  type: string;
  x: number;
  y: number;
}

function DraggableItem({
  children,
  itemType,
  onDragStart,
  onDragEnd
}: {
  children: React.ReactNode;
  itemType: string;
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onDragStart(itemType);
  };

  return (
    <div
      className="relative shrink-0 size-[100px] cursor-grab active:cursor-grabbing"
      data-name={itemType}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] pointer-events-none z-50">
          <Tooltip itemName={formatItemName(itemType)} />
        </div>
      )}
    </div>
  );
}

function DraggableIngredient({
  children,
  itemType,
  className,
  style,
  onDragStart,
  onDragEnd
}: {
  children: React.ReactNode;
  itemType: string;
  className?: string;
  style?: React.CSSProperties;
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onDragStart(itemType);
  };

  return (
    <div
      className={`${className} cursor-grab active:cursor-grabbing`}
      style={style}
      data-name={itemType}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] pointer-events-none z-50">
          <Tooltip itemName={formatItemName(itemType)} />
        </div>
      )}
    </div>
  );
}

function Items1({
  onDragStart,
  onDragEnd,
  ladleFilled
}: {
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
  ladleFilled: boolean;
}) {
  return (
    <div className="col-1 content-stretch flex items-center justify-between ml-[33px] mt-[25px] relative row-1 w-[823px]" data-name="items">
      <DraggableItem itemType="pot" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Group />
      </DraggableItem>
      <DraggableItem itemType="pan" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Group8 />
      </DraggableItem>
      <DraggableItem itemType="ladle" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {ladleFilled ? <Frame14466 /> : <Group9 />}
      </DraggableItem>
      <DraggableItem itemType="spatula" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Group10 />
      </DraggableItem>
      <DraggableItem itemType="knife" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="absolute flex inset-[15.93%_7.14%_15.91%_7%] items-center justify-center">
          <div className="flex-none h-[19.614px] rotate-[-34.9deg] w-[91px]">
            <Group11 />
          </div>
        </div>
      </DraggableItem>
      <DraggableItem itemType="bowl" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Group1 />
      </DraggableItem>
      <DraggableItem itemType="plate" onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Group12 />
      </DraggableItem>
    </div>
  );
}

function Items({
  onDragStart,
  onDragEnd,
  ladleFilled
}: {
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
  ladleFilled: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="items">
      <div className="col-1 h-[126px] ml-[3px] mt-[12px] pointer-events-none relative row-1 shadow-[0px_0px_6.3px_1px_#9ffffa] w-[890px]">
        <div aria-hidden="true" className="absolute bg-gradient-to-b from-[rgba(14,238,222,0.37)] inset-0 to-[rgba(0,92,85,0.41)]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_15.6px_5px_#b0ffd0]" />
      </div>
      <div className="col-1 flex h-[150px] items-center justify-center ml-[870px] mt-0 relative row-1 w-[23px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[150px] relative w-[23px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 150">
              <g filter="url(#filter0_i_1_896)" id="Vector 60">
                <path d={svgPaths.p12546a80} fill="var(--fill-0, #677C81)" />
                <path d={svgPaths.p12546a80} fill="url(#paint0_linear_1_896)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_1_896" width="23" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2" dy="4" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.487783 0 0 0 0 0.817125 0 0 0 0 0.800658 0 0 0 0.25 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_896" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_896" x1="23" x2="0" y1="75" y2="75">
                  <stop stopColor="#E5E5E5" />
                  <stop offset="1" stopColor="#AAAAAA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 h-[150px] ml-0 mt-0 relative row-1 w-[23px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 150">
          <g filter="url(#filter0_i_1_1192)" id="Vector 59">
            <path d={svgPaths.p12546a80} fill="var(--fill-0, #677C81)" />
            <path d={svgPaths.p12546a80} fill="url(#paint0_linear_1_1192)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_1_1192" width="23" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-2" dy="4" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.487783 0 0 0 0 0.817125 0 0 0 0 0.800658 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_1192" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1192" x1="23" x2="0" y1="75" y2="75">
              <stop stopColor="#E5E5E5" />
              <stop offset="1" stopColor="#AAAAAA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Items1 onDragStart={onDragStart} onDragEnd={onDragEnd} ladleFilled={ladleFilled} />
    </div>
  );
}

function Frame({
  onDragStart,
  onDragEnd,
  potOnStove,
  potHasBroth,
  potHasNoodles,
  potHasGlowroot,
  ladleFilled,
  bowlOnTray,
  bowlHasSoup,
  bowlHasSeasoning,
  onBellClick
}: {
  onDragStart: (itemType: string) => void;
  onDragEnd: () => void;
  potOnStove: boolean;
  potHasBroth: boolean;
  potHasNoodles: boolean;
  potHasGlowroot: boolean;
  ladleFilled: boolean;
  bowlOnTray: boolean;
  bowlHasSoup: boolean;
  bowlHasSeasoning: boolean;
  onBellClick: () => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-[407px] top-[207px] w-[893px]">
      <Group21 onDragStart={onDragStart} onDragEnd={onDragEnd} potOnStove={potOnStove} potHasBroth={potHasBroth} potHasNoodles={potHasNoodles} potHasGlowroot={potHasGlowroot} bowlOnTray={bowlOnTray} bowlHasSoup={bowlHasSoup} bowlHasSeasoning={bowlHasSeasoning} onBellClick={onBellClick} />
      <Items onDragStart={onDragStart} onDragEnd={onDragEnd} ladleFilled={ladleFilled} />
    </div>
  );
}

function Frame1({ dialogueStep }: { dialogueStep: number }) {
  const dialogueTexts = [
    "Hello chef. Walk me through what you're doing right now.",
    "Hm... And what inspired this dish?",
    "Interesting ingredient choice. What flavour profile are you going for?",
    "That's all from me, chef. Good luck!"
  ];

  return (
    <div className="absolute content-stretch flex h-[207px] items-center justify-between left-[495px] pr-[32px] top-0 w-[805px]">
      <div className="h-[207px] w-[108px]">
        <AlienJudge />
      </div>
      <div className="content-stretch flex items-center justify-center min-h-[180px] min-w-[580px] p-[20px] relative shrink-0" data-name="judge_dialogue">
        <div aria-hidden="true" className="absolute bg-[#4b4b4b] inset-0 mix-blend-multiply pointer-events-none" />
        <div aria-hidden="true" className="absolute border-3 border-[#196de7] border-solid inset-0 pointer-events-none" />
        <p className="font-['Martian_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#d3edfe] text-[20px] w-[523px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {dialogueTexts[dialogueStep]}
        </p>
      </div>
    </div>
  );
}

export default function Stage2Complete() {
  const navigate = useNavigate();
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const [boardIngredient, setBoardIngredient] = useState<'glowroot' | 'chopped' | 'sliced' | 'minced' | null>(null);
  const [showKnifeOptions, setShowKnifeOptions] = useState(false);
  const [potOnStove, setPotOnStove] = useState(false);
  const [potHasBroth, setPotHasBroth] = useState(false);
  const [potHasNoodles, setPotHasNoodles] = useState(false);
  const [potHasGlowroot, setPotHasGlowroot] = useState(false);
  const [ladleFilled, setLadleFilled] = useState(false);
  const [bowlOnTray, setBowlOnTray] = useState(false);
  const [bowlHasSoup, setBowlHasSoup] = useState(false);
  const [bowlHasSeasoning, setBowlHasSeasoning] = useState(false);
  const [dialogueStep, setDialogueStep] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [judgeVisible, setJudgeVisible] = useState(false);
  const [judgeSequenceComplete, setJudgeSequenceComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dismissTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleBellClick = () => {
    navigate('/stage3');
  };

  // Handle space bar press/release
  useEffect(() => {
    if (!potHasNoodles || !judgeVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat && dialogueStep < 3) {
        setShowBanner(false);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        if (dialogueStep < 3) {
          setDialogueStep(prev => prev + 1);
          // Only show banner again if not on final dialogue
          if (dialogueStep < 2) {
            setShowBanner(true);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [potHasNoodles, judgeVisible, dialogueStep]);

  // Show judge when noodles added
  useEffect(() => {
    if (potHasNoodles && !judgeVisible && !judgeSequenceComplete) {
      setJudgeVisible(true);
      setDialogueStep(0);
      setShowBanner(true);
    }
  }, [potHasNoodles, judgeVisible, judgeSequenceComplete]);

  // Dismiss judge after final dialogue
  useEffect(() => {
    if (dialogueStep === 3 && judgeVisible) {
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
      dismissTimerRef.current = setTimeout(() => {
        setJudgeVisible(false);
        setJudgeSequenceComplete(true);
      }, 10000);
    }

    return () => {
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
    };
  }, [dialogueStep, judgeVisible]);

  const handleDragStart = (itemType: string) => {
    setDragState({ itemType, mouseX: 0, mouseY: 0 });
  };

  const handleDragEnd = () => {
    // Check if item was dropped on stove or cutting board
    if (dragState && containerRef.current) {
      const { itemType, mouseX, mouseY } = dragState;

      // Stove area coordinates (Frame is at left: 407px, top: 207px)
      // CookingArea is at ml-[26px] mt-[222px] within Group21
      // Stove is the first div in CookingArea with w-[220px] h-[150px]
      const stoveLeft = 407 + 26; // 433px
      const stoveTop = 207 + 222; // 429px
      const stoveRight = stoveLeft + 220; // 653px
      const stoveBottom = stoveTop + 150; // 579px

      // Cutting board area (second div in CookingArea, offset by 220px + 20px gap)
      const boardLeft = stoveLeft + 220 + 20; // 673px
      const boardTop = stoveTop; // 429px
      const boardRight = boardLeft + 220; // 893px
      const boardBottom = boardTop + 150; // 579px

      // Tray area (third div in CookingArea, offset by 220px + 20px + 220px + 20px)
      const trayLeft = boardLeft + 220 + 20; // 913px
      const trayTop = stoveTop; // 429px
      const trayRight = trayLeft + 220; // 1133px
      const trayBottom = trayTop + 150; // 579px

      // Determine drop detection area based on pot state
      let dropAreaTop = stoveTop;

      // If pot is on stove, extend detection area upward to include the pot container
      if (potOnStove) {
        // Pot is 168px tall and sits 40px from bottom of stove area
        // Extend detection upward to cover the entire pot
        dropAreaTop = stoveTop - 168 + 40; // Extend 128px upward from stove top
      }

      // Check if dropped on stove (or stove + pot container if pot is present)
      if (mouseX >= stoveLeft && mouseX <= stoveRight &&
          mouseY >= dropAreaTop && mouseY <= stoveBottom) {

        // If pot is dropped, place it on the stove
        if (itemType === 'pot') {
          setPotOnStove(true);
        }
        // If galaxy broth is dropped and pot is on stove, fill the pot
        else if (itemType === 'galaxyBroth' && potOnStove) {
          setPotHasBroth(true);
        }
        // If canopus noodles are dropped and pot has broth, add noodles
        else if (itemType === 'canopusNoodles' && potHasBroth) {
          setPotHasNoodles(true);
        }
        // If sliced glowroot is dropped and pot has noodles, add glowroot
        else if (itemType === 'slicedGlowroot' && potHasNoodles) {
          setPotHasGlowroot(true);
          setBoardIngredient(null); // Remove from cutting board
        }
        // If ladle is dropped and pot has glowroot, fill the ladle
        else if (itemType === 'ladle' && potHasGlowroot) {
          setLadleFilled(true);
        } else {
          // Position other items so bottom is 40px above bottom edge of cooking area
          const potY = stoveBottom - 40 - 132; // pot is 132px tall, so subtract full height
          const potX = stoveLeft + (220 / 2) - 68; // center horizontally (pot is 136px wide)

          setDroppedItems(prev => [...prev, {
            type: itemType,
            x: potX,
            y: potY
          }]);
        }
      }

      // Check if glowroot was dropped on cutting board
      if (itemType === 'glowroot' &&
          mouseX >= boardLeft && mouseX <= boardRight &&
          mouseY >= boardTop && mouseY <= boardBottom) {
        setBoardIngredient('glowroot');
      }

      // Check if knife was dropped on cutting board with ingredient present
      if (itemType === 'knife' && boardIngredient === 'glowroot' &&
          mouseX >= boardLeft && mouseX <= boardRight &&
          mouseY >= boardTop && mouseY <= boardBottom) {
        setShowKnifeOptions(true);
      }

      // Check if bowl was dropped on tray
      if (itemType === 'bowl' &&
          mouseX >= trayLeft && mouseX <= trayRight &&
          mouseY >= trayTop && mouseY <= trayBottom) {
        setBowlOnTray(true);
      }

      // Check if filled ladle was dropped on bowl
      if (itemType === 'ladle' && ladleFilled && bowlOnTray && !bowlHasSoup &&
          mouseX >= trayLeft && mouseX <= trayRight &&
          mouseY >= trayTop && mouseY <= trayBottom) {
        setBowlHasSoup(true);
      }

      // Check if kentaurus seasoning was dropped on bowl with soup
      if (itemType === 'kentaurusSeasoning' && bowlHasSoup && !bowlHasSeasoning &&
          mouseX >= trayLeft && mouseX <= trayRight &&
          mouseY >= trayTop && mouseY <= trayBottom) {
        setBowlHasSeasoning(true);
      }
    }

    setDragState(null);
  };

  useEffect(() => {
    if (!dragState) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDragState(prev => prev ? {
          ...prev,
          mouseX: e.clientX - rect.left,
          mouseY: e.clientY - rect.top
        } : null);
      }
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState]);

  const renderPreview = () => {
    if (!dragState) return null;

    const { itemType, mouseX, mouseY } = dragState;

    // Define different sizes for different item types
    const getItemSize = (type: string) => {
      switch(type) {
        case 'galaxyBroth':
        case 'procyonBroth':
          return { width: 79, height: 112 };
        case 'vegaSeasoning':
        case 'kentaurusSeasoning':
          return { width: 80, height: 80 };
        case 'canopusNoodles':
        case 'capellaNoodles':
          return { width: 80, height: 60 };
        case 'polarisShrooms':
          return { width: 112, height: 83 };
        case 'glowleaf':
          return { width: 131, height: 123 };
        case 'glowroot':
          return { width: 110, height: 104 };
        case 'choppedGlowroot':
          return { width: 80, height: 52 };
        case 'slicedGlowroot':
          return { width: 115, height: 50 };
        case 'mincedGlowroot':
          return { width: 80, height: 52 };
        case 'bell':
          return { width: 100, height: 100 };
        default:
          return { width: 100, height: 100 };
      }
    };

    const size = getItemSize(itemType);

    return (
      <div
        className="absolute pointer-events-none z-50"
        style={{
          left: mouseX - size.width / 2,
          top: mouseY - size.height / 2,
          width: `${size.width}px`,
          height: `${size.height}px`,
          opacity: 0.7
        }}
      >
        {itemType === 'pot' && <Group />}
        {itemType === 'pan' && <Group8 />}
        {itemType === 'ladle' && <Group9 />}
        {itemType === 'spatula' && <Group10 />}
        {itemType === 'knife' && (
          <div className="absolute flex inset-[15.93%_7.14%_15.91%_7%] items-center justify-center">
            <div className="flex-none h-[19.614px] rotate-[-34.9deg] w-[91px]">
              <Group11 />
            </div>
          </div>
        )}
        {itemType === 'bowl' && <Group1 />}
        {itemType === 'plate' && <Group12 />}
        {itemType === 'bell' && <Group13 />}
        {itemType === 'galaxyBroth' && <GalaxyBroth />}
        {itemType === 'procyonBroth' && <ProcyonBroth />}
        {itemType === 'vegaSeasoning' && <VegaSeasoning />}
        {itemType === 'kentaurusSeasoning' && <KentaurusSeasoning />}
        {itemType === 'canopusNoodles' && <CanopusNoodles />}
        {itemType === 'capellaNoodles' && <CapellaNoodles />}
        {itemType === 'polarisShrooms' && <PolarisShrooms />}
        {itemType === 'glowleaf' && (
          <div className="rotate-[21.02deg]">
            <Glowleaf />
          </div>
        )}
        {itemType === 'glowroot' && (
          <div className="rotate-[-17.96deg]">
            <Glowroot />
          </div>
        )}
        {itemType === 'choppedGlowroot' && <Chopped />}
        {itemType === 'slicedGlowroot' && <Sliced />}
        {itemType === 'mincedGlowroot' && <Mince />}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative size-full" data-name="Stage 2 - complete">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#012646] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage2Complete} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
      <div className="absolute blur-[5.8px] h-[750px] left-0 top-0 w-[1300px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle34647297} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgStage2Complete} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <div className="absolute h-[150px] left-[410px] top-[600px] w-[18px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 150">
          <g id="Vector 58">
            <path d={svgPaths.p1682a1f0} fill="var(--fill-0, #677C81)" />
            <path d={svgPaths.p1682a1f0} fill="url(#paint0_linear_1_1246)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1246" x1="18" x2="0" y1="75" y2="75">
              <stop stopColor="#717171" />
              <stop offset="1" stopColor="#4B4B4B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group22 />
      <Frame onDragStart={handleDragStart} onDragEnd={handleDragEnd} potOnStove={potOnStove} potHasBroth={potHasBroth} potHasNoodles={potHasNoodles} potHasGlowroot={potHasGlowroot} ladleFilled={ladleFilled} bowlOnTray={bowlOnTray} bowlHasSoup={bowlHasSoup} bowlHasSeasoning={bowlHasSeasoning} onBellClick={handleBellClick} />
      {judgeVisible && <Frame1 dialogueStep={dialogueStep} />}

      {/* SpeakBanner vertically centered */}
      {judgeVisible && showBanner && (
        <div className="absolute left-0 w-full flex items-center justify-center" style={{ top: '50%', transform: 'translateY(-50%)', zIndex: 1000 }}>
          <div className="h-[200px] w-full flex items-center justify-center">
            <SpeakBanner />
          </div>
        </div>
      )}

      {/* Render dropped items */}
      {droppedItems.map((item, index) => (
        <div
          key={index}
          className="absolute w-[136px] h-[132px]"
          style={{
            left: item.x,
            top: item.y
          }}
        >
          {item.type === 'pot' && <Group14385 />}
        </div>
      ))}

      {/* Render ingredient on cutting board */}
      {boardIngredient && (
        <div
          className="absolute"
          style={{
            left: 673 + 110 - (boardIngredient === 'glowroot' ? 55 : boardIngredient === 'sliced' ? 57.5 : 40), // Center on board
            top: 429 + 75 - (boardIngredient === 'glowroot' ? 52 : boardIngredient === 'sliced' ? 25 : 26), // Center vertically
            width: boardIngredient === 'glowroot' ? '110px' : boardIngredient === 'sliced' ? '115px' : '80px',
            height: boardIngredient === 'glowroot' ? '104px' : boardIngredient === 'sliced' ? '50px' : '52px'
          }}
        >
          {boardIngredient === 'glowroot' && (
            <div className="rotate-[-17.96deg]">
              <Glowroot />
            </div>
          )}
          {boardIngredient === 'chopped' && (
            <DraggableIngredient
              itemType="choppedGlowroot"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="size-full cursor-grab active:cursor-grabbing"
            >
              <Chopped />
            </DraggableIngredient>
          )}
          {boardIngredient === 'sliced' && (
            <DraggableIngredient
              itemType="slicedGlowroot"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="size-full cursor-grab active:cursor-grabbing"
            >
              <Sliced />
            </DraggableIngredient>
          )}
          {boardIngredient === 'minced' && (
            <DraggableIngredient
              itemType="mincedGlowroot"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="size-full cursor-grab active:cursor-grabbing"
            >
              <Mince />
            </DraggableIngredient>
          )}
        </div>
      )}

      {/* Render OptionsKnife modal */}
      {showKnifeOptions && (
        <div
          className="absolute z-[9999]"
          style={{
            left: 673 + 110 - 115, // Center above cutting board (230px wide modal)
            top: 750 - 320 - 207, // Bottom of window is 320px from bottom of game screen (750px tall - 320px - 207px modal height)
            width: '230px',
            height: '207px'
          }}
        >
          <div onClick={(e) => {
            const target = e.target as HTMLElement;
            const button = target.closest('[data-name]');
            if (button) {
              const buttonName = button.getAttribute('data-name');
              if (buttonName === 'button_chop') {
                setBoardIngredient('chopped');
                setShowKnifeOptions(false);
              } else if (buttonName === 'button_slice') {
                setBoardIngredient('sliced');
                setShowKnifeOptions(false);
              } else if (buttonName === 'button_mince') {
                setBoardIngredient('minced');
                setShowKnifeOptions(false);
              }
            }
          }}>
            <OptionsKnife />
          </div>
        </div>
      )}

      {renderPreview()}
    </div>
  );
}