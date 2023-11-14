const eraser = document.querySelector('#eraser-grid');
const pen = document.querySelector('#pen-grid');

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
            cell.classList.add('pen');
        });
    }
}

function clearGird()
{
    const cells = document.querySelectorAll('.col');
    for(let cell of cells)
    {
        cell.classList.remove('pen');
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
                cell.classList.add('pen');
            });
            }
            btnActive = pen;
            btnInActive = eraser;
        break;
        case 'eraser':
            for(let cell of cells)
            {
            cell.addEventListener('mouseover', () => {
                cell.classList.remove('pen');
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
    const myInput = document.querySelector('#input-size');
    size = myInput.value;

    if(size > 100)
    {
        size = 100;
    }

    penEffect(parseInt(size));
}

window.addEventListener('load', (size) => {
    penEffect(16);
});
const changeGrid = document.querySelector('#change-grid');
changeGrid.addEventListener('click', (size) => {
    removeGrid(size);
    newGrid();
});
const clear = document.querySelector('#clear-grid');
eraser.addEventListener('click', () => {
    eraserGrid('eraser');
});
pen.addEventListener('click', () => {
    eraserGrid('pen');
});
clear.addEventListener('click', clearGird);