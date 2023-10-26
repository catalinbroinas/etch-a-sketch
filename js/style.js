function createGrid() 
{
    const grid = document.querySelector('.grid');
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < 16; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        grid.appendChild(rows[i]);

        for (let j = 0; j < 16; j++)
        {
            cols[j] = document.createElement('div');
            cols[j].classList.add('col');
            rows[i].appendChild(cols[j]);
        }
    }
}

function penEffect()
{
    createGrid();

    const cells = document.querySelectorAll('.col');
    for(let cell of cells)
    {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('pen');
        });
    }
}
window.addEventListener('load', penEffect);