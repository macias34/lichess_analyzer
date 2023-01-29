import { useSelector } from "react-redux";
import dayjs from "dayjs";

class Rating {
  constructor(year, month, day, rating) {
    this.x = dayjs(`${year}-${month}-${day}`).format("YYYY-MM-DD");
    this.y = rating;
  }
}

export const getPeakRating = (data) => {
  const { gameFormat } = useSelector((state) => state.gameFormat.value);

  const gameFormatData = data.find(
    (format) => format.name.toLowerCase() === gameFormat.toLowerCase()
  );

  if (gameFormatData.points.length === 0) return data;

  const bulletPoints = gameFormatData.points.map(
    (dataPoint) =>
      new Rating(dataPoint[0], dataPoint[1], dataPoint[2], dataPoint[3])
  );

  const peakRating = bulletPoints.reduce(function (prev, current) {
    return prev.y > current.y ? prev : current;
  });

  return peakRating;
};

export const reducePointsArr = (data) => {
  if (data.points.length === 0) return data.points;

  const bulletPoints = data.points.map(
    (dataPoint) =>
      new Rating(dataPoint[0], dataPoint[1], dataPoint[2], dataPoint[3])
  );

  const peakRating = bulletPoints.reduce(function (prev, current) {
    return prev.y > current.y ? prev : current;
  });

  const length = bulletPoints.length;
  if (length < 50) return bulletPoints;

  const modulo = Math.round(length / 50);
  const filteredPoints = bulletPoints.filter((point, index) => {
    if (index % modulo === 0) {
      return point;
    }
  });

  //   Filters bulletPoints to 50 length

  if (!filteredPoints.some((p) => p.y == peakRating.y)) {
    filteredPoints.push(peakRating);
  }

  // Check if peakRating is in filteredPoints array, and pushes it if it isn't

  return filteredPoints.sort((a, b) => new Date(b.x) - new Date(a.x));
};
