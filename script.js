const container = document.querySelector('.container');
const slider = document.getElementById("slider");


const box = document.querySelector('.box');




let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});




let gridsize = 10;

//gridsize = prompt('Enter the grid size:');


gridsize = parseInt(gridsize, 10);
if (isNaN(gridsize) || gridsize <= 0) {
    gridsize = 10;
}


container.style.width = '744px';
container.style.height = '744px';


slider.addEventListener("input", function () {
    console.log(slider.value);
    let x = slider.value;
    clearGrid();
    creategrid(x);
});







document.getElementById('captureBtn').addEventListener('click', function () {

    var div = document.querySelector('.container');


    domtoimage.toBlob(div)
        .then(function (blob) {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'sketch.png';
            link.click();
        })
        .catch(function (error) {
            console.error("Error capturing the div:", error);
        });
});







//------------------IGNORE old code--------------------// 



//creategrid(prompt('Enter'));


/*
const slider = document.getElementById('mySlider');
const output = document.getElementById('sliderValue');



// Update value when slider changes
slider.addEventListener('input', () => {
    output.textContent = slider.value;
    gridsize = slider.value;

});

<div class="slider-container">
        <label for="mySlider">Choose a value:</label>
        <input type="range" id="mySlider" min="16" max="64" value="16">
            <div class="value-display">Gridbox: <span id="sliderValue">16</span></div>
    </div>

*/

