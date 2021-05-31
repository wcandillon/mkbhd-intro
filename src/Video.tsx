import { Composition } from "remotion";

import Intro from "./Intro";

export const RemotionVideo = () => {
  return (
    <Composition
      id="Intro"
      component={Intro}
      durationInFrames={30 * 3 + 13}
      fps={30}
      width={3840}
      height={2160}
      defaultProps={{
        titleText: "Welcome to Remotion",
        titleColor: "black",
      }}
    />
  );
};
