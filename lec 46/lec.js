
 //why we called object dynamic we we can change it on run time.
// let obj = {
//     age: 12,
//     wt:68,
//     ht: 180

// };
// console.log(obj);
// obj.color = "White";
// console.log(obj)




//----***---object cloning----***----



//------using spread operator------


// let src = {
//     age: 12,
//     wt:68,
//     ht: 180
// }
// let dest= {...src}; //this is spread operator //clonig horahi h 
// src.age = 90; //src toh 90 hogya but dest m abhi bhi vohi copy hua h jisko humne src m phele pass  kiya tha.
// console.log(src);
// console.log(dest)


//------using assign method------

// let src = {
//     age: 12,
//     wt:68,
//     ht: 180
// }
// let src2 = {
//     value: 101,
//     name:"Love"

// }

// let dest = Object.assign({},src,src2); //clone bna aur destination m koi change nhi h .
// src.age = 90;
// console.log(src);
// console.log(dest)



//----iteration-----

// let src = {
//     age: 12,
//     wt:68,
//     ht: 180
// };
// let dest = {}
// for(let key in src){
//     let newkey = key;
//     let newvalue = src[key];
//     dest[newkey] = newvalue;
// }
// src.age = 90
// console.log(src);
// console.log(dest)



//------garbage collector-----

//that memory which is no longer in use can be free by garbage collector.



