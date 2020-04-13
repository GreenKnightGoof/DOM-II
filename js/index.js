// Your code goes here
let funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseenter', function(){
    funBus.style.transform = 'scale(1.6)';
    funBus.style.transition = 'transform 3s';
});

///////// MOUSE ENTER /////////////////////

funBus.addEventListener('mouseleave', function(){
    funBus.style.transform = 'scale(1)';
});
/////////// MOUSE LEAVE BUS IMG ////////////////////

let logoFun = document.querySelector('.btn');

logoFun.addEventListener('dblclick', function(){
    logoFun.style.transform = 'scale(.8)';
    logoFun.style.transition = 'transform 5s';
});

/////////// CLICK FIRST SIGN ME UP ////////////////

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == '65'){
        alert(`Yaboi pressed the 'a' key! Wow!`)
    }
}

////////////// KEY DOWN ALERT MESSAGE, PRESS A ///////////////////


// window.addEventListener('load', () => {
//     alert('Ya page is loaded!!!');
//     // event.stopPropagation();
// })

//////////////// LOAD FEATURING STOP PROP //////////

let headerBack = document.querySelectorAll('h4');

headerBack.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.style.transform = "rotate(360deg)";
          event.target.parentElement.parentElement.style.transition = "transform 1s";
    })
  })

////////////// CLICK on h4's ///////////////////////////

let usingWheel = document.querySelector('.logo-heading');

usingWheel.addEventListener('wheel', function(){
    usingWheel.style.transform = 'scale(.5)';
    usingWheel.style.transition = 'transform 2s';
});

////////////// WHEEL ////////////////////////

let mouseUp = document.querySelector('.img-fluid.rounded');

mouseUp.addEventListener('mouseup', function(){
    mouseUp.style.transform = 'scale(1.5)';
    mouseUp.style.transition = 'transform 2s';
});

/////////////////// MOUSE UP ////////////////////////

let keyUp = document.querySelector('.footer p');
    
keyUp.addEventListener('mousemove', function(key){
        keyUp.style.transform = 'scale(2)';
        keyUp.style.transition = 'transform 2s';   
});
    
////////////////// MOUSE MOVE ////////////////////////


let mouseOut = document.querySelector('.footer p');
    
mouseOut.addEventListener('mouseout', function(){
        keyUp.style.transform = 'scale(1)';
        keyUp.style.transition = 'transform 2s';   
});

/////////////// MOUSE OUT ///////////////////////

const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor = 'MediumAquamarine';
})

const contentSection = document.querySelectorAll('.content-section');

contentSection.forEach((element) => {
    element.addEventListener("click", (event) => {
        
        event.stopPropagation();
        event.target.parentElement.parentElement.style.transform = "rotate(360deg)";
        event.target.parentElement.parentElement.style.transition = "transform 1s";
        
    })
  })




// contentSection.addEventListener('click', (event) => {
//     event.stopPropagation();
//     contentSection.style.backgroundColor = 'slategray';
// })
console.log(contentSection);
console.log(body);

////////////// STOP PROPAGATION /////////////////////

let theNav = document.querySelector('nav');

theNav.addEventListener('click', (event) => {
    event.preventDefault();
})

console.log(theNav);

/////////////// PREVENT DEFAULT ON NAV ///////////////