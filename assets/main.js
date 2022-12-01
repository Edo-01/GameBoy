
let sliderGame = document.querySelector('#slider');
let bottSx = document.querySelector('#bott-sx');
let bottDx = document.querySelector('#bott-dx');


bottDx.addEventListener('click', function() {
    sliderGame.scrollBy({top:0, left: 350, behavior:'smooth'});
})
bottSx.addEventListener('click', function() {
    sliderGame.scrollBy({top:0, left: -350, behavior:'smooth'});
})


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