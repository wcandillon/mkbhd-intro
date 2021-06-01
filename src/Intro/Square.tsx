import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

import { Extrapolate } from "../components/Redash";

import Logo from "./Logo";

const SIZE = 1225;

const Square = () => {
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const size = interpolate(frame, [0, 30, 60, 90 + 13], [0, SIZE, SIZE, 0], {
    ...Extrapolate.CLAMP,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const progress = interpolate(frame, [7, 7 + 30], [0, 1], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  const scale = interpolate(frame, [7, 7 + 30, 7 + 31, 90 + 13], [0, 1, 1, 0], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  const rotate = interpolate(frame, [30, 40], [0, 60], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  return (
    <>
      <rect
        filter="url(#shadow)"
        x={width / 2 - size / 2}
        y={height / 2 - size / 2}
        width={size}
        height={size}
        rx="50"
        fill="#F2F2F2"
        opacity={0.8}
      />
      <Logo progress={progress} scale={scale} rotate={rotate} />
      <defs>
        <filter
          id="shadow"
          x="1157"
          y="317"
          width="1525"
          height="1525"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-50" dy="-50" />
          <feGaussianBlur stdDeviation="50" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="50" dy="50" />
          <feGaussianBlur stdDeviation="50" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </>
  );
};

export default Square;
