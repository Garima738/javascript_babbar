//-------ARRAY-------

//creation of array

// let arr=[1,3,4,6,7];
// console.log(arr);

//array constructor

//let brr = new Array('love',1,true);


// console.log(typeof(arr));//object.
// console.log(typeof(brr));//object

//brr.push(3);
//brr.pop();



//shift;

//brr.shift(); //remove first element.
//brr.unshift('Love babbar'); //add element at first indexing.

//console.log(brr);
//console.log(brr.slice(1,2)); //it exclude last value we giver as it doesn't include index 2 value in output

// brr.splice(1,0,'garima'); //(startindex, deletecount, itemtoinsert).
// console.log(brr);

//--------MAP--------

//let arr = [10,20,30,40];
//  let ans = arr.map((number)=>{
//     return number*number;
//  })
//  console.log(ans); //we wanteach index value is a square of it self;

// arr.map((number,index) =>{
//     console.log(number);
//     console.log(index);
// }) //return number with index if we pass index with number.

//--------object creation------

// let obj = {
//     name: "Love",
//     age: 25,
//     weight: 85,
//     greet: function(){
//         console.log("Hello");

//     }

// };
// console.log(obj)
// obj.greet();

//-----filter------

// let arr=[1,2,3,4,5,6];
// let ans = arr.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }


// });

// console.log(ans);


//---------Reduce--------

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// },0);
//  console.log(ans);


//let arr = [10,30,60,40];
// arr.sort();  //for sorting array.
// console.log(arr);

//for sorting in decresing order.

// arr.sort((a,b)=>b-a);

// console.log(arr);


//----------find-------

// let arr = [10, 20, 30, 40, 50];

// let result = arr.find(num => num > 25);

// console.log(result);


//---------FOR EACH-------
// let arr = [10, 20, 30];

// arr.forEach((num, index) => {
//     console.log(index, num);
// });


//------FIR IN--------

// let student = {
//     name: "Garima",
//     age: 20,
//     course: "B.Tech"
// };

// for (let key in student) {
//     console.log(key, student[key]);
// }


//--------FOR OF--------

// let arr = [10, 20, 30, 40];

// for (let num of arr) {
//     console.log(num);
// }



