import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: jest.fn(), mockReturnValueOnce
  const originalFunction = utils.fetchNumberFromAPI;
  utils.fetchNumberFromAPI = jest.fn();
  utils.fetchNumberFromAPI
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(7)
  const expected = {min: 2, max: 7, avg: (2+4+7)/3};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  expect(utils.fetchNumberFromAPI).toHaveBeenCalledTimes(3)
  
  // reset
  utils.fetchNumberFromAPI = originalFunction;
})