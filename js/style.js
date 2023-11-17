const eraserButton = document.querySelector('#eraser-grid');
const penButton = document.querySelector('#pen-grid');
const clearButton = document.querySelector('#clear-grid');
const inputSize = document.querySelector('#input-size');
const penColorInput = document.querySelector('#pen-color');
const sizeGirdRange = document.querySelector('#size-grid');
const sizeGridLabel = document.querySelector('#label-size-grid');

let penColor = penColorInput.value;
let sizeGrid = sizeGirdRange.value;

inputSize.value = sizeGrid;
sizeGridLabel.textContent = `${sizeGirdRange.value}x${sizeGirdRange.value}`;

function createGrid(setGridSize) 
{
    const grid = document.querySelector('.grid');
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < setGridSize; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        grid.appendChild(rows[i]);

        for (let j = 0; j < setGridSize; j++)
        {
            cols[j] = document.createElement('div');
            cols[j].classList.add('col');
            rows[i].appendChild(cols[j]);
        }
    }

    penButton.classList.add('active');
    eraserButton.classList.remove('active');
}

function penEffect(setGridSize)
{
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

function removeGrid()
{
    const rows = document.querySelectorAll('.row');
    const grid = document.querySelector('.grid');

    for (let row of rows)
    {
        grid.removeChild(row);
    }
}

function verifySize(inputValue)
{
    return (inputValue > 0 && inputValue < 101) ? true : false;
}

window.addEventListener('load', () => {
    createGrid(sizeGrid);
    penEffect(sizeGrid);
});
sizeGirdRange,addEventListener('change', (event) => {
    sizeGrid = event.target.value;
    if(verifySize(sizeGrid))
    {
        sizeGridLabel.textContent = `${event.target.value}x${event.target.value}`;
        inputSize.value = sizeGrid;
        sizeGirdRange.value = sizeGrid;
        removeGrid();
        createGrid(sizeGrid);
        penEffect(sizeGrid);
        console.log(event.target.value);
    }
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
penColorInput.addEventListener('input', (event) => {
    penColor = event.target.value;
    if(eraserButton.classList.contains('active'))
    {
        eraserButton.classList.remove('active');
        penButton.classList.add('active');
        toolUsed('pen'); 
    }
    console.log(event.target.value);
});