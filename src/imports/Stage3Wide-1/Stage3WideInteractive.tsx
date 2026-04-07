import svgPaths from "./svg-6xk7gqu24i";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGame } from "../../app/context/GameContext";

function adjustTextAreaHeight(el: HTMLTextAreaElement | null) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

/** Stage 3 pitch list: same behavior as Stage 1 HLines, separate `pitchBullets` state. */
function PitchBullets() {
  const { pitchBullets, setPitchBullets } = useGame();
  const inputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);
  const [wordsRemaining, setWordsRemaining] = useState(30);

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  const getTotalWords = () => {
    return pitchBullets.reduce((total, bullet) => total + countWords(bullet), 0);
  };

  useEffect(() => {
    const totalWords = getTotalWords();
    setWordsRemaining(Math.max(0, 30 - totalWords));
  }, [pitchBullets]);

  useEffect(() => {
    inputRefs.current.forEach(adjustTextAreaHeight);
  }, [pitchBullets]);

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const next = [...pitchBullets];
      next.splice(index + 1, 0, "");
      setPitchBullets(next);
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    } else if (e.key === "Backspace" && pitchBullets[index] === "" && pitchBullets.length > 1) {
      e.preventDefault();
      const next = pitchBullets.filter((_, i) => i !== index);
      setPitchBullets(next);
      setTimeout(() => {
        inputRefs.current[Math.max(0, index - 1)]?.focus();
      }, 0);
    }
  };

  const handleChange = (index: number, value: string) => {
    const next = [...pitchBullets];
    next[index] = value;
    setPitchBullets(next);
    requestAnimationFrame(() => adjustTextAreaHeight(inputRefs.current[index]));
  };

  return (
    <div className="absolute z-10 content-stretch flex flex-col gap-[8px] items-start left-[calc(62.5%+66.64px)] top-[180.84px] w-[369.571px]" data-name="h_lines">
      {pitchBullets.map((bullet, index) => (
        <div key={index} className="content-stretch flex gap-[7.141px] items-start w-full">
          <div className="bg-[#b0dfff] shrink-0 size-[5.356px] mt-[12px]" />
          <textarea
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
  );
}

function WordsRemaining() {
  const { pitchBullets } = useGame();
  const wordCount = pitchBullets.reduce((acc, bullet) => {
    return acc + bullet.trim().split(/\s+/).filter((word) => word.length > 0).length;
  }, 0);
  const wordsRemaining = Math.max(0, 30 - wordCount);

  return (
    <div className="absolute z-10 bg-[#b0dfff] content-stretch flex font-['Departure_Mono:Regular',sans-serif] gap-[8px] items-center leading-[normal] left-[calc(62.5%+66.5px)] not-italic px-[4px] text-[#192648] text-[16px] top-[142px] whitespace-nowrap" data-name="words-remaining">
      <p className="relative shrink-0">Words remaining:</p>
      <p className="relative shrink-0">{wordsRemaining}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[357px] left-[66px] top-[198.29px] w-[270px]">
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
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start leading-[normal] left-[93px] text-[#d3edfe] top-[311.29px] w-[205px]" data-name="Time">
      <p className="font-['Martian_Mono:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TIME LEFT
      </p>
      <p className="font-['Digital_Numbers:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[64px] w-[min-content]">{timeDisplay}</p>
    </div>
  );
}

function Frame({ onFinish }: { onFinish: () => void }) {
  return (
    <button
      type="button"
      onClick={onFinish}
      className="absolute content-stretch flex cursor-pointer items-center justify-center left-[106px] appearance-none rounded-[16px] border-0 p-[24px] shadow-[0px_4px_2.5px_0px_#667bfa,0px_-1px_9.1px_0px_#667bfa] top-[452.29px] w-[189px] z-10"
    >
      <div aria-hidden="true" className="absolute bg-gradient-to-b from-[#3357e1] inset-0 pointer-events-none rounded-[16px] to-[#196de7] via-[#4847e1] via-[14.468%]" />
      <p className="pointer-events-none font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fffcea] text-[21.424px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Finish
      </p>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_16.1px_0px_#f9b1ff]" />
    </button>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[21.14px] left-[89px] top-[194px] w-[50.565px]">
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

function Group1({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="absolute contents left-[66px] top-[194px] z-10">
      <Group />
      <p className="absolute font-['Martian_Mono:Regular',sans-serif] font-normal leading-[normal] left-[93px] text-[#d3edfe] text-[16px] top-[242.29px] w-[226px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prepare points for your pitch.
      </p>
      <Time />
      <Frame onFinish={onFinish} />
      <Frame1 />
      <div className="absolute h-[15px] left-[134px] top-[201.29px] w-[199px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199 15.0004">
          <g id="Vector 53">
            <path d={svgPaths.p2e5ebc40} fill="var(--fill-0, #196DE7)" style={{ width: "300px" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[176.079px] left-0 top-[62.92px] w-[245.689px]">
      <div className="absolute inset-[-5.1%_-3.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263.666 194.055">
          <g id="Group 14388">
            <g id="Union">
              <mask fill="black" height="195" id="path-1-outside-1_33_183" maskUnits="userSpaceOnUse" width="264" x="-0.011385" y="-0.0113848">
                <rect fill="white" height="195" width="264" x="-0.011385" y="-0.0113848" />
                <path d={svgPaths.p12e08c80} />
              </mask>
              <path d={svgPaths.p12e08c80} fill="var(--fill-0, #C8C6BB)" />
              <path d={svgPaths.p2f65cc00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_33_183)" />
            </g>
            <rect fill="var(--fill-0, #E0E0E0)" height="24.1201" id="Rectangle 34647313" width="117.311" x="73.1788" y="160.947" />
            <path d={svgPaths.p153b2400} fill="var(--fill-0, #F3F3F3)" id="Rectangle 34647312" />
            <g id="Ellipse 20">
              <ellipse cx="131.833" cy="16.2247" fill="var(--fill-0, #C8C6BB)" rx="122.844" ry="7.23604" />
              <ellipse cx="131.833" cy="16.2247" fill="url(#paint0_radial_33_183)" rx="122.844" ry="7.23604" />
            </g>
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(131.833 16.2247) rotate(-90) scale(8.14054 149.844)" gradientUnits="userSpaceOnUse" id="paint0_radial_33_183" r="1">
              <stop stopColor="#7CD0CC" />
              <stop offset="0.0721842" stopColor="#79BFCE" />
              <stop offset="0.398874" stopColor="#6971D8" />
              <stop offset="0.613519" stopColor="#36218C" />
              <stop offset="0.889506" stopColor="#8777F9" />
              <stop offset="1" stopColor="#A5D9FF" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[75.75px] relative w-[86.89px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.8899 75.7502">
        <g id="Mask group">
          <mask height="76" id="mask0_33_179" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="87" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="75.7502" id="Rectangle 34647416" width="86.8899" />
          </mask>
          <g mask="url(#mask0_33_179)">
            <g id="Ellipse 78">
              <path d={svgPaths.p32795e00} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p32795e00} fill="url(#paint0_radial_33_179)" />
              <path d={svgPaths.p32795e00} stroke="var(--stroke-0, black)" strokeWidth="6.68384" />
            </g>
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(46.1663 76.011) rotate(48.7888) scale(24.9312 18.1657)" gradientUnits="userSpaceOnUse" id="paint0_radial_33_179" r="1">
            <stop stopColor="#B3E8FF" />
            <stop offset="0.692387" stopColor="#B9EEFF" />
            <stop offset="1" stopColor="#FFD646" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-[51.781px] left-[62.92px] top-[20.97px] w-[59.395px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.3954 51.7806">
        <g id="Mask group">
          <mask height="52" id="mask0_33_175" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="60" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="51.7806" id="Rectangle 34647416" width="59.3954" />
          </mask>
          <g mask="url(#mask0_33_175)">
            <g id="Ellipse 78">
              <path d={svgPaths.p376c5700} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p376c5700} fill="url(#paint0_radial_33_175)" />
              <path d={svgPaths.p376c5700} stroke="var(--stroke-0, black)" strokeWidth="4.56887" />
            </g>
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(31.5613 51.9579) rotate(48.7888) scale(17.0422 12.4175)" gradientUnits="userSpaceOnUse" id="paint0_radial_33_175" r="1">
            <stop stopColor="#B3E8FF" />
            <stop offset="0.692387" stopColor="#B9EEFF" />
            <stop offset="1" stopColor="#FFD646" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute h-[67.914px] left-[11.98px] top-[5.99px] w-[77.901px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.9013 67.914">
        <g id="Mask group">
          <mask height="68" id="mask0_33_165" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="78" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="67.914" id="Rectangle 34647416" width="77.9013" />
          </mask>
          <g mask="url(#mask0_33_165)">
            <g id="Group 14393">
              <path d={svgPaths.p2f2f9f00} fill="url(#paint0_linear_33_165)" id="Vector 84 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="5.99241" />
              <path d={svgPaths.p12e29800} id="Vector 93" stroke="url(#paint1_linear_33_165)" strokeLinecap="round" strokeWidth="7.98988" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_165" x1="39.6199" x2="41.7232" y1="51.774" y2="75.9462">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_165" x1="39.6177" x2="41.721" y1="51.7747" y2="75.9469">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute h-[62.69px] left-[86.89px] top-[11.98px] w-[71.909px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9089 62.6898">
        <g id="Mask group">
          <mask height="63" id="mask0_33_192" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="62.6898" id="Rectangle 34647416" width="71.9089" />
          </mask>
          <g mask="url(#mask0_33_192)">
            <g id="Group 14393">
              <path d={svgPaths.p11212b80} fill="url(#paint0_linear_33_192)" id="Vector 84 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="5.53146" />
              <path d={svgPaths.p3cdc5260} id="Vector 93" stroke="url(#paint1_linear_33_192)" strokeLinecap="round" strokeWidth="7.37527" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_192" x1="47.8299" x2="27.2396" y1="54.542" y2="63.3552">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_192" x1="47.8257" x2="27.2355" y1="54.5424" y2="63.3556">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute h-[50.536px] left-[113.86px] top-[26.97px] w-[68.913px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9127 50.536">
        <g id="Mask group">
          <mask height="51" id="mask0_33_161" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="69" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="50.536" id="Rectangle 34647417" width="68.9127" />
          </mask>
          <g mask="url(#mask0_33_161)">
            <g id="Star 4">
              <path d={svgPaths.p11f11080} fill="url(#paint0_linear_33_161)" />
              <path d={svgPaths.p11f11080} fill="url(#paint1_linear_33_161)" />
              <path d={svgPaths.p11f11080} stroke="var(--stroke-0, black)" strokeWidth="6.89127" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_161" x1="40.6796" x2="30.1748" y1="25.9245" y2="72.4937">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_161" x1="40.6796" x2="30.1748" y1="25.9245" y2="72.4937">
            <stop stopColor="#F2EEFF" />
            <stop offset="1" stopColor="#C1B1F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="h-[42.39px] relative w-[53.932px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.9317 42.3899">
        <g id="Mask group">
          <mask height="43" id="mask0_33_171" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="54" x="0" y="0">
            <path d={svgPaths.p2dafc440} fill="var(--fill-0, #D9D9D9)" id="Rectangle 34647417" />
          </mask>
          <g mask="url(#mask0_33_171)">
            <g id="Star 4">
              <path d={svgPaths.p1449be00} fill="url(#paint0_linear_33_171)" />
              <path d={svgPaths.p1449be00} fill="url(#paint1_linear_33_171)" />
              <path d={svgPaths.p1449be00} stroke="var(--stroke-0, black)" strokeWidth="5.39317" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_171" x1="31.8345" x2="23.6134" y1="20.2883" y2="56.7338">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_171" x1="31.8345" x2="23.6134" y1="20.2883" y2="56.7338">
            <stop stopColor="#F2EEFF" />
            <stop offset="1" stopColor="#C1B1F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="absolute h-[30.761px] left-[53.93px] top-[44.94px] w-[41.947px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9469 30.761">
        <g id="Mask group">
          <mask height="32" id="mask0_33_156" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="42" x="0" y="-1">
            <rect fill="var(--fill-0, #D9D9D9)" height="30.761" id="Rectangle 34647417" width="41.9469" x="0.000184978" y="-0.000171372" />
          </mask>
          <g mask="url(#mask0_33_156)">
            <g id="Star 4">
              <path d={svgPaths.p3f497980} fill="url(#paint0_linear_33_156)" />
              <path d={svgPaths.p3f497980} fill="url(#paint1_linear_33_156)" />
              <path d={svgPaths.p3f497980} stroke="var(--stroke-0, black)" strokeWidth="4.19469" />
            </g>
            <path d={svgPaths.p27a74400} fill="url(#paint2_linear_33_156)" id="Star 6" stroke="var(--stroke-0, black)" strokeWidth="5.47133" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_156" x1="24.7595" x2="18.3653" y1="15.7815" y2="44.1279">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_156" x1="24.7595" x2="18.3653" y1="15.7815" y2="44.1279">
            <stop stopColor="#F2EEFF" />
            <stop offset="1" stopColor="#C1B1F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_33_156" x1="21.923" x2="24.1149" y1="12.4658" y2="38.7722">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="h-[36.819px] relative w-[46.18px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.1798 36.819">
        <g id="Mask group">
          <mask height="37" id="mask0_33_151" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="47" x="0" y="0">
            <path d={svgPaths.p21f95100} fill="var(--fill-0, #D9D9D9)" id="Rectangle 34647417" />
          </mask>
          <g mask="url(#mask0_33_151)">
            <g id="Star 4">
              <path d={svgPaths.p3414cd00} fill="url(#paint0_linear_33_151)" />
              <path d={svgPaths.p3414cd00} fill="url(#paint1_linear_33_151)" />
              <path d={svgPaths.p3414cd00} stroke="var(--stroke-0, black)" strokeWidth="4.19469" />
            </g>
            <path d={svgPaths.p1560d1f0} fill="url(#paint2_linear_33_151)" id="Star 6" stroke="var(--stroke-0, black)" strokeWidth="5.47133" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_33_151" x1="24.7609" x2="18.3666" y1="21.8368" y2="50.1832">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_33_151" x1="24.7609" x2="18.3666" y1="21.8368" y2="50.1832">
            <stop stopColor="#F2EEFF" />
            <stop offset="1" stopColor="#C1B1F9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_33_151" x1="21.9242" x2="24.1161" y1="18.5236" y2="44.83">
            <stop stopColor="#C8BFE7" />
            <stop offset="1" stopColor="#5124ED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SoupFin() {
  return (
    <div className="absolute contents left-0 top-0" data-name="soup-fin">
      <Group2 />
      <div className="absolute flex h-[75.75px] items-center justify-center left-[137.83px] top-0 w-[86.89px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <MaskGroup />
        </div>
      </div>
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
      <MaskGroup4 />
      <div className="absolute flex h-[48.016px] items-center justify-center left-[2.69px] top-[29.96px] w-[58.231px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-173.74deg]">
          <MaskGroup5 />
        </div>
      </div>
      <MaskGroup6 />
      <div className="absolute flex h-[41.362px] items-center justify-center left-[191.76px] top-[35.95px] w-[49.713px]" style={{ "--transform-inner-width": "1201", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[174.11deg]">
          <MaskGroup7 />
        </div>
      </div>
    </div>
  );
}

function BowlSeasoning() {
  return (
    <div className="h-[239px] relative shrink-0 w-[245.689px]" data-name="bowl-seasoning">
      <SoupFin />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]">
        <span className="leading-[normal]">{`Suggestions: `}</span>
        <span className="font-['Poppins:Regular',sans-serif] leading-[normal]">name of dish, flavour profile, selling points, inspiration.</span>
      </p>
      <BowlSeasoning />
    </div>
  );
}

function Dish() {
  return (
    <div className="-translate-y-1/2 absolute z-10 content-stretch flex flex-col gap-[19px] items-center left-[calc(25%+104px)] top-1/2 w-[304px]" data-name="dish">
      <Frame2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-full">Uses Galaxy Broth, Canopus Noodles, sliced Glowroot, Kentaurus Seasoning</p>
    </div>
  );
}

export default function Stage3Wide() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full" data-name="Stage 3 - wide">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      </div>
      <div
        className="absolute left-[calc(62.5%+11.37px)] top-[77px] h-[599px] w-[410px] pointer-events-none"
        aria-hidden
        data-name="notepad-pad"
      >
        <img
          src={`${import.meta.env.BASE_URL}pad.svg`}
          alt=""
          className="absolute inset-0 block size-full object-fill select-none"
          draggable={false}
        />
      </div>
      <PitchBullets />
      <WordsRemaining />
      <Group1 onFinish={() => navigate("/stage4")} />
      <Dish />
    </div>
  );
}
