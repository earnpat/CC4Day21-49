class Person {
    constructor (firstname, lastname, birthdate, salary) {
        this.firstname = firstname
        this.lastname = lastname
        this.birthdate = birthdate
        this.salary = salary
    }

    get fullname () {
        return this.firstname + " " + this.lastname
    }

    set salary (value) {
        // this._salary = Number(value)
        if(value<=10000)
        {
            this._salary = Number(value)
        }
        else console.log('pls enter new number')
    }

    get salary () {
        return this._salary
    }
}

var i = new Person('Tanin', 'Thanasopon', '1996-01-28', '1000')
console.log(i)
console.log("fullname = " + i.fullname)
console.log("salary = " + i.salary)

i.salary = '1000'
console.log("after salary = " + i.salary)