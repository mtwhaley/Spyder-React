export const getTraversalLinePoints = (areaWidth, areaHeight) => {
  if (areaHeight === undefined) areaHeight = areaWidth;
  const points = [
    {
      start: [areaWidth / 2, 0],
      end: [areaWidth / 2, areaHeight],
    },
    {
      start: [0, areaHeight / 2],
      end: [areaWidth, areaHeight / 2],
    },
    {
      start: [0, 0],
      end: [areaWidth, areaHeight],
    },
    {
      start: [areaWidth, 0],
      end: [0, areaHeight],
    },
  ];

  return pointsToDetails(points);
};
export const pointsToDetails = (points) => {
  return points.map((point) => {
    return `M${point.start[0]},${point.start[1]} L${point.end[0]},${point.end[1]}`;
  });
};

export const pointsToString = (points) => {
  let pointString = "";
  for (const point of points) {
    pointString += " " + point[0] + "," + point[1];
  }
  return pointString;
};

export const getCorrespondingWebPoints = (
  distanceFromOrigin,
  originX,
  originY
) => {
  const sin45 = 0.70710678;
  const diagonalComponenentDisplacement = sin45 * distanceFromOrigin;

  const points = [
    [originX, originY - distanceFromOrigin],
    [
      originX + diagonalComponenentDisplacement,
      originY - diagonalComponenentDisplacement,
    ],
    [originX + distanceFromOrigin, originY],
    [
      originX + diagonalComponenentDisplacement,
      originY + diagonalComponenentDisplacement,
    ],
    [originX, originY + distanceFromOrigin],
    [
      originX - diagonalComponenentDisplacement,
      originY + diagonalComponenentDisplacement,
    ],
    [originX - distanceFromOrigin, originY],
    [
      originX - diagonalComponenentDisplacement,
      originY - diagonalComponenentDisplacement,
    ],
  ];
  return points;
};
