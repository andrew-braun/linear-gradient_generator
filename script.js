/* HTML element selectors */
    /* Two main linear-gradient colors */
let color1 = document.querySelector("#color-1");
let color2 = document.querySelector("#color-2");

    /* Gradient direction selectors */
const buttonTop = document.querySelector("#button-top");
const buttonRight = document.querySelector("#button-right");
const buttonBottom = document.querySelector("#button-bottom");
const buttonLeft = document.querySelector("#button-left");
const degreeBox = document.querySelector("#direction-degrees");

    /* Body */
const body = document.querySelector("#body-gradient");

    /* The gradient text code */
const gradientText = document.querySelectorAll(".gradient-css span");
const hslaText = document.querySelector("#hsla-value span");
const rgbaText = document.querySelector("#rgba-value span");
const hexText = document.querySelector("#hex-value span");

    /*  */
const codeBox = document.querySelectorAll("code");

/* Set initial gradient direction */
let gradientDirection = "to right";

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

/* Use buttons to change gradient direction */
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
    else if (event.target == degreeBox) {
        gradientDirection = degreeBox.value + "deg";
        direction = degreeBox.value + "deg";
    }

    gradientShift();
}

/* Change various page element colors */
    /* Background gradient */
const changeBackgroundGradient = (gradientValue) => {
    /* Change page background to current gradient */
    body.style.backgroundImage = gradientValue;    
}

    /* Linear-gradient code text gradient */
const changeCodeGradient = (gradientValue) => {
    /* Change every code text field color to current gradient background */
    for (line of gradientText) {
        line.style.backgroundImage = gradientValue;
    }
}

    /* Linear-gradient code box borders */
const changeCodeBoxBorder = (gradientValue) => {
    /* Change border of codeboxes to current gradient */
    for (box of codeBox) {
        box.style.borderImage = `linear-gradient(to left, ${color1.value}, ${color2.value}) 1 / 1 / 0 stretch`;
    }
}
    /* Change actual words of code to current gradient */
const changeCodeText = (gradientValue) => {
    /* Change text inside codeboxes to current gradient */
    hslaText.textContent = gradientValue;
    rgbaText.textContent = `linear-gradient(${hexToRGBA(color1.value)}, ${hexToRGBA(color2.value)})`;
    hexText.textContent = gradientValue;
    
}


/* Convert between color codes */
    /* Hex colors */
const hexColor1 = color1.value
const hexColor2 = color2.value

    /* hex to rgb */
const hexToRGBA = (hex) => {
    let r = 0, g = 0, b = 0, a = 0;

    hex = hex.replace("#", "");

    if (hex.length == 3) {
        r = "0x" + hex[0] + hex[0];
        g = "0x" + hex[1] + hex[1];
        b = "0x" + hex[2] + hex[2]; 
        a = "0x" + "ff";
    }
    else if (hex.length == 4) {
        r = "0x" + hex[0] + hex[0];
        g = "0x" + hex[1] + hex[1];
        b = "0x" + hex[2] + hex[2];
        a = "0x" + hex[3] + hex[3];
    }
    else if (hex.length == 6) {
        r = "0x" + hex[0] + hex[1];
        g = "0x" + hex[2] + hex[3];
        b = "0x" + hex[4] + hex[5];
        a = "0x" + "ff";
    }
    else if (hex.length == 8) {
        r = "0x" + hex[0] + hex[1];
        g = "0x" + hex[2] + hex[3];
        b = "0x" + hex[4] + hex[5];
        a = "0x" + hex[6] + hex[7];
    }

    a = +(a/255).toFixed(3);

    return(`rgba(${+r}, ${+g}, ${+b}, ${a})`);
}

color1.addEventListener("input", gradientShift);
color2.addEventListener("input", gradientShift);
buttonTop.addEventListener("click", directionShift);
buttonRight.addEventListener("click", directionShift);
buttonBottom.addEventListener("click", directionShift);
buttonLeft.addEventListener("click", directionShift);
degreeBox.addEventListener("input", directionShift);