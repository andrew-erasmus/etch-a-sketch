// Create the sketch squares

let container = document.getElementById('sketch-container');    
var computedStyles = window.getComputedStyle(container);

const height = computedStyles.getPropertyValue('height');
const width = computedStyles.getPropertyValue('width');

var numericHeight = parseFloat(height);
var numericWidth = parseFloat(width);


let squareH = numericHeight/16;
let squareW = numericWidth/16;

for(let i=0; i<256;i++){
    let square = document.createElement('div');
    square.classList.add("square");
    square.style.width = squareW + 'px';
    square.style.height = squareH + 'px';
    container.appendChild(square);
}

