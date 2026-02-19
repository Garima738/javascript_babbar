// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Babbar";
// fpara.removeEventListener('click', changeText);


// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

//------text-----------
///iska mtlb yeh h agar hum apne text p clcik karege to yeh 
//Ab kya hoga?
// Page open karo
// "Hello Jee" par click karo
// Text change ho jayega → Hello Babbar
// getElementById() → element select karta hai
// addEventListener('click', function) → click par function run hota hai
// textContent → element ka text change karta hai



//fpara.removeEventListener('click', changeText);

//Iska matlab:Jo click event pe changeText function laga tha, usko hata do (remove kar do).


//---------code----------
  function changeText(event){//click ki information.
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Babbar";


}


let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

//console p jake hum check kr skte h event konsa h .


//--------anchor tag ka code---------

let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event){
    event.preventDefault(); 
    // Link open hone se rokta hai

    anchorElement.textContent = "Click done bhai";
});





