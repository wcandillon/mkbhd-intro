import { Easing, interpolate, useCurrentFrame } from "remotion";

import { Extrapolate } from "../components/Redash";

const SIZE = 1225;
const Square = () => {
  const frame = useCurrentFrame();
  const size = interpolate(frame, [0, 30, 60, 90], [0, SIZE, SIZE, 0], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });

  return (
    <svg
      width={1525}
      height={1525}
      viewBox="0 0 1525 1525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#prefix__filter0_dd)">
        <rect
          x={150 + (SIZE - size) / 2}
          y={150 + (SIZE - size) / 2}
          width={size}
          height={size}
          rx={150}
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd"
          x={0}
          y={0}
          width={1525}
          height={1525}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-50} dy={-50} />
          <feGaussianBlur stdDeviation={50} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={50} dy={50} />
          <feGaussianBlur stdDeviation={50} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Square;
