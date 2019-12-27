// 1. Writing Tests
// 2. Implement Equal Function
// 3. Implement Code

const sortNumber = require("./sortNumber");

let compareTest = (first, second) => {
    if(JSON.stringify(first) !== JSON.stringify(second))
    { throw new Error(`${first} is not equal to ${second}`) }
    else console.log(first)
}

let result, expected;

// a > b > c
// a > b > c
// b > a > c
// b > c > a
// c > a > b
// c > b > a
// a = b > c
// a = b < c
// b = c > a
// b = c < a
// a = c > b
// a = c < b
// a = b = c

result = sortNumber(5,4,3);
expected = [3,4,5];
compareTest(result, expected)

result = sortNumber(3,1,2);
expected = [1,2,4];
compareTest(result, expected)

    // if(!(expected[0] == result[0] && expected[1] == result[1] && expected[2] == result[2]))
    // {
    //     throw new Error(`${result} is not equal to ${expected}`)
    // }
    // else console.log(result)