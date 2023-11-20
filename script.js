// Create the sketch squares

let container = document.getElementById('sketch-container');  

for(let i=0; i<256;i++){
    let square = document.createElement('div');
    square.classList.add("square");
    container.appendChild(square);

}