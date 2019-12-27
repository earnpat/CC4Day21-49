// 1. TDD -> Write tests, Implement, Refactor
const evaluate = require("./findSecondTest")

// TODO: Write tests

test('1. ', () => {
    expect(() => evaluate([2,2,2,2])).toThrow()
})

test('2. ', () => {
    expect(evaluate([2,3,3,3,3])).toBe(2)
})

test('3. ', () => {
    expect(() => evaluate([])).toThrow()
})