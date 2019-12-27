function evaluate(expr) {
  // TODO: Implement Code
  expr = expr.split(' ')
  if (expr.lenght === 1) {
    return parseInt(expr) // return +expr
  }

  let result = parseInt(expr[0])
  for (let i = 1; i < expr.length; i+=2) {
    if (expr.length > i) {
      if (expr[i] === '+') {
        result += parseInt(expr[i+1])
      }
      else {
        result -= parseInt(expr[i+1])
      }
    }
  }

return result

}

module.exports = evaluate;