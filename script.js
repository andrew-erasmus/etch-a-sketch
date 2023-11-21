// Create the sketch squares

let container = document.getElementById('sketch-container');
var computedStyles = window.getComputedStyle(container);
const height = computedStyles.getPropertyValue('height');
const width = computedStyles.getPropertyValue('width');
var numericHeight = parseFloat(height);
var numericWidth = parseFloat(width);
let squareH = numericHeight / 16;
let squareW = numericWidth / 16;

loadCanvas();

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function loadCanvas() {
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.id = i;
        square.style.width = squareW + 'px';
        square.style.height = squareH + 'px';

        container.appendChild(square);
        square.addEventListener('dragstart', function(event) {
            // Prevent the default drag-and-drop behavior
            event.preventDefault();
        });
        square.addEventListener('mousedown', changeColor);
        square.addEventListener('mouseover', changeColor);
        


    }
}

//Changes their color when dragged over
function changeColor(e) {

    if (e.type === 'mouseover' && mouseDown === true){
    console.log(mouseDown);
    e.target.style.backgroundColor = "black";
    }
}


// Clears the canvas when button clicked
function clearCanvas() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}
