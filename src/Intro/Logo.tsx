import useDarkMode from "use-dark-mode";

import { Arc } from "./Arc";
import { Atom } from "./Atom";

interface LogoProps {
  progress: number;
  scale: number;
  rotate: number;
}

const Logo = ({ progress, scale, rotate }: LogoProps) => {
  const { value: isDark } = useDarkMode();

  return (
    <g
      style={
        isDark
          ? {
              filter: "invert(1) hue-rotate(180deg)",
            }
          : undefined
      }
    >
      <Arc
        rotate={-rotate}
        progress={progress}
        scale={scale}
        glitch={2 * 30 + 23}
      />
      <Arc rotate={0} progress={progress} scale={scale} glitch={2 * 30 + 25} />
      <Arc
        rotate={rotate}
        progress={progress}
        scale={scale}
        glitch={2 * 30 + 25}
      />
      <Atom scale={scale} glitch={2 * 30 + 23} />
    </g>
  );
};

export default Logo;
