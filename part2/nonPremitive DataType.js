// Non premitive data type is object , array,function and we have lear how we can store the data
//non premitive data type username is object
let username ={}
console.log(typeof username) //object
console.log(username) //{}



// employe is array object and name and age is object property 
let employee = {
    name : "John",
    age : 30
}
console.log(typeof employee) //object
console.log(employee) //{ name: 'John', age: 30 }
console.log(employee.name) //John
console.log(employee.age) //30

// now if we want to add new property to object we can do like this
employee.salary = 50000
console.log(employee) //{ name: 'John', age: 30, salary: 50000 }


// if we want to delete property from object we can do like this
delete employee.age
console.log(employee) //{ name: 'John', salary: 50000 }
// if we want to update property from object we can do like this
employee.salary = 60000
console.log(employee) //{ name: 'John', salary: 60000 }
console.log("--------------------------" )
// if employee is constant then the object is constant that means it memory address is constant but we can change the property of object
const emp = {
    name : "Doe",
    age : 25
}
console.log(emp) //{ name: 'Doe', age: 25 }
emp.age = 26
console.log(emp) //{ name: 'Doe', age: 26 }


let today = new Date()
console.log(today) //2024-06-12T10:20:30.000Z
console.log(typeof today) //object
console.log(today.getDate()) //12
console.log(today.getMonth()) //5 (month is 0-11)
console.log(today.getFullYear()) //2024
console.log(today.getHours()) //10
console.log(today.getMinutes()) //20
console.log(today.getSeconds()) //30



// Array is also object
let numbers = [1,2,3,4,5]
console.log(typeof numbers) //object        
console.log(numbers) //[ 1, 2, 3, 4, 5 ]
console.log(numbers.length) //5
console.log(numbers[0]) //1
console.log(numbers[4]) //5 
numbers.push(6) //add 6 to array
console.log(numbers) //[ 1, 2, 3, 4, 5, 6 ]
numbers.pop() //remove last element from array
 let students = ["John", "Doe", "Smith"]
 console.log(students) //[ 'John', 'Doe', 'Smith' ]
 console.log(students.length) //3   

 let num = "10"
 console.log(1 + num) //string
    console.log(1 + Number(num)) //11
    let a = "h938"
    console.log(1 + a) //NaN
    console.log(1 + Number(a)) //NaN

    console.log(typeof NaN) //number
    let b=null
    console.log(typeof b) //object
    console.log(b + 1) //null

    let c=undefined
    console.log(typeof c) //undefined
    console.log(c + 1) //NaN

// only in string id will show result as 72 other wise it will work with operator as number
    let id= 7
    console.log(id +2) //number
    console.log(String(id) +2) //string
    let d= 7
    console.log(String(d) +2) //number