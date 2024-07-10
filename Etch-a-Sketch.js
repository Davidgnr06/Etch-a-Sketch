// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const newGridBtn = document.getElementById('new-grid-btn');
 


    function createGrid(size) {
        container.innerHTML = ''; 
        const squareSize = 960 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = getRandomColor();
            });
            square.addEventListener('mouseout', () => {
                square.style.backgroundColor = '#00eeff';
            });


            container.appendChild(square);


        }
    }
     function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    newGridBtn.addEventListener('click', () => {
        let size = parseInt(prompt('Enter the number of squares per side (maximum 100):'), 10);

        if (isNaN(size) || size < 1 || size > 100) {
            alert('Please enter a valid number between 1 and 100.');
        } else {
            createGrid(size);
        }
    });

    
    createGrid(2);
});
