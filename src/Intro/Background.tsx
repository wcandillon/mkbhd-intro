import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import SimplexNoise from "simplex-noise";

import { Extrapolate } from "../components/Redash";

const xNoise = new SimplexNoise("x");
const yNoise = new SimplexNoise("y");
const opacityNoise = new SimplexNoise("opacity");
const colorNoise = new SimplexNoise("opacity");
const margin = 100;

const Background = () => {
  const config = useVideoConfig();
  const width = config.width + margin;
  const height = config.height + margin;
  const frame = useCurrentFrame();
  const SIZE = 100;
  const ROWS = Math.round(height / SIZE);
  const COLS = Math.round(width / SIZE);
  const F = 0.02;
  const reveal = interpolate(frame, [0, 30], [1, 0], Extrapolate.CLAMP);
  return (
    <>
      {new Array(COLS).fill(0).map((_i, i) =>
        new Array(ROWS).fill(0).map((_j, j) => {
          const x = i * SIZE;
          const y = j * SIZE;
          const px = i / COLS;
          const py = j / ROWS;
          const dx = xNoise.noise3D(px, py, frame * F) * SIZE;
          const dy = yNoise.noise3D(px, py, frame * F) * SIZE;
          const opacity = interpolate(
            opacityNoise.noise3D(i, j, frame * F),
            [-1, 1],
            [0, 1],
            { easing: Easing.bezier(0.85, 0, 0.15, 1) }
          );
          const color =
            Math.round(
              interpolate(
                colorNoise.noise3D(px, py, frame * F),
                [-1, 1],
                [0, 1]
              )
            ) === 0
              ? "12,113,221" //"64, 152, 245"
              : "0, 0, 0";
          return (
            <circle
              cx={x + dx}
              cy={y + dy}
              r={4}
              fill={`rgba(${color}, ${opacity})`}
              key={`${i}-${j}`}
            />
          );
        })
      )}
      <circle
        cx={width / 2}
        cy={height / 2}
        strokeWidth={width * Math.SQRT2 * reveal}
        stroke="#f2f2f2"
        fill="transparent"
        r={(width / 2) * Math.SQRT2}
      />
    </>
  );
};

export default Background;
