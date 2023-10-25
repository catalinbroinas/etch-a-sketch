function createGrid() {
    const container = document.querySelector('.container');
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < 16; i++)
    {
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        container.appendChild(rows[i]);

        for (let j = 0; j < 16; j++)
        {
            cols[j] = document.createElement('div');
            cols[j].classList.add('col');
            rows[i].appendChild(cols[j]);
        }
    }


}

window.addEventListener('load', createGrid);