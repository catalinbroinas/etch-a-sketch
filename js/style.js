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

function clearGrid(size)
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
    clearGrid(size);
    newGrid();
});