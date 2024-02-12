let container = document.querySelector('.container');
let button = document.querySelector('.button');
let gridSize = 16;

function buildGrid(size) {
    for (i = 0; i < size; i++) {
        let rowdiv = document.createElement('div');
        rowdiv.classList.add('row');
        for (j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: black;')
            });
            rowdiv.appendChild(div);
        }
        container.appendChild(rowdiv);
    }   
}

buildGrid(gridSize);

button.addEventListener('click', gridChange);

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
