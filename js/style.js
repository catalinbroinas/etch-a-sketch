function createGrid(numRows, numCols) 
{
    const grid = document.querySelector('.grid');
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < numRows; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        grid.appendChild(rows[i]);

        for (let j = 0; j < numCols; j++)
        {
            cols[j] = document.createElement('div');
            cols[j].classList.add('col');
            rows[i].appendChild(cols[j]);
        }
    }
}

function penEffect(numRows, numCols)
{
    createGrid(numRows, numCols);

    const cells = document.querySelectorAll('.col');
    for(let cell of cells)
    {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('pen');
        });
    }
}

function clearGrid(numRows, numCols)
{
    createGrid(numRows, numCols);

    const rows = document.querySelectorAll('.row');
    const grid = document.querySelector('.grid');

    for (let row of rows)
    {
        grid.removeChild(row);
    }
}

function newGrid(numRows, numCols)
{
    numRows = prompt('Enter the number of rows for the new grid. (max 20)');
    numCols = prompt('Enter the number of columns for the new grid. (max 20)');

    if(numRows > 100)
    {
        numRows = 100;
    }
    if(numCols > 100)
    {
        numCols = 100;
    }

    penEffect(parseInt(numRows), parseInt(numCols));
}

window.addEventListener('load', (numRows, numCols) => {
    penEffect(16, 16);
});
const changeGrid = document.querySelector('#change-grid');
changeGrid.addEventListener('click', (numRows, numCols) => {
    clearGrid(numRows, numCols);
    newGrid();
});