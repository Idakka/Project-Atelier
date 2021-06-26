import debounce from '../debounce';

it('Should not run the function more than once within a given period', () => {
  let counter = 0;
  const incrementCounter = () => counter++;
  const debouncedIncrementCounter = () => debounce(incrementCounter(), 100);
  incrementCounter();
  expect(counter).toBe(1);
  setTimeout(() => debouncedIncrementCounter(), 10);
  setTimeout(() => debouncedIncrementCounter(), 20);
  setTimeout(() => debouncedIncrementCounter(), 50);
  setTimeout(() => debouncedIncrementCounter(), 100);
  setTimeout(() => debouncedIncrementCounter(), 150);
  // 99ms after the last call, the counter should not be incremented
  setTimeout(() => expect(counter).notToBe(2), 249);
  // 100ms after the last call, the counter should be incremented
  setTimeout(() => expect(counter).toBe(2), 250);
});