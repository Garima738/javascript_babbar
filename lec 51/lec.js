// let paras = document.querySelectorAll('p');
// for(let i= 0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You have clicked on para: " +(i+1));

//     })
// }
//Detects which paragraph you click and shows its number in an alert box.




//------best practice code------

// console.log("Hi");
// let paras = document.querySelectorAll('p');
// function alertPara(event){
//     alert("You have clicked on para: " +event.target.textContent);
    
// }
// for(let i= 0;i<paras.length;i++){
//     let para = paras[i];
//     console.log("eventListener added");
//     para.addEventListener('click',alertPara)
// }

//-------apply this code on div-------

// function alertPara(event){
//       alert("You have clicked on para: " +event.target.textContent);//target jispe click karege ussi ko show karega
// }
// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click',alertPara)



//----- if we want ki kevel span tag p chle yeh para tag p na chle toh hume if condito m daalan pdega see example------

function alertPara(event){
    if(event.target.nodeName==='SPAN'){
           alert("You have clicked on para: " +event.target.textContent);
    }
     
}
let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertPara)