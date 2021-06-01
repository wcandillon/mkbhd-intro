import { Arc } from "./Arc";
import { Atom } from "./Atom";

interface LogoProps {
  progress: number;
  scale: number;
  rotate: number;
}

const Logo = ({ progress, scale, rotate }: LogoProps) => {
  return (
    <>
      <Arc
        rotate={-rotate}
        progress={progress}
        scale={scale}
        glitch={2 * 30 + 23}
      />
      <Arc
        rotate={0}
        progress={progress}
        scale={scale}
        glitch={2 * 30 + 25}
        smoothGlitch
      />
      <Arc
        rotate={rotate}
        progress={progress}
        scale={scale}
        glitch={2 * 30 + 25}
        smoothGlitch
      />
      <Atom scale={scale} glitch={2 * 30 + 23} />
    </>
  );
};

export default Logo;
