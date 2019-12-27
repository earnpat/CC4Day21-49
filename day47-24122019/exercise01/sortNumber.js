function sortNumber(a, b, c) {
  // TODO: Implement Function

  // let t;
  arr = [a,b,c]

  // for(i=0;i<arr.lenght-1;i++)
  // {
  //   for(j=0;j<arr.lengh-1;j++)
  //   if(arr[j]>arr[j+1])
  //   {
  //     t = arr[j+1]
  //     arr[j+1] = arr[j]
  //     arr[j] = t
  //   }
  // }

  result = arr.sort()

  return arr
}

module.exports = sortNumber;