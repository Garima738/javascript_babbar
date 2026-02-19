//  let firstPromnise = new Promise((resolve,reject)=>{
//     console.log("Love babbar")
//     //resolve(1001);
//     reject(new error("Internal server error"));//console p inspecr krke check karege toh yeh error show karega

//  });



// function sayMyName(){
//     console.log("My name is love babbar");
// }

// setTimeout(sayMyName ,10000); //it show output by late 10 sec



// let promise1 = new Promise((resolve, reject) => {
//     let success = false;

//     if(success) {
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });
// promise1.then((message)=>{
//     console.log("The message is"+message);

// }).catch((error)=>{
//     console.log("Error: "+error);
// })


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Third");
});

promise.all([promise1,promise2,promise3])//if any one of them is fail it not execute.
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.error("error"+error);

})