const container = document.querySelector('.container');

let gridsize = 16;



for (let i = 0; i < gridsize; i++) {
    const boxhz = document.createElement('div');
    boxhz.textContent = "9";
    container.appendChild(boxhz);
    boxhz.classList.add('boxcolumn');

    for (let j = 0; j < gridsize; j++) {
        const boxver = document.createElement('div');
        boxver.textContent = "";
        boxhz.appendChild(boxver);
        boxver.classList.add('box');
    }
}











/*
const slider = document.getElementById('mySlider');
const output = document.getElementById('sliderValue');



let gridsize = 16;
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