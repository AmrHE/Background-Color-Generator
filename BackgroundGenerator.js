var input1 = document.getElementById('color1');
var input2 = document.getElementById('color2');
var CSS = document.querySelector('h3');
var body = document.querySelector('body');

function changeColor(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    CSS.textContent = body.style.background + ";";
}


input1.addEventListener('input', changeColor);

input2.addEventListener('input', changeColor); 
// NO need to call the functions with () as the first parameter{input} will ran them out automatically