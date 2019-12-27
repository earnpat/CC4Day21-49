function search(arr, elem) {
  // TODO: Implement Code

  let idx;

  if (arr.length === 0) {
    idx = -1;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        idx = i;
        break;
      }
      else idx = -1;
    }
  }

  return idx

}

// console.log(`return ${search([1, 2, 3, 4, 5], 4)}`)

module.exports = search;