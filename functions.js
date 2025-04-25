function getRandomColor() {
    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let randomnumber = Math.floor(Math.random() * 16);
        color = color + hex[randomnumber];
    }


    return color;
}


function darker(rgb, shadefactor) {
    const factor = shadefactor;
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const match = rgb.match(regex);

    if (match) {

        let r = parseInt(match[1]);
        let g = parseInt(match[2]);
        let b = parseInt(match[3]);

        const darken = (color) => Math.max(0, color - color * factor);

        r = darken(r);
        g = darken(g);
        b = darken(b);

        return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }
}



function creategrid(gridsize) {

    let boxSize = Math.floor(800 / gridsize);

    gridsize = gridsize * 1.1;

    for (let i = 0; i < gridsize; i++) {
        const boxhz = document.createElement('div');
        boxhz.textContent = "";
        boxhz.classList.add('boxhz');
        container.appendChild(boxhz);


        for (let j = 0; j < gridsize; j++) {
            const boxver = document.createElement('div');
            boxver.textContent = "";
            boxhz.appendChild(boxver);
            boxver.classList.add('box');


            boxver.style.width = `${boxSize}px`;
            boxver.style.height = `${boxSize}px`;


            boxver.addEventListener('mousemove', () => {

                if (isMouseDown) {
                    boxver.classList.add('active');
                    let currentColor = window.getComputedStyle(boxver).backgroundColor;



                    if (currentColor === 'rgb(255, 255, 255)') {

                        boxver.style.backgroundColor = getRandomColor()
                    }

                    else {
                        let darkercolor = darker(currentColor, 0.1);
                        boxver.style.backgroundColor = darkercolor;
                    }

                }



            });
        }
    }

}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);  // Remove all child elements from container
    }
}