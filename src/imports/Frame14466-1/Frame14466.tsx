import svgPaths from "./svg-r2966fwguz";

function Group() {
  return (
    <div className="absolute h-[74.23px] left-px top-0 w-[69.001px]">
      <div className="absolute inset-[-4.04%_-4.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 80.2297">
          <g id="Group 14314">
            <path d={svgPaths.p16746600} fill="var(--fill-0, #E5E5E5)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p2d78f700} fill="var(--fill-0, #D9D9D9)" id="Union" />
            <g id="Ellipse 19">
              <ellipse cx="23" cy="54.0001" fill="var(--fill-0, #999999)" rx="20" ry="3" />
              <ellipse cx="23" cy="54.0001" fill="url(#paint0_radial_29_1489)" rx="20" ry="3" />
            </g>
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(23 54.0001) rotate(-90) scale(3.375 24.3958)" gradientUnits="userSpaceOnUse" id="paint0_radial_29_1489" r="1">
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
    <div className="h-[25.282px] relative w-[29px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 25.2822">
        <g id="Mask group">
          <mask height="26" id="mask0_29_1363" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="29" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="25.2821" id="Rectangle 34647416" width="29" y="0.00017528" />
          </mask>
          <g mask="url(#mask0_29_1363)">
            <g id="Ellipse 78">
              <path d={svgPaths.p2682fb80} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p2682fb80} fill="url(#paint0_radial_29_1363)" />
              <path d={svgPaths.p2682fb80} stroke="var(--stroke-0, black)" strokeWidth="2.23077" />
            </g>
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(15.4085 25.3686) rotate(48.7888) scale(8.32093 6.0629)" gradientUnits="userSpaceOnUse" id="paint0_radial_29_1363" r="1">
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
    <div className="absolute h-[23.538px] left-0 top-[29px] w-[27px]" data-name="Mask group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 23.5385">
        <g id="Mask group">
          <mask height="24" id="mask0_29_1483" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23.5385" id="Rectangle 34647416" width="27" />
          </mask>
          <g mask="url(#mask0_29_1483)">
            <g id="Group 14393">
              <path d={svgPaths.p3493ec00} fill="url(#paint0_linear_29_1483)" id="Vector 84 (Stroke)" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2.07692" />
              <path d={svgPaths.pbece7e8} id="Vector 93" stroke="url(#paint1_linear_29_1483)" strokeLinecap="round" strokeWidth="2.76923" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_29_1483" x1="17.9606" x2="10.2295" y1="20.4791" y2="23.7882">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_29_1483" x1="17.9597" x2="10.2286" y1="20.4784" y2="23.7875">
            <stop stopColor="#FF7F27" />
            <stop offset="1" stopColor="#C7F0B0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LadleSoup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ladle-soup">
      <Group />
      <div className="absolute flex h-[25.282px] items-center justify-center left-[15px] top-[26px] w-[29px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <MaskGroup />
        </div>
      </div>
      <MaskGroup1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative flex size-full items-center justify-center">
      {/* Bounding box ~79×84 for ladle SVG + overlays; centers art in the 100×100 drag slot */}
      <div className="relative h-[84px] w-[79px] shrink-0">
        <LadleSoup />
      </div>
    </div>
  );
}