

// let name ="Manish";//pure code m accesable hai

// function outerFunction() {
//     {
//         let name = "Garima"; //yeh sirf issi block m accesable hai.
//     }
//     var name = "Mozilla";   // let- . block scope local variable created by init

//     function innerFunction() {
//         // inner function (closure)
//         let name = "Love"; //if i uncomment it then love be seen in the console but if i comment it then babbar will be shown in the console.
//         console.log(name);  // uses variable from parent function
//     }

//     innerFunction();
// }

// outerFunction();





function outerFunction(){
    let name = "Babbar";
    function innerFunction(){
        console.log(name);
       }
       return innerFunction;
}
let inner = outerFunction(); 
//ek asia case jaha p two function nested hai and we call inner function and inner function jis value p depand h voh value memory se free kr di gyi hai to phir kya hoga
inner();