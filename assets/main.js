
var audioClick = new Audio();
audioClick.src = 'assets/audio/click.mp3';
var audioSuGiu = new Audio();
audioSuGiu.src = 'assets/audio/audio-su-giu.mp3';
var audioApri = new Audio();
audioApri.src = 'assets/audio/apri.mp3';


console.log(audioClick.src);


let sliderGame = document.querySelector('#slider');
let bottSx = document.querySelector('#bott-sx');
let bottDx = document.querySelector('#bott-dx');

let immagini = document.querySelector('.img-slid');

// var windowWidth = window.innerWidth;
// var windowHeight = window.innerHeight;

// if(windowWidth > 601) {
//     bottDx.addEventListener('click', function() {
//         sliderGame.scrollBy({top:0, left: 348, behavior:'smooth'});
       
//     })
//     bottSx.addEventListener('click', function() {
//         sliderGame.scrollBy({top:0, left: -348, behavior:'smooth'});
//     })
    
// } else {
//     bottDx.addEventListener('click', function() {
//         sliderGame.scrollBy({top:0, left: 278, behavior:'smooth'});
       
//     })
//     bottSx.addEventListener('click', function() {
//         sliderGame.scrollBy({top:0, left: -278, behavior:'smooth'});
//     })
// }




// const para1 = document.getElementById("para1");

  
// animate(para1);

  
// function animate(element) {
//     let elementWidth = element.offsetWidth;
//     let parentWidth = element.parentElement.offsetWidth;
//     let flag = 0;
  
//     setInterval(() => {
//         element.style.marginLeft = --flag + "px";
  
//         if (elementWidth == -flag) {
//             flag = parentWidth;
//         }
//     }, 30);
// }


immagini.style.visibility= 'hidden';


let schermataNuova = document.querySelector('.schermata-nuova'); // il contenitore DIV che conterrà le pagine
let bloccaNavSchermata = document.querySelector('#blocco-nav-schermata');  //la prima schermata  (quella del menu)


let startBasso = document.querySelector('#start-basso');
let startAlto = document.querySelector('#start-alto');
let offAlto = document.querySelector('#off-alto');
let luce = document.querySelector('#luce');
let testoOnOff = document.querySelector('#testo-on-off');

let manaGif = document.querySelector('#mana-gif');
let testoIniz = document.querySelector('#testo-iniz');





startBasso.addEventListener('click',function(){
    audioApri.play();
        immagini.removeAttribute('style');
    
    startAlto.classList.add('attivo');
    offAlto.classList.remove('attivo');
    luce.classList.remove('luce-rosse');
    luce.classList.add('luce-verde');
    testoOnOff.textContent = 'ON';
    manaGif.classList.remove('abs-ombra-off');
    testoIniz.style.display = 'none';
})

startAlto.addEventListener('click',function(){
    audioApri.play();
        immagini.removeAttribute('style');
    
    startAlto.classList.add('attivo');
    offAlto.classList.remove('attivo');
    luce.classList.remove('luce-rosse');
    luce.classList.add('luce-verde');
    testoOnOff.textContent = 'ON';
    manaGif.classList.remove('abs-ombra-off');
    testoIniz.style.display = 'none';
})

offAlto.addEventListener('click', function(){
    audioApri.play();
        immagini.style.visibility= 'hidden';
    
    startAlto.classList.remove('attivo');
    offAlto.classList.add('attivo');
    luce.classList.remove('luce-verde');
    luce.classList.add('luce-rosse');
    testoOnOff.textContent = 'OFF';
    manaGif.classList.add('abs-ombra-off');
    testoIniz.removeAttribute('style');
})

let tastoFrecciaGiu = document.querySelector('#tasto-freccia-giu');
let tastoFrecciaSu = document.querySelector('#tasto-freccia-su');
let vociMenu = document.querySelectorAll('.navigatore li');


vociMenu[0].classList.add('select');






let indice = 0;


tastoFrecciaGiu.addEventListener('click', function () {

    audioSuGiu.play();
    
    if (indice < vociMenu.length -1 ) {
        for (let i = 0; i < vociMenu.length; i++) {
            vociMenu[i].classList.remove('select');
        }
        vociMenu[indice + 1].classList.add('select');
        indice++;
    }
})




tastoFrecciaSu.addEventListener('click', function () {
    audioSuGiu.play();
    if (indice >= 1) {
        for (let i = 0; i < vociMenu.length; i++) {
            vociMenu[i].classList.remove('select');
        }
        vociMenu[indice - 1].classList.add('select');
    }
    if (indice > 0) {
        indice--;
    }
})

let tastoRossoA = document.querySelector('#tasto-rosso-a');
let tastoRossoB = document.querySelector('#tasto-rosso-b');



let paginaAbout = document.querySelector('#about-us');
let contatti = document.querySelector('#contatti');
let servizi = document.querySelector('#servizi');
let portfolio = document.querySelector('#portfolio');
let toBack = document.querySelector('#to-back');


paginaAbout.style.display = 'none';
contatti.style.display = 'none';
servizi.style.display = 'none';
portfolio.style.display = 'none';
toBack.style.display = 'none';




    tastoRossoA.addEventListener('click', function(){
        for(let i = 0; i < vociMenu.length; i++) {
         if(vociMenu[i].className == 'select') {
             console.log(vociMenu[i].getAttribute('name'));
             if(vociMenu[i].getAttribute('name') == 'about-us') {
                 paginaAbout.removeAttribute('style');               //mostro la pagina
                } else if(vociMenu[i].getAttribute('name') == 'contact') {
                 contatti.removeAttribute('style');                //mostro la pagina
                } else if(vociMenu[i].getAttribute('name') == 'services') {
                 servizi.removeAttribute('style');                 //mostro la pagina
                } else if(vociMenu[i].getAttribute('name') == 'portfolio') {
                 portfolio.removeAttribute('style');                //mostro la pagina
                }
             break;
         }
        }
        toBack.removeAttribute('style');
        bloccaNavSchermata.style.display = 'none'; //NASCONDO la prima schermata  (quella del menu)
        audioClick.play();
     
     })




    





tastoRossoB.addEventListener('click', function(){
    audioClick.play();
    paginaAbout.style.display = 'none';
contatti.style.display = 'none';
servizi.style.display = 'none';
portfolio.style.display = 'none';

bloccaNavSchermata.removeAttribute('style');
toBack.style.display = 'none';
})














 





