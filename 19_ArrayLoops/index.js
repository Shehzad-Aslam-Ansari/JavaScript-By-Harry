let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}
/*
let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element - element)
})

// Array.from 
let name = "Harry"
let arr = Array.from(name) // Converting in an array
console.log(arr, typeof(arr))

// for...of 
  console.log("*****For OF*****")
for (let item of num){
  console.log(item)
}

// for...in
  console.log("*****For IN*****")
for (let i in num){
  console.log(num[i]) //print value
 // console.log(i) //index of an array
}
*/