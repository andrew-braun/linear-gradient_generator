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

//CHANGE ELEMENT COLORS

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

// Function to generate CSS gradients 
const generateGradientCSS = () => {
    // Call color code function to get current input colors in each format
    let colorCodes = generateColorCodes();

    let gradientCSS = {
        hex: `linear-gradient(${directionDegree}deg, ${colorCodes.hexColors.color1}, ${colorCodes.hexColors.color2})`,
        rgb: `linear-gradient(${directionDegree}deg, ${colorCodes.rgbColors.color1}, ${colorCodes.rgbColors.color2})`,
        hsl: `linear-gradient(${directionDegree}deg, ${colorCodes.hslColors.color1}, ${colorCodes.hslColors.color2})`
    }
    return(gradientCSS)
}

// Target document body
let body = document.querySelector("body");

// Main element color change function
const changeColor = () => {
    let gradientCSS = generateGradientCSS();

    body.style.backgroundImage = gradientCSS.hex;
}

color1Input.addEventListener("input", changeColor);
color2Input.addEventListener("input", changeColor);



// color1TextInput.addEventListener("change", changeColor);
// color2TextInput.addEventListener("change", changeColor);


// buttonTop.addEventListener("click", directionShift);
// buttonRight.addEventListener("click", directionShift);
// buttonBottom.addEventListener("click", directionShift);
// buttonLeft.addEventListener("click", directionShift);
// // buttonCycle.addEventListener("click", directionShift);
// degreeBox.addEventListener("input", directionShift);
// buttonHex.addEventListener("click", convertColorText);
// buttonRGBA.addEventListener("click", convertColorText);
// buttonHSLA.addEventListener("click", convertColorText);


//Uncomment below to re-enable scoping
// }
// )();











// const getCurrentSettings = () => {
//     /* Read the color/direction inputs, return an object with:
//         color1 and color2 as hex strings,
//         direction string/number,
//         fully-assembled CSS gradient 
//     */

//     //By default, the color hex values should just be whatever's in the input box
//     let color1Hex = color1Input.value;
//     let color2Hex = color2Input.value;
    
//     /* But if the color is changed in the RGB/HSL format in the input text box,
//         it will have to be converted to hex before it can go into the css code string. */
//     if (event.target == color1TextInput || event.target == color2TextInput) {
//         color1Hex = convertToHex(color1TextInput.value);
//         color2Hex = convertToHex(color1TextInput.value);
//     }

//     let cssGradient = `linear-gradient(${directionDegree}, ${color1Hex}, ${color2Hex})`

//     currentSettings = {
//         color1: color1Hex,
//         color2: color2Hex,
//         direction: directionDegree,
//         gradient: cssGradient
//     }

//     return(currentSettings)
// }




// // MAIN COLOR CHANGE FUNCTION

// const body = document.querySelector("#body-gradient");
// /* CSS code in text boxes (targets span element) */
// const cssText = document.querySelectorAll(".gradient-css span");
// /* Code container for cssText (targets code element) */
// const codeBox = document.querySelectorAll("code");

// const caller = () => {
//     inputs = inputHandler(event.target)

// }

// const changeColors = (gradientDirection, color1Hex, color2Hex) {
    
//     /* String literal with css code containing gradient to use for color changes */
//     let gradientCode = `linear-gradient(${gradientDirection}, ${color1Hex}, ${color2Hex})`;
    
//     /* Change background gradient */
//     body.style.backgroundImage = gradientCode;    

//     /* Change gradient of CSS code text output */
//     for (line of cssText) {
//         line.style.backgroundImage = gradientValue;
//     }

//     /* Change code text box borders */
//     for (box of codeBox) {
//         box.style.borderImage = `linear-gradient(${gradientDirection}, ${colorHex}, ${color2Hex}) 1 / 1 / 0 stretch`;
//     }

//     // Add a bit that changes the text color to be light if the background is dark
// }


// // CHANGE GRADIENT DIRECTION

// /* Declare gradient direction selectors, targeting buttons and degree input box */
// const buttonTop = document.querySelector("#button-top");
// const buttonRight = document.querySelector("#button-right");
// const buttonBottom = document.querySelector("#button-bottom");
// const buttonLeft = document.querySelector("#button-left");
// const buttonCycle = document.querySelector("#button-cycle");
// const degreeBox = document.querySelector("#direction-degrees");
    
// /* Set initial gradient direction */
// let gradientDirection = "to right";

// /* Changes gradient direction using buttons and number inputs */
// const directionShift = () => {
//     if (event.target == buttonTop) {
//         gradientDirection = "to top";
//     }
//     else if (event.target == buttonRight) {
//         gradientDirection = "to right";
//     }
//     else if (event.target == buttonBottom) {
//         gradientDirection = "to bottom";
//     }
//     else if (event.target == buttonLeft) {
//         gradientDirection = "to left";
//     }
//     else if (event.target == degreeBox) {
//         gradientDirection = degreeBox.value + "deg";
//     } 
//     gradientShift();
// }

// // CHANGE ELEMENT COLORS
//     /* Main color/text change function */
// const gradientShift = () => {
//     /* Create variable for current gradient */
//     let currentDirection = gradientDirection;
   
//     let currentGradient = `linear-gradient(${currentDirection}, ${color1.value}, ${color2.value})`;

//     changeBackgroundGradient(currentGradient); // changes the body background
//     changeCodeTextGradient(currentGradient); // changes the color of the CSS code output
//     changeCodeBoxBorder(currentGradient); // changes the border of code CSS code box

//     changeCodeText(currentGradient); // changes the CSS code output

//     changeColorText();
// }



// // CSS CODE TEXT OUTPUT

// /* Declare variables for CSS gradient code output*/
// const hslaText = document.querySelector("#hsla-value span");
// const rgbaText = document.querySelector("#rgba-value span");
// const hexText = document.querySelector("#hex-value span");

// /* Set initial gradient value in codeboxes */
// hslaText.textContent = `linear-gradient(${gradientDirection}, ${hexToHSLA(color1.value)}, ${hexToHSLA(color2.value)})`;
// rgbaText.textContent = `linear-gradient(${gradientDirection}, ${hexToRGBA(color1.value)}, ${hexToRGBA(color2.value)})`;
// hexText.textContent = `linear-gradient(${gradientDirection}, ${color1.value}, ${color2.value})`;

//     /* Change code text to current gradient */
// const changeCodeText = (gradientValue) => {
//     hslaText.textContent = `linear-gradient(${gradientDirection}, ${hexToHSLA(color1.value)}, ${hexToHSLA(color2.value)})`;
//     rgbaText.textContent = `linear-gradient(${gradientDirection}, ${hexToRGBA(color1.value)}, ${hexToRGBA(color2.value)})`;
//     hexText.textContent = gradientValue;
    
// }

// // COLOR CODE INPUT BOXES

// let color1Text = document.querySelector("#color-1-text");
// let color2Text = document.querySelector("#color-2-text");
    
// const changeColorText = () => {
//     color1Text.value = color1.value;
//     color2Text.value = color2.value;
// }

// const inputColorChange = () => {

//     color1.value = color1Text.value;
//     color2.value = color2Text.value;
//     gradientShift();
// }



// // TOGGLE BEWEEN HEX/RGBA/HSLA

// const buttonHex = document.querySelector("#hex-switch-button");
// const buttonRGBA = document.querySelector("#RGBA-switch-button");
// const buttonHSLA = document.querySelector("#HSLA-switch-button");

// const convertColorText = () => {
//     switch (event.target.id) {
//         case "hex-switch-button": 
//             color1Text.value = color1.value;
//             color2Text.value = color2.value;
//             break;
//         case "RGBA-switch-button": 
//             color1Text.value = hexToRGBA(color1.value);
//             color2Text.value = hexToRGBA(color2.value);
//             break;
//         case "HSLA-switch-button": 
//             color1Text.value = hexToHSLA(color1.value);
//             color2Text.value = hexToHSLA(color2.value);
//             break;
//     }
//     console.log(event.target.id);
// }



// /*Custom picker*/
// // Simple example, see optional options for more configuration.
// // from https://github.com/Simonwep/pickr

// /* Event listeners */

// color1.addEventListener("input", gradientShift);
// color2.addEventListener("input", gradientShift);
// buttonTop.addEventListener("click", directionShift);
// buttonRight.addEventListener("click", directionShift);
// buttonBottom.addEventListener("click", directionShift);
// buttonLeft.addEventListener("click", directionShift);
// // buttonCycle.addEventListener("click", directionShift);
// degreeBox.addEventListener("input", directionShift);
// buttonHex.addEventListener("click", convertColorText);
// buttonRGBA.addEventListener("click", convertColorText);
// buttonHSLA.addEventListener("click", convertColorText);
// color1Text.addEventListener("change", inputColorChange);
// color2Text.addEventListener("change", inputColorChange);







// /* experimenting with changing CSS variables */
// potentially an easier way to change the color for every element on the page,
// but less-compatible atm
// let root = document.documentElement;

// const cycle = () => {
//     root.style.setProperty("--color-1", "black");
// }



/* Design 

1. A function that changes the main color values on:
    - Color input change
    - Text input change

2. A function that uses the main color values to:
    - change color elements (body, text,boxes, etc.)
    - Change text/buttons to light color if background is dark, vice versa

3. A function that uses the main color values to: 
    - change the printed CSS code text
    - convert CSS code text to RGBA + HSLA

4. A function that changes the main direction value on:
    - Button input
    - Degree input

1. On input, trigger a function that stores the two colors in variables
    1.1. Color input - easy
    1.2. Text input
        1.2.1. Whenever a change is finished, run a function to check the input
            1.2.1.0. Validate code
                1.2.1.0.1. If it's not a valid color input, abort; don't change variables
            1.2.1.1. Detect hex, HSL/HSLA, RGB/RGBA
            1.2.1.2. Convert to hex for machine
            1.2.1.2. Store the color in the variable 
2. Use those two colors to create a CSS linear gradient that can be used to change elements
3. In the main function, call helper functions using the two colors and linear-gradient as inputs
    3.1. Change element colors
        3.1.1. If background is too dark, switch text and other elements to white
    3.2. Change CSS code
        3.2.1. Output hex, RGBA, and HSLA
    3.

1. 


*/

