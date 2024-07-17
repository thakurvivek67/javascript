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

const obj = {
    name: "vivek",
    rollno: 33,
    des: "hello",
    vivek: function(){
       setTimeout(()=>{
          console.log(this.rollno);
       })
    },
  };
  console.log(obj.vivek());
  