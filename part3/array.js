//declare one array which has 3 typ rof tea 
// access 1 st  elemen in the array and store in another variable and print it
let teaFlover = ["greenTea","chaiTeat","BlaackTea"]
let myTea=teaFlover[0]
console.log(myTea) //greenTea

// add new tea in the array and print the array
teaFlover.push("masalaTea")
console.log(teaFlover) //[ 'greenTea', 'chaiTeat', 'BlaackTea', 'masalaTea' ]

//add new tea in the 2nd position and print the array
teaFlover.splice(1,0,"lemonTea")
console.log(teaFlover) //[ 'greenTea', 'lemonTea', 'chaiTeat', 'BlaackTea', 'masalaTea' ]

//add new tea in the 3rd position and print the array
teaFlover.splice(2,0,"gingerTea")
console.log(teaFlover) //[ 'greenTea', 'lemonTea', 'gingerTea', 'chaiTeat', 'BlaackTea', 'masalaTea' ]

// remove 3rd element from the array and print the array
teaFlover.splice(2,1)
console.log(teaFlover) //[ 'greenTea', 'lemonTea', 'chaiTeat', 'BlaackTea', 'masalaTea' ]
//4 nd  element from the array and print the array teaFlover


//change 2nd element in the array and as myTea and store in another variable and print it
myTea=teaFlover[1]="milkTea"
console.log(myTea) //milkTea
console.log(teaFlover) //[ 'greenTea', 'milkTea', 'chaiTeat', 'BlaackTea', 'masalaTea' ]
 myTea=teaFlover[3]="herbalTea"
console.log(myTea) //herbalTea
console.log(teaFlover) //[ 'greenTea', 'milkTea', 'chaiTeat', 'herbalTea', 'masalaTea' ]

//you have array mytea = ["greenTea","chaiTeat","BlaackTea"] and you want to create soft copy of the array and then if you will chnage any thing in mytea then softcopy also chnage because it is reference to the some memory location
let mytea = ["greenTea","chaiTeat","BlaackTea"]
let softcopy=mytea
mytea[1]="lemonTea" 
console.log(softcopy) //[ 'greenTea', 'lemonTea', 'BlaackTea' ]
console.log(mytea) //[ 'greenTea', 'lemonTea', 'BlaackTea' ]


//you have array mytea = ["greenTea","chaiTeat","BlaackTea"] and you want to create hard copy of the array and then if you will chnage any thing in mytea then hardcopy will not chnage because it is not reference to the some memory location
let hardcopy=[...mytea]
mytea[1]="milkTea"
mytea.pop()
console.log(hardcopy) //[ 'greenTea', 'lemonTea', 'BlaackTea' ]
console.log(mytea) //[ 'greenTea', 'milkTea', 'BlaackTea' ] 


//we have two  array and we want to merge two array
let veg=["tomato","potato","cabbage"]
let fruit=["banana","apple","mango"]
//this is new way to merge two array
let f=veg.concat(fruit)
console.log(f) //[ 'tomato', 'potato', 'cabbage', 'banana', 'apple', 'mango' ]

//this is old way to merge two array
let food=[...veg,...fruit]
console.log(food) //[ 'tomato', 'potato', 'cabbage', 'banana', 'apple', 'mango' ]   