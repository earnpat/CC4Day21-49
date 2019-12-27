// 1. Design and Write Tests
// 2. Implement Function
const search = require("./search");

function test(title, callback) {
  try {
    callback();
    console.log(`${title}: ✓ test passed!`)
  } catch (e) {
    // console.error(e)
    console.log(`${title}: ✕ test failed!`)
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected)
        throw new Error(`${result} is not equal to ${expected}`)
    }
  }
}

// TODO: Write tests

test ("success", () => {
  const inputArray = [1,2,3,4,5];
  const inputNumber = 4;
  const expectedResult = 3;

  expect(search(inputArray, inputNumber)).toBe(expectedResult);
})

test ("cant find number in array", () => {
  const inputArray = [1,2,3,4,5];
  const inputNumber = 10;
  const expectedResult = -1;

  expect(search(inputArray, inputNumber)).toBe(expectedResult);
})

test ("should return -1 when input array is empty", () => {
  const inputArray = [];
  const inputNumber = 10;
  const expectedResult = -1;

  expect(search(inputArray, inputNumber)).toBe(expectedResult);
})