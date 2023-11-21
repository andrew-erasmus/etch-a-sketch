//Determine dimensions
let slider = document.getElementById("pixel-dimensions");
let output = document.getElementById("dimensions");

let pixelDimensions = slider.value;
output.innerHTML = slider.value + ' x ' + slider.value; // Display the default slider value

// Create the sketch squares
const container = document.getElementById('sketch-container');
const computedStyles = window.getComputedStyle(container);
const height = computedStyles.getPropertyValue('height');
const width = computedStyles.getPropertyValue('width');
const numericHeight = parseFloat(height);
const numericWidth = parseFloat(width);
let squareH = numericHeight / pixelDimensions;
let squareW = numericWidth / pixelDimensions;
//Color of paint
let currentColor = 'black';
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener("input", watchColorPicker, false);
colorPicker.addEventListener("change", watchColorPicker, false);
//Dragging functionality
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
loadCanvas();


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    pixelDimensions=this.value;
    squareH = numericHeight / pixelDimensions;
    squareW = numericWidth / pixelDimensions;
    output.innerHTML = this.value + ' x ' + this.value;
    redrawCanvas(pixelDimensions);
}

function loadCanvas() {
    for (let i = 0; i < pixelDimensions * pixelDimensions; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.id = i;
        square.style.width = squareW + 'px';
        square.style.height = squareH + 'px';

        container.appendChild(square);
        square.addEventListener('dragstart', function (event) {
            // Prevent the default drag-and-drop behavior
            event.preventDefault();
        });
        square.addEventListener('mousedown', drawInColor);
        square.addEventListener('mouseover', drawInColor);



    }
}

function redrawCanvas(pixelDimensions){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        container.removeChild(square);
    });

    for (let i = 0; i < pixelDimensions * pixelDimensions; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.id = i;
        square.style.width = squareW + 'px';
        square.style.height = squareH + 'px';

        container.appendChild(square);
        square.addEventListener('dragstart', function (event) {
            // Prevent the default drag-and-drop behavior
            event.preventDefault();
        });
        square.addEventListener('mousedown', drawInColor);
        square.addEventListener('mouseover', drawInColor);
    }

}

//Color picker changer
function watchColorPicker(e) {
    currentColor = e.target.value;
}

//Changes their color when dragged over
function drawInColor(e) {

    if (e.type === 'mouseover' && mouseDown === true) {
        e.target.style.backgroundColor = currentColor;
    }
}

//Eraser functionality
function useColor() {
    currentColor = colorPicker.value;
}

//Eraser functionality
function eraseButton() {
    currentColor = 'white';
}

// Clears the canvas when button clicked
function clearCanvas() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}
