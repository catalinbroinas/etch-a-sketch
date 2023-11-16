const eraserButton = document.querySelector('#eraser-grid');
const penButton = document.querySelector('#pen-grid');
const changeGridButton = document.querySelector('#change-grid');
const clearButton = document.querySelector('#clear-grid');
const inputSize = document.querySelector('#input-size');
const penColorInput = document.querySelector('#pen-color');

let penColor = penColorInput.value;

function createGrid(size) 
{
    const grid = document.querySelector('.grid');
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < size; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        grid.appendChild(rows[i]);

        for (let j = 0; j < size; j++)
        {
            cols[j] = document.createElement('div');
            cols[j].classList.add('col');
            rows[i].appendChild(cols[j]);
        }
    }
}

function penEffect(size)
{
    createGrid(size);

    const cells = document.querySelectorAll('.col');
    for(let cell of cells)
    {
        cell.addEventListener('mouseover', () => {
            cell.style.cssText = `background-color: ${penColor};`;
        });
    }
}

function clearGird()
{
    const cells = document.querySelectorAll('.col');
    for(let cell of cells)
    {
        cell.removeAttribute('style');
    }
}

function toolUsed(tool)
{
    const cells = document.querySelectorAll('.col');
    let btnActive = penButton;
    let btnInActive = eraserButton;

    switch(tool)
    {
        case 'pen':
            for(let cell of cells)
            {
            cell.addEventListener('mouseover', () => {
                cell.style.cssText = `background-color: ${penColor};`;
            });
            }
            btnActive = penButton;
            btnInActive = eraserButton;
        break;
        case 'eraser':
            for(let cell of cells)
            {
            cell.addEventListener('mouseover', () => {
                cell.removeAttribute('style');
            });
            }
            btnActive = eraserButton;
            btnInActive = penButton;
        break;
    }

    btnActive.classList.add('active');
    btnInActive.classList.remove('active');
}

function removeGrid(size)
{
    createGrid(size);

    const rows = document.querySelectorAll('.row');
    const grid = document.querySelector('.grid');

    for (let row of rows)
    {
        grid.removeChild(row);
    }
}

function newGrid(size)
{
    size = inputSize.value;

    penButton.classList.add('active');
    eraserButton.classList.remove('active');

    penEffect(parseInt(size));
}

function verifySize()
{
    (inputSize.value > 0 && inputSize.value < 101) 
        ? changeGridButton.removeAttribute('disabled', '') 
        : changeGridButton.setAttribute('disabled', '');
}

window.addEventListener('load', (size) => {
    penEffect(16);
});
changeGridButton.addEventListener('click', (size) => {
    removeGrid(size);
    newGrid();
});
eraserButton.addEventListener('click', () => {
    toolUsed('eraser');
});
penButton.addEventListener('click', () => {
    toolUsed('pen');
});
clearButton.addEventListener('click', () => {
    clearGird();
    toolUsed('pen');
});
inputSize.addEventListener('change', verifySize);
penColorInput.addEventListener('change', (event) => {
    penColor = event.target.value;
    if(eraserButton.classList.contains('active'))
    {
        eraserButton.classList.remove('active');
        penButton.classList.add('active');
        toolUsed('pen'); 
    }
});