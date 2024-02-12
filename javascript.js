let container = document.querySelector('.container');
let gridButton = document.querySelector('.grid');
let blackButton = document.querySelector('.black');
let rainbowButton = document.querySelector('.rainbow');
let gridSize = 16;
let toggle = 0;

function buildGrid(size) {
    for (i = 0; i < size; i++) {
        let rowdiv = document.createElement('div');
        rowdiv.classList.add('row');
        for (j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseover', () => {
                if (toggle == 1) { 
                div.setAttribute('style', 'background-color: ' + randomizeColor());
                }
                else {
                div.setAttribute('style', 'background-color: black');
                }
            });
            rowdiv.appendChild(div);
        }
        container.appendChild(rowdiv);
    }   
}

buildGrid(gridSize);

gridButton.addEventListener('click', gridChange);
blackButton.addEventListener('click', () => toggle = 0);
rainbowButton.addEventListener('click', () => toggle = 1);

function gridChange(e) {
    gridSize = gridPrompt();
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      buildGrid(gridSize);
}

function gridPrompt() {
    let n = prompt('Enter grid size, 1-100:')
    if (n > 0 && n < 101 && n % 1 == 0) {
        return n;
    }
    else {
        return gridPrompt();
    }
}

function randomizeColor() {
    function randomize() {return Math.floor(Math.random() * 256);}  
    return 'rgb(' + randomize() + ',' + randomize() + ',' + randomize() + ');';   
}