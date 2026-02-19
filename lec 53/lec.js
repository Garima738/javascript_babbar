

//best code practice
let fragment  = document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para "+i;
    fragment.appendChild(para);//no reflow no repaint.
}
document.body.appendChild(fragment)//one reflow and one repaint.