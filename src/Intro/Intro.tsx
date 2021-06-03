import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import useDarkMode from "use-dark-mode";

import { Extrapolate } from "../components/Redash";

import Square from "./Square";
import Background from "./Background";

const Intro = () => {
  const { value: isDark } = useDarkMode();
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const r = interpolate(frame, [3 * 30, 3 * 30 + 13], [0, height], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  return (
    <svg
      width={width}
      height={height}
      style={
        isDark
          ? {
              transition: "filter 1s ease-in-out",
              filter: "invert(1) hue-rotate(180deg)",
            }
          : undefined
      }
    >
      <g mask="url(#mask)">
        <rect width={width} height={height} fill="#F2F2F2" />
        <Background />
        <Square />
      </g>
      <defs>
        <filter
          id="blur"
          x="0"
          y="0"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
        <mask id="mask">
          <rect x={0} y={0} width={width} height={height} fill="white" />
          <circle
            r={r}
            cx={width / 2}
            cy={height / 2}
            fill="black"
            filter="url(#blur)"
          />
        </mask>
      </defs>
    </svg>
  );
};

export default Intro;
