import svgPaths from "./svg-pc0noxp3jo";

function Group() {
  return (
    <div className="absolute h-[58.768px] left-0 top-[21px] w-[82px]">
      <div className="absolute inset-[-5.1%_-3.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 64.7676">
          <g id="Group 14315">
            <g id="Union">
              <mask fill="black" height="65" id="path-1-outside-1_29_1577" maskUnits="userSpaceOnUse" width="88" x="0" y="0">
                <rect fill="white" height="65" width="88" />
                <path d={svgPaths.pdad32f0} />
              </mask>
              <path d={svgPaths.pdad32f0} fill="var(--fill-0, #C8C6BB)" />
              <path d={svgPaths.p29603d00} fill="var(--stroke-0, black)" mask="url(#path-1-outside-1_29_1577)" />
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

function BowlSoup() {
  return (
    <div className="absolute contents left-0 top-[21px]" data-name="bowl-soup">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <BowlSoup />
    </div>
  );
}