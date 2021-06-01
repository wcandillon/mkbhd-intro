import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

import { Extrapolate } from "../components/Redash";

import Square from "./Square";
import Background from "./Background";

const Intro = () => {
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();
  const r = interpolate(frame, [3 * 30, 3 * 30 + 13], [0, height], {
    ...Extrapolate.CLAMP,
    easing: Easing.inOut(Easing.ease),
  });
  return (
    <svg width={width} height={height}>
      <g mask="url(#mask)">
        <rect width={width} height={height} fill="#F2F2F2" />
        <Background />
        <Square />
      </g>
      <mask id="mask">
        <rect x={0} y={0} width={width} height={height} fill="white" />
        <circle r={r} cx={width / 2} cy={height / 2} fill="black" />
      </mask>
    </svg>
  );
};

export default Intro;
