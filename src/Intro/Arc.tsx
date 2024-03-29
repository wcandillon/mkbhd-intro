import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

import { COLOR_1, COLOR_2 } from "./config";

interface ArcProps {
  progress: number;
  scale: number;
  rotate: number;
  glitch: number;
}

export const Arc = ({ scale, progress, rotate, glitch }: ArcProps) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();
  const cx = config.width / 2;
  const cy = config.height / 2;
  const rx = (config.height / 10) * scale;
  const ry = rx * 2.2;
  const arcLength = Math.PI * 2 * Math.sqrt((rx * rx + ry * ry) / 2);
  const strokeWidth = arcLength / 60;
  return (
    <>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={COLOR_1} />
          <stop offset="100%" stopColor={COLOR_2} />
        </linearGradient>
      </defs>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="url(#gradient)"
        strokeDasharray={arcLength}
        strokeDashoffset={arcLength - arcLength * progress}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={`rotate(${rotate}, ${cx}, ${cy})`}
        opacity={glitch === frame ? 0 : 1}
      />
    </>
  );
};
