let funBusIMG = document.querySelector(".intro img");

funBusIMG.addEventListener("mouseenter", () => {
  funBusIMG.style.transform = "scale(2)";
  funBusIMG.style.transition = "transform 2s";
});

// MOUSE ENTER EVENT ABOVE

funBusIMG.addEventListener("mouseleave", () => {
  funBusIMG.style.transform = "scale(1)";
  funBusIMG.style.transform = "transform 2s";
});

// MOUSE LEAVE EVENT ABOVE

let buttonFun = document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener('dblclick', () => {
        button.style.transform = "scale(1.2)";
        button.style.transition = "transform 2s";
    });
});

// DOUBLE CLICK EVENT ABOVE

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == '65'){
        alert(`OMG SUCH EVENT WOW`)
    };
};

// KEYDOWN EVENT ABOVE
