import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: monkey-patching
  const originalFunction = utils.fetchNumberFromAPI;
  utils.fetchNumberFromAPI = () => 10;
  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);

  // reset
  utils.fetchNumberFromAPI = originalFunction;
})