/* HTML element selectors */
let color1 = document.querySelector("#color-1");
let color2 = document.querySelector("#color-2");
const buttonTop = document.querySelector("#button-top");
const buttonRight = document.querySelector("#button-right");
const buttonBottom = document.querySelector("#button-bottom");
const buttonLeft = document.querySelector("#button-left");

const body = document.querySelector("#body-gradient");

const gradientText = document.querySelectorAll(".gradient-css span");
const hslaText = document.querySelector("#hsla-value span");
const rgbaText = document.querySelector("#rgba-value span");
const hexText = document.querySelector("#hex-value span");

const codeBox = document.querySelectorAll("code");

let gradientDirection = "to right";
/* Set initial gradient value in input boxes */

/* Set initial gradient value in codeboxes */
for (line of gradientText) {
    line.textContent = `linear-gradient(${gradientDirection}, ${color1.value}, ${color2.value})`;
}

/* Main function */

const gradientShift = () => {
    /* Create variable for current gradient */
    let currentDirection = gradientDirection;
   
    let currentGradient = `linear-gradient(${currentDirection}, ${color1.value}, ${color2.value})`;

    changeBackgroundGradient(currentGradient);
    changeCodeGradient(currentGradient);
    changeCodeBoxBorder(currentGradient);
    changeCodeText(currentGradient);

}

/* Helper functions */
const directionShift = () => {
    let direction = "";

    if (event.target == buttonTop) {
        gradientDirection = "to top";
        direction = "to top";
    }
    else if (event.target == buttonRight) {
        gradientDirection = "to right";
        direction = "to right";
    }
    else if (event.target == buttonBottom) {
        gradientDirection = "to bottom";
        direction = "to bottom";
    }
    else if (event.target == buttonLeft) {
        gradientDirection = "to left";
        direction = "to left";
    }

    gradientShift();
}

const changeBackgroundGradient = (gradientValue) => {
    /* Change page background to current gradient */
    body.style.backgroundImage = gradientValue;    
}

const changeCodeGradient = (gradientValue) => {
    /* Change every code text field color to current gradient background */
    for (line of gradientText) {
        line.style.backgroundImage = gradientValue;
    }
}

const changeCodeBoxBorder = (gradientValue) => {
    /* Change border of codeboxes to current gradient */
    for (box of codeBox) {
        box.style.borderImage = `linear-gradient(to left, ${color1.value}, ${color2.value}) 1 / 1 / 0 stretch`;
    }
}

const changeCodeText = (gradientValue) => {
    /* Change text inside codeboxes to current gradient */
    hslaText.textContent = gradientValue;
    rgbaText.textContent = gradientValue;
    hexText.textContent = gradientValue;
    
}

color1.addEventListener("input", gradientShift);
color2.addEventListener("input", gradientShift);
buttonTop.addEventListener("click", directionShift);
buttonRight.addEventListener("click", directionShift);
buttonBottom.addEventListener("click", directionShift);
buttonLeft.addEventListener("click", directionShift);