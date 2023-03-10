export const filterPerfs = (perfsObj) => {
  const filteredPerfsObj = Object.fromEntries(
    // Removes object attributes if empty

    Object.entries({
      ultraBullet: perfsObj.ultraBullet,
      bullet: perfsObj.bullet,
      blitz: perfsObj.blitz,
      rapid: perfsObj.rapid,
    })
      .filter(([_, v]) => v != null)
      .filter((perf) => perf[1].games !== 0)
  );

  return filteredPerfsObj;
};
