//code 1 add 100 paragraph on ui.

const t1 = performance.now()
for(let i=0;i<=100;i++){
    let para = document.createElement('p');//Creates a new <p> tag in memory
    para.textContent = "This is para" +i; 
    document.body.appendChild(para);//Appends the paragraph inside <body>So it becomes visible on the UI
}
const t2 = performance.now()
console.log("total time by code 1: "+(t2-t1));

//this code1 take 0.5 sec......



//code 2


const t3 = performance.now()
let mydiv  =document.createElement('div');


for(let i=1;i<=100;i++){

 let para = document.createElement('p');

    para.textContent = "This is para" +i; 
    mydiv.appendChild(para);
   

}
 document.body.appendChild(para);
 const t4 = performance.now()
 console.log("total time by code 2: "+(t4-t3));

 //this code take 0.09 sec. code2 is faster but why??

 


 