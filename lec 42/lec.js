//{
//--------function hoisting------
//sayMyName("BABBAR")
// function sayMyName(finalname){
//     console.log(finalname);
// }
// sayMyName("BABBAR")
// }




// console.log(age); //undefined
// var age = 25;



// console.log(age); //show error const aur let m call k baad initalise m error aayege var m nhi aata.
//  let age = 25;


//--------using function expression-------

//hoisting not happen

//phit reference error aayega example dekho.

// sayhello()
// let  sayhello=function(){
//     console.log("Hello jee, kaise ho saare"); //throw error.
// }

//------class level hoisting example-----

// const object1=new human();
// class human{ //throw error

// }

//only var aur plain function m function hoisting kaam krti h other waise nhi  krti.






//----******------function call stack-------*******-------


 //----------why function first class cititzen------

//1) assign variable:-

//  let greet = function(){
//     console.log("Greeting")
//  }
// greet();




// 2) pass argument


// function greetme(greet,fullname)
// {
//     console.log("hello",fullname);
//     greet();
// }
// function greet(){
//     console.log("Greeting");
// }
// greetme(greet , "Garima");



// 3) return function

// function solve(number){
//     return function(number){
//         return number*number;
//     }

// }
// let ans = solve(5);
// let finalans = ans(10);
// console.log(finalans)



//4) use function in DS

// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];

// let first  =arr[0];//a+b return karege first function map with index value of array.
// let ans = first(5,10);
// console.log(ans)


