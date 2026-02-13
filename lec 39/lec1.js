// console.log("Garima");
// console.log(2+3);

/*----------var-----------------*/
// var age = 25; //globally define.
// if(true){
//     console.log(age);
// }

// function solve(){
//     var age = 25;
//     console.log(25);
// }
// console.log(age); //through error as age not define globally it is function scoped.
// solve();


// var x = 10;
// var x = 20; //redeclartion is allowed in var so we generally not prefer var as we face debagging error.


/*-----------let--------------*/

//block scoped { }.
// {
// let a = 10;
// }
// console.log(a); //through error as we can't access it outside the block.

// {
// let a = 10;
// console.log(a);
// } //execute succesfully.


// let a = 10;
// let a =10; //thrugh error as we can'tr declare it again.

//reassignment is possible but redefination is not possible.

// let a = 10; //dynamically type language we can assign multiple and different value like char,boolean.
//  a = "garima";  


/*----------const----------*/

// const a=10; //value cannot be change
// a = 10; //this is not possible. through error

//----unfefine----
// let marks ;

// console.log(marks);


/*---------------typeof-----------*/
// let marks = 234485343435398438746634875642309472984;
// console.log(marks);

// marks = false;
// console.log(typeof(marks));  //typeof tell datatype;



//---------increment decrement---------
// let a = 10;
// console.log(++a);
//  let b= 10;
//  console.log(b++);

//  let c=10;
//  console.log(--c);

//  let d=10;
//  console.log(d--);


 //---------******----strictly equality-------

//  console.log('5'===5);  ///return false it check both data type and value.
//  console.log(6=='6'); //return true as it check only value


 //-------ternary operator-------

//  let age = 25;
//  let status1 = (age>18) ? 'Can vote':'cannot vote';
//  console.log(status1);


//------------working with non-boolean--------

// console.log(false && 'Garima'); //return false
// console.log(false||'garima'); //return garima as flase or truth return truth ;

// short circuitng;

// console.log(false||7||9||18); //return 7 as 7 is truth value and it stop after finding truth 

//--------bitwise operator--------

//console.log(2&5); //return 0-----as binary of 2--010 and 5-----101 so result 2.5---->0

// console.log(~(0 )); //return -1 note in notebook;


//------***------switch expression-------****-------

// for(let i=1;i<=6;i++){
//     if(i==3){
       
//         continue;
//     }
//     console.log(i);

// }


//---------******------STRING----*****---------

//let firstname="Garima";
//let first="Garima
//mogha"  //through error to executwe this we use back tick function ` `
//  let lastname=`garima
//  rajput
//  learn`;
//  console.log(firstname);
//  console.log(lastname);


//------*****-------concatination--------

// let op1= "Garima";
// let op2="mogha";
// console.log(op1+op2); //normal


//using backtick

// let op1= `Garima`;
// let op2=`mogha`;

// let final = `${op1}${op2}`;
// console.log(final);

