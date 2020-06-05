let funBusIMG = document.querySelector(".intro img");

funBusIMG.addEventListener("mouseenter", () => {
  funBusIMG.style.transform = "scale(2)";
  funBusIMG.style.transition = "transform 1s";
});

// MOUSE ENTER EVENT ABOVE

funBusIMG.addEventListener("mouseleave", () => {
  funBusIMG.style.transform = "scale(1)";
  funBusIMG.style.transform = "transform 1s";
});

// MOUSE LEAVE EVENT ABOVE

let buttonFun = document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("dblclick", () => {
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 2s";
  });
});

// DOUBLE CLICK EVENT ABOVE

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "65") {
    alert(`OMG SUCH EVENT WOW`);
  }
}

// KEYDOWN EVENT ABOVE

let cardFlips = document.querySelectorAll(".destination").forEach((card) => {
  card.addEventListener("click", () => {
    event.target.style.transform = "rotate(360deg)";
    event.target.style.transition = "transform 2s";
  });
});

// CLICK EVENT ABOVE

let wheelEvent = document.querySelector(".logo-heading");

wheelEvent.addEventListener("wheel", () => {
  wheelEvent.style.transform = "scale(.5)";
  wheelEvent.style.transition = "transform 2s";
});

// WHEEL EVENT ABOVE

let mouseUp = document.querySelector(".img-fluid.rounded");

mouseUp.addEventListener("mouseup", function () {
  mouseUp.style.transform = "scale(1.5)";
  mouseUp.style.transition = "transform 2s";
});

// MOUSE UP EVENT ABOVE

let mouseMove = document.querySelector(".footer p");

mouseMove.addEventListener("mousemove", () => {
  mouseMove.style.transform = "scale(2.5)";
  mouseMove.style.transition = "transform 2s";
});

// MOUSE MOVE EVENT ABOVE

let mouseOut = document.querySelector(".footer p");

mouseOut.addEventListener("mouseout", () => {
  mouseOut.style.transform = "scale(1)";
  mouseOut.style.transition = "transform 2s";
});

// MOUSE OUT EVENT ABOVE

let bodyEvent = document.querySelector("body");

bodyEvent.addEventListener("contextmenu", () => {
  bodyEvent.style.backgroundColor = "aquamarine";
});

// CONTEXT MENU "RIGHT CLICK" EVENT ABOVE

let navItems = document.querySelectorAll("a").forEach((nav) => {
  nav.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// PREVENT DEFAULT ABOVE
