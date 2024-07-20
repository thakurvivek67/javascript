//this is the way to write this keyword when you have nested function

// const obj = {
//   name: "vivek",
//   rollno: 33,
//   des: "hello",
//   vivek: function(){
//     let that = this;
//      setTimeout(function(){
//         console.log(that.rollno);
//      })
//   },
// };
// console.log(obj.vivek());

//Arrow function provide a lexical this binding

// const obj = {
//     name: "vivek",
//     rollno: 33,
//     des: "hello",
//     vivek: function(){
//        setTimeout(()=>{
//           console.log(this.rollno);
//        })
//     },
//   };
//   console.log(obj.vivek());
  
//In Normal function this refers to object or scope in which it placed/ refers to the current context
// const obj = {
//    name: "vivek",
//    rollno: 1212,
//    des: "hello",
//    vivek: function(){
     
//          console.log(this.rollno);
//    },
//  };
//  console.log(obj.vivek());// it return rollno value

//  const obj = {
//    name: "vivek",
//    rollno: 1212,
//    des: "hello",
//    vivek: ()=>{
     
//          console.log(this.rollno);
//    },
//  };
//  console.log(obj.vivek());// it return undefined
 
//ReferenceError: Cannot access 'vivek' before initialization
// vivek();
// const vivek=()=>{
//    console.log("hello")
// }

// In this code function vivek is hoisted at top so it give
// vivek();
// function vivek(){
//    console.log("hello")
// }
 
