import React from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

const Konva = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={1000} height={1000} fill="red" />
      </Layer>
      <Layer>
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  );
};

export default Konva;
