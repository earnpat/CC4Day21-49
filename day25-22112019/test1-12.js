arr1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
]

let arr2 = arr1.map(x => {
  // `${x.name} ${x.surname}`
  let d = new Date(x.birth)
  let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return "<tr> <td>" + x.name + "</td> <td>" + d.getDate() + " " + m[parseInt(d.getMonth())] + " " + d.getFullYear() + "</td> </tr>"
})

console.log(arr2)