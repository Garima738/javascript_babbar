//---*****----class-----****----

// class Human{
//     //properties

//     age =13; //public
//     #wt = 180; //by using # we make anyone private so we access it only in the bolck/class where we declare it.
//     ht = 180;



//     constructor(newAge,newheight,newWeight){ //constructor
//         this.age  =newAge;
//         this.ht = newheight;
//         this.#wt = newWeight; //private ko call getter ki help se karege

//     }
//     walking(){
//         console.log("I am walking",this.#wt); //we can access private fubction using this keyword
//     }
//     running(){
//         console.log("I am running")
//     }

//     get fetchWeight(){//Getter is used to read private value and use getter setter to fetch private value.
//         return this.#wt;
//     }
//     set modifyWeight(val){//Setter is used to change private value.
//         this.#wt = val;
//     }



// }
// let obj = new Human(50,190,101);
// //console.log(obj.#wt); //we cannot access it outside the block as wt is private.

// console.log(obj.ht); //print new value of height as we creaste construtor and pass value on it
// console.log(obj.fetchWeight);//private vaue call by getter function.
// obj.walking();





//------********----Default paratmeter-----*****-----

// function sayName(myName="Garima"){ //jb tk m sayName() m value pass nhi karugi tb tk toh maine jo rund bracket pass ki h voh print hogi. agar maine sayName() m value passkr di toh voh hi print hogi.
//     console.log("My name is:",myName);
// }
// sayName("Mahi");


// function sayName(fname,lname){
//     console.log("My name is :",fname," ",lname);

// }
// sayName("Garima","Mogha") //thias print garima mogha




// function sayName(fname="Mayank",lname){
//     console.log("My name is :",fname," ",lname);

// }
// sayName("Mogha") //this print mogha and undefined as m not passing any value in function calling time and also not pass parameter.



// function sayName(fname,lname="Rajput"){
//     console.log("My name is :",fname," ",lname);

// }
// sayName("Garima") //this print Garima rajput because maine bhle hi function calling m ekl value pass ki ho but maine parameter m value de di ki uski value kya hogi agar m function calling k timew na pass karu toh.




// function sayName(fname="udaay",lname = fname.toUpperCase()){ //yeh upper case m conver krne k liye.
//     console.log("My name is :",fname," ",lname);

// }
// sayName("Garima");


// function solve(value= {age:15,wt:90,ht:190}){//defaul5 parameter m object bhi daal skte
//     console.log("hello jee",value);
// }
// solve()




// function solve(value= "Garima"){//defaul5 parameter m object bhi daal skte
//     console.log("hello jee",value);
// }
// solve(null) //null pass krne p null print hoga alue null storekr lega.




// function solve(value= "Garima"){//defaul5 parameter m object bhi daal skte
//     console.log("hello jee",value);
// }
// solve(undefined) //undefined pass krne p valyue k andar jo pass karoge voh hi print hoga




//we can also use function in default parameter.
// function getage(){
//     return 190;

// }
// function age(name = "Garima", age = getage()){
//     console.log(name," ",age)
// }
// age()