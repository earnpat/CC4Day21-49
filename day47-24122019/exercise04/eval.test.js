// 1. TDD -> Write tests, Implement, Refactor
const evaluate = require("./eval")

// TODO: Write tests

test('1. ', () => {
    expect(evaluate("1")).toBe(1)
})

test('2. ', () => {
    expect(evaluate("2 + 2")).toBe(4)
})

test('3. ', () => {
    expect(evaluate("5 - 4")).toBe(1)
})

test('4. ', () => {
    expect(evaluate("11 + 11")).toBe(22)
})

test('5. ', () => {
    expect(evaluate("14 - 15")).toBe(-1)
})

test('6. ', () => {
    expect(evaluate("1 + 1 + 1")).toBe(3)
})

test('7. ', () => {
    expect(evaluate("11 + 12 - 13")).toBe(10)
})

test('8. ', () => {
    expect(evaluate("1 - 2 + 3 - 4 + 5 - 6 + 7")).toBe(4)
})