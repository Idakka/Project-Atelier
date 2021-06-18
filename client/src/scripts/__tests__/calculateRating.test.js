import calculateRating from '../calculateRating';
import { reviewsMetaMock } from '../../mockData/reviewsMock.js';

it('should calculate an average rating from a list of reviewMeta', () => {
  const reviewsMetaMockWithAllRatings = {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
  };
  expect(calculateRating(reviewsMetaMockWithAllRatings)).toBe('3.0');
});

it('should round the answer to a single decimal place', () => {
  const reviewsMetaMockWithRepeatingResult = {
    '1': 1,
    '2': 5,
    '3': 1,
    '4': 1,
    '5': 1,
  };
  // Result of average is 2.5555555555, should round to 2.6
  expect(calculateRating(reviewsMetaMockWithRepeatingResult)).toBe('2.6');
});

it('should not be affected by a missing rating value', () => {
  // This is missing a rating value of 1
  const reviewsMetaMockWithMissingRatingValue = reviewsMetaMock.ratings;
  // average is 2.1428571
  expect(calculateRating(reviewsMetaMockWithMissingRatingValue)).toBe('3.1');
});