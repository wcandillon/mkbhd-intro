import { useCurrentFrame, useVideoConfig } from "remotion";

import { COLOR_1, COLOR_2 } from "./config";

export const Atom: React.FC<{
  scale: number;
  glitch: number;
}> = ({ scale, glitch }) => {
  const config = useVideoConfig();
  const frame = useCurrentFrame();
  return (
    <>
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLOR_1} />
          <stop offset="100%" stopColor={COLOR_2} />
        </linearGradient>
      </defs>
      <circle
        r={70 * scale}
        cx={config.width / 2}
        cy={config.height / 2}
        fill="url(#gradient2)"
        opacity={glitch === frame ? 0 : 1}
      />
    </>
  );
};
