const calculateRating = function(ratings) {
  let ratingCount = 0;
  let ratingTally = 0;
  for (let i = 1; i <= 5; i++) {
    if (ratings[i]) {
      ratingCount += Number.parseInt(ratings[i]);
      ratingTally += Number.parseInt(ratings[i]) * i;
    }
  }
  return (ratingTally / parseFloat(ratingCount)).toFixed(1);
};

export default calculateRating;