//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// printHello()
// // hello

// function printHello() {
//   console.log("hello")
// }

//hoisting are the top of there socpe or block so you can find function or varible in socpe only not out of scope

// printHello()
// // hello

// printDillion()
// // ReferenceError: printDillion is not defined

// function printHello() {
//   console.log('hello')

//   function printDillion() {
//     console.log("dillion")
//   }
// }


printHello()
// hello

function printHello() {
  printDillion()
  // dillion

  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}

// var , let and const are hoisted , but let and const are in temporal dead zone 

console.log(name)
// undefined

var name = "Dillion"

console.log(name)
// ReferenceError: Cannot access 'name' before initialization

let name = "Dillion"

console.log(name)
// ReferenceError: Cannot access 'name' before initialization

const name = "Dillion"