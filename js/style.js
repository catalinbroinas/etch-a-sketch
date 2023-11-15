const eraser = document.querySelector('#eraser-grid');
const pen = document.querySelector('#pen-grid');
const changeGrid = document.querySelector('#change-grid');
const clear = document.querySelector('#clear-grid');
const inputSize = document.querySelector('#input-size');
const colorPen = document.querySelector('#color-pen');
const colorPen2 = document.querySelector('#color-pen2');

let bgCol = '#64B5F6';

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
            cell.style.cssText = `background-color: ${bgCol};`;
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

function eraserGrid(tool)
{
    const cells = document.querySelectorAll('.col');
    let btnActive = pen;
    let btnInActive = eraser;

    switch(tool)
    {
        case 'pen':
            for(let cell of cells)
            {
            cell.addEventListener('mouseover', () => {
                cell.style.cssText = `background-color: ${bgCol};`;
            });
            }
            btnActive = pen;
            btnInActive = eraser;
        break;
        case 'eraser':
            for(let cell of cells)
            {
            cell.addEventListener('mouseover', () => {
                cell.removeAttribute('style');
            });
            }
            btnActive = eraser;
            btnInActive = pen;
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

    pen.classList.add('active');
    eraser.classList.remove('active');

    penEffect(parseInt(size));
}

function verifySize()
{
    if(inputSize.value > 0 && inputSize.value < 101)
    {
        changeGrid.removeAttribute('disabled', '');
    }
    else
    {
        changeGrid.setAttribute('disabled', '');
    }
}

window.addEventListener('load', (size) => {
    penEffect(16);
});
changeGrid.addEventListener('click', (size) => {
    removeGrid(size);
    newGrid();
});
eraser.addEventListener('click', () => {
    eraserGrid('eraser');
});
pen.addEventListener('click', () => {
    eraserGrid('pen');
});
clear.addEventListener('click', () => {
    clearGird();
    eraserGrid('pen');
});
inputSize.addEventListener('change', verifySize);
colorPen.addEventListener('click', () => {
    bgCol = '#CC0000';
});
colorPen2.addEventListener('click', () => {
    bgCol = 'blue';
});