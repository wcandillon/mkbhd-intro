import React from "react";
import { View } from "react-native";
import { useCurrentFrame } from "remotion";

import Square from "./Square";

const Intro = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Square />
    </View>
  );
};

export default Intro;
