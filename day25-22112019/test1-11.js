arr1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]

  arr1.map(x => {
      let today = new Date("2019-11-22")
      let b = new Date(x.birth)
      x.age = today.getFullYear() - b.getFullYear()
      return x
  })

  console.log(arr1)