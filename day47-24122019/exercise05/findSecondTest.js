function evaluate(expr) {
  // TODO: Implement Code
  let arr = expr.sort()

  for(let i=arr.length-1;i>=1;i--)
  {
    if(arr[i]!==arr[i-1])
    {
      return arr[i-1]
    }
  }
  throw new Error()

}

module.exports = evaluate;