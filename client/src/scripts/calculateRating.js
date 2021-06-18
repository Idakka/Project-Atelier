const calculateRating = function(ratings) {
  let totalRatingCount = 0;
  let totalRatingTally = 0;
  for (let currentRatingValue = 1; currentRatingValue <= 5; currentRatingValue++) {
    const currentRatingCount = Number(ratings[currentRatingValue]);
    // If no ratings at currentRatingValue, continue to next ratingValue
    if (currentRatingCount) {
      totalRatingCount += currentRatingCount;
      totalRatingTally += currentRatingCount * currentRatingValue;
    }
  }
  return (totalRatingTally / totalRatingCount);
};

export default calculateRating;