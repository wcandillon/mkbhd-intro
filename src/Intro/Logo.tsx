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
      <Arc rotate={-rotate} progress={progress} scale={scale} />
      <Arc rotate={0} progress={progress} scale={scale} />
      <Arc rotate={rotate} progress={progress} scale={scale} />
      <Atom scale={scale} />
    </>
  );
};

export default Logo;
