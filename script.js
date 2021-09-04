const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

let helloDiv = document.getElementsByClassName('hello');

const removeClass = ()=>{
    modal.classList.remove('open');
    overlay.classList.remove('open');
}

open.addEventListener('click',()=>{
    modal.classList.add('open');
    overlay.classList.add('open');
});


close.addEventListener('click',removeClass);

overlay.addEventListener('click',removeClass)


console.log(helloDiv);
helloDiv =Array.from(helloDiv)
helloDiv.forEach(element => {
    console.log(element);
    element.style.color='red'
});