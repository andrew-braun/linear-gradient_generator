let css = document.querySelector("h3");
let color1 = document.querySelector("#color-1");
let color2 = document.getElementById("color-2");
let body = document.querySelector("#gradient");
let gradientRGBAText = document.querySelector("#gradient-rgba");

gradientRGBAText.textContent = "linear-gradient(" + color1.value + ", " + color2.value + ");";

function gradientShift() {
    gradientRGBA();
    changeBackgroundGradient();
}

function gradientRGBA() {
    

}

function changeBackgroundGradient() {
    body.style.backgroundImage = 
    "linear-gradient(to right, " 
    + color1.value +", " 
    + color2.value +")";

    gradientRGBAText.textContent = body.style.backgroundImage + ";";
}

color1.addEventListener("input", gradientShift);
color2.addEventListener("input", gradientShift);

gradientRGBA();