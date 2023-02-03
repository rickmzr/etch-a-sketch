const gridSizeBtn = document.querySelector("#gridSizeBtn");
const container = document.querySelector("#container");
let gridSize = 0;

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

function getGridSize() {
    container.replaceChildren();
    gridSize = Number(prompt("Enter number of squares per side (max 100)"));    
}

function getNewGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let row = 1; row <= gridSize; row++) {
        for (let column = 1; column <= gridSize; column++) {
            const divSquare = document.createElement("div");
            divSquare.setAttribute("min-width", "10px");
            divSquare.setAttribute("min-height", "10px");
            divSquare.setAttribute("grid-column", `${column}`);
            divSquare.setAttribute("grid-row", `${row}`);
            container.appendChild(divSquare);
        }
    }
    let squares = container.childNodes;
    squares.forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        });
        square.addEventListener("mouseout", function() {
            square.style.backgroundColor = "white";
        })
    });
}

gridSizeBtn.addEventListener("click", function() {
    getGridSize();
    if (gridSize > 100 || gridSize < 1) {
        alert("Invalid input, enter a number between 1 and 100");
        return;
    };
    getNewGrid();
});

