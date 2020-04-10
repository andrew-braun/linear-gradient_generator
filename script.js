// Set self-executing function to contain variables
// Uncomment below to re-enable
// (function mainScope() {

/* Import modules */
let Color = require('color');

// SET UP GRADIENT

// Target color input color picker variables
let color1Input = document.querySelector("#color-1");
let color2Input = document.querySelector("#color-2");
// Target color input text field variables
let color1TextInput = document.querySelector("#color-1-text");
let color2TextInput = document.querySelector("#color-2-text");


// Target degree box direction variable
let directionDegreeInput = document.querySelector("#direction-degrees")
// Get value from input
let directionDegree = directionDegreeInput.value;

//Function using color module to generate objects containing hex, rgb, and hsl color codes
// based on current input value
const generateColorCodes = () => {
    // Object holding manipulable color objects created with the color module
    let constructorColors = {
        color1: Color(color1Input.value),
        color2: Color(color2Input.value)
    }

    // Object holding string hex outputs of the values in constructorColors
    let hexColors = {
        color1: constructorColors.color1.hex(),
        color2: constructorColors.color2.hex(),
    }
    
    // Object holding string RGB outputs of the values in constructorColors
    let rgbColors = {
        color1: constructorColors.color1.rgb().round().string(),
        color2: constructorColors.color2.rgb().round().string()
    }

    // Object holding string HSL outputs of the values in constructorColors
    let hslColors = {
        color1: constructorColors.color1.hsl().round().string(),
        color2: constructorColors.color2.hsl().round().string()
    }
    return { constructorColors, hexColors, rgbColors, hslColors };
}

//CHANGE ELEMENT COLORS

// Function to generate CSS gradient code text
const generateGradientCSS = (colorCodes) => {
    // Get current input colors in each color code format
    let gradientCSS = {
        hex: `linear-gradient(${directionDegree}deg, ${colorCodes.hexColors.color1}, ${colorCodes.hexColors.color2})`,
        rgb: `linear-gradient(${directionDegree}deg, ${colorCodes.rgbColors.color1}, ${colorCodes.rgbColors.color2})`,
        hsl: `linear-gradient(${directionDegree}deg, ${colorCodes.hslColors.color1}, ${colorCodes.hslColors.color2})`
    }
    return(gradientCSS)
}

// Target document body
const body = document.querySelector("body");
//CSS code in text boxes (targets span element)
const cssText = document.querySelectorAll(".gradient-css span");
//Code container for cssText (targets code element)
const codeBox = document.querySelectorAll("code");
//Select all labels, headings, buttons, paragraphs, and inputs
const labels = document.querySelectorAll("label");
const h1s = document.querySelectorAll("h1");
const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");

// Main element color change function
const changeColor = (colorCodes, gradientCSS) => {

    color1 = colorCodes.constructorColors.color1;
    color2 = colorCodes.constructorColors.color2;

    //Change body background to current gradient
    body.style.backgroundImage = gradientCSS.hex;

    //Change gradient of CSS code text output
    for (line of cssText) {
        line.style.backgroundImage = `linear-gradient(${directionDegree + 30}deg, ${color1}, ${color2})`;
    }

    //Change code text box borders

    for (box of codeBox) {
        box.style.borderImage = `linear-gradient(${directionDegree}deg, ${color2}, ${color1}) 1 / 1 / 0 stretch`;
    }

    if (color1.isDark() && color2.isDark()) {
        for (line of cssText) {
            line.style.backgroundImage = `linear-gradient(${directionDegree + 30}deg, ${color1.negate()}, ${color2.negate()})`;
            }
        for (label of labels) {
            label.style.color = "whitesmoke";
            }
        for (button of buttons) {
            button.style.color = "whitesmoke";
            }
        for (h1 of h1s) {
            h1.style.color = "whitesmoke";
            }
        for (input of inputs) {
            input.style.color = "whitesmoke";
            }
        } 
    else if (color1.isDark() && color2.isLight()) {
        for (line of cssText) {
            line.style.backgroundImage = `linear-gradient(${directionDegree + 30}deg, ${color1.negate()}, ${color2})`;
        }
        for (label of labels) {
            label.style.color = "whitesmoke";
        }
        for (button of buttons) {
            button.style.color = "whitesmoke";
        }
        for (h1 of h1s) {
            h1.style.color = "whitesmoke";
        }
        for (input of inputs) {
            input.style.color = "whitesmoke";
        }
    } else if (color1.isLight() && color2.isDark()) {
        for (line of cssText) {
            line.style.backgroundImage = `linear-gradient(${directionDegree + 30}deg, ${color1}, ${color2.negate()})`;
        }
        for (label of labels) {
            label.style.color = "whitesmoke";
        }
        for (button of buttons) {
            button.style.color = "whitesmoke";
        }
        for (h1 of h1s) {
            h1.style.color = "whitesmoke";
        }
        for (input of inputs) {
            input.style.color = "whitesmoke";
        }
    } else if (color1.isLight() && color2.isLight()) {
        for (line of cssText) {
            line.style.backgroundImage = `linear-gradient(${directionDegree + 30}deg, ${color1}, ${color2})`;
        }
        for (label of labels) {
            label.style.color = "darkslategray";
        }
        for (button of buttons) {
            button.style.color = "darkslategray";
        }
        for (h1 of h1s) {
            h1.style.color = "darkslategray";
        }
        for (input of inputs) {
            input.style.color = "darkslategray";
        }
    }
}

//Target span elements containing CSS code output text
let hslaOutput = document.querySelector("#hsla-value");
let rgbaOutput = document.querySelector("#rgba-value");
let hexOutput = document.querySelector("#hex-value");

const changeCSSOutput = (gradientCSS) => {
    hslaOutput.textContent = gradientCSS.hsl;
    rgbaOutput.textContent = gradientCSS.rgb;
    hexOutput.textContent = gradientCSS.hex;
}

// Function that updates the color data and uses it is as input to call the DOM change functions
const masterChange = () => {
    let colorCodes = generateColorCodes();
    let gradientCSS = generateGradientCSS(colorCodes);

    changeCSSOutput(gradientCSS);

    changeColor(colorCodes, gradientCSS);
}

color1Input.addEventListener("input", masterChange);
color2Input.addEventListener("input", masterChange);

//READ INPUT FROM TEXT BOXES
    /* Fix error that pops up with invalid inputs */
    /* Also sanitize and validate them */
const colorTextInput = () => {
    color1TextToHex = Color(color1TextInput.value).hex();
    color2TextToHex = Color(color2TextInput.value).hex();
    
    color1Input.value = color1TextToHex;
    color2Input.value = color2TextToHex;

    masterChange();
}

color1TextInput.addEventListener("input", colorTextInput);
color2TextInput.addEventListener("change", colorTextInput);

// CHANGE DIRECTION

const buttonHex = document.querySelector("#hex-switch-button");
const buttonRGBA = document.querySelector("#RGBA-switch-button");
const buttonHSLA = document.querySelector("#HSLA-switch-button");


/* Declare gradient direction selectors, targeting buttons and degree input box */
const buttonTop = document.querySelector("#button-top");
const buttonRight = document.querySelector("#button-right");
const buttonBottom = document.querySelector("#button-bottom");
const buttonLeft = document.querySelector("#button-left");
const degreeBox = document.querySelector("#direction-degrees");

/* Changes gradient direction using buttons and number inputs */
const directionShift = () => {
    if (event.target == buttonTop) {
        directionDegree = 0;
        degreeBox.value = 0;
    }
    else if (event.target == buttonRight) {
        directionDegree = 90;
        degreeBox.value = 90;
    }
    else if (event.target == buttonBottom) {
        directionDegree = 180;
        degreeBox.value = 180;
    }
    else if (event.target == buttonLeft) {
        directionDegree = 270;
        degreeBox.value = 270;
    }
    else if (event.target == degreeBox) {
        directionDegree = degreeBox.value;
    } 
    masterChange()
}

buttonTop.addEventListener("click", directionShift);
buttonRight.addEventListener("click", directionShift);
buttonBottom.addEventListener("click", directionShift);
buttonLeft.addEventListener("click", directionShift);
degreeBox.addEventListener("input", directionShift);

// CONVERT BETWEEN COLOR CODES
const convertColorCodes = () => {
    let colorCodes = generateColorCodes();
    switch (event.target.id) {
        case "hex-switch-button": 
            color1TextInput.value = colorCodes.hexColors.color1;
            color2TextInput.value = colorCodes.hexColors.color2;
            break;
        case "RGBA-switch-button": 
            color1TextInput.value = colorCodes.rgbColors.color1;
            color2TextInput.value = colorCodes.rgbColors.color2;
            break;
        case "HSLA-switch-button": 
            color1TextInput.value = colorCodes.hslColors.color1;
            color2TextInput.value = colorCodes.hslColors.color2;
            break;
    }
}

buttonHex.addEventListener("click", convertColorCodes);
buttonRGBA.addEventListener("click", convertColorCodes);
buttonHSLA.addEventListener("click", convertColorCodes);

masterChange();

//Uncomment below to re-enable scoping
// }
// )();
