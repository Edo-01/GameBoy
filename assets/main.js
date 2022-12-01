
let sliderGame = document.querySelector('#slider');
let bottSx = document.querySelector('#bott-sx');
let bottDx = document.querySelector('#bott-dx');

let immagini = document.querySelectorAll('.img-slid');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

if(windowWidth > 601) {
    bottDx.addEventListener('click', function() {
        sliderGame.scrollBy({top:0, left: 348, behavior:'smooth'});
       
    })
    bottSx.addEventListener('click', function() {
        sliderGame.scrollBy({top:0, left: -348, behavior:'smooth'});
    })
    
} else {
    bottDx.addEventListener('click', function() {
        sliderGame.scrollBy({top:0, left: 278, behavior:'smooth'});
       
    })
    bottSx.addEventListener('click', function() {
        sliderGame.scrollBy({top:0, left: -278, behavior:'smooth'});
    })
}




const para1 = document.getElementById("para1");

  
animate(para1);

  
function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
  
    setInterval(() => {
        element.style.marginLeft = --flag + "px";
  
        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 30);
}

for(let i = 0; i< immagini.length; i++) {
    immagini[i].style.visibility= 'hidden';
}

let startBasso = document.querySelector('#start-basso');
let startAlto = document.querySelector('#start-alto');
let offAlto = document.querySelector('#off-alto');
let luce = document.querySelector('#luce');
let testoOnOff = document.querySelector('#testo-on-off');

let manaGif = document.querySelector('#mana-gif');
let testoIniz = document.querySelector('#testo-iniz');





startBasso.addEventListener('click',function(){
    for(let i = 0; i< immagini.length; i++) {
        immagini[i].removeAttribute('style');
    }
    startAlto.classList.add('attivo');
    offAlto.classList.remove('attivo');
    luce.classList.remove('luce-rosse');
    luce.classList.add('luce-verde');
    testoOnOff.textContent = 'ON';
    manaGif.classList.remove('abs-ombra-off');
    testoIniz.style.display = 'none';
})

startAlto.addEventListener('click',function(){
    for(let i = 0; i< immagini.length; i++) {
        immagini[i].removeAttribute('style');
    }
    startAlto.classList.add('attivo');
    offAlto.classList.remove('attivo');
    luce.classList.remove('luce-rosse');
    luce.classList.add('luce-verde');
    testoOnOff.textContent = 'ON';
    manaGif.classList.remove('abs-ombra-off');
    testoIniz.style.display = 'none';
})

offAlto.addEventListener('click', function(){
    for(let i = 0; i< immagini.length; i++) {
        immagini[i].style.visibility= 'hidden';
    }
    startAlto.classList.remove('attivo');
    offAlto.classList.add('attivo');
    luce.classList.remove('luce-verde');
    luce.classList.add('luce-rosse');
    testoOnOff.textContent = 'OFF';
    manaGif.classList.add('abs-ombra-off');
    testoIniz.removeAttribute('style');
})

