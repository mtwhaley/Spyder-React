import React from "react";
import {
  getCorrespondingWebPoints,
  getTraversalLinePoints,
  pointsToString,
} from "./util";

export default function WebSVG({
  width = 200,
  height = 200,
  lineWeight = 2,
  backgroundColor = "#aaaaaa",
  color = "white",
}) {
  const distances = [width / 4, width / 2.2];
  const linePoints = getTraversalLinePoints(width, height);

  return (
    <svg width={width} height={height}>
      <rect fill={backgroundColor} width="100%" height="100%" />

      {linePoints.map((details) => {
        return (
          <path
            d={details}
            stroke={color}
            strokeWidth={lineWeight}
            key={`web-line-${linePoints.indexOf(details)}`}
          />
        );
      })}

      {distances.map((distance) => {
        return (
          <polygon
            points={pointsToString(
              getCorrespondingWebPoints(distance, width / 2, height / 2)
            )}
            fill="none"
            stroke={color}
            strokeWidth={lineWeight}
            key={`web-ring-${distances.indexOf(distance)}`}
          />
        );
      })}
    </svg>
  );
}
