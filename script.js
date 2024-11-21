let baseGrid = [
    ['T', 'T', 'W', 'W', 'W', 'W','W','T'],
    ['W', 'W', 'W', ' ', ' ', ' ','W','T'],
    ['W', 'T', ' ', ' ', ' ', ' ','W','T'],
    ['W', 'W', 'W', ' ', ' ', 'T','W','T'],
    ['W', 'T', 'W', 'W', ' ', ' ','W','T'],
    ['W', ' ', 'W', ' ', 'T', ' ','W','W'],
    ['W', ' ', ' ', 'T', ' ', ' ','T','W'],
    ['W', ' ', ' ', ' ', 'T', ' ',' ','W'],
    ['W', 'W', 'W', 'W', 'W', 'W','W','W']
];

let grid = [
    [' ', ' ', 'W', 'W', 'W', 'W','W',' '],
    ['W', 'W', 'W', ' ', ' ', ' ','W',' '],
    ['W', ' ', 'P', 'B', ' ', ' ','W',' '],
    ['W', 'W', 'W', ' ', 'B', ' ','W',' '],
    ['W', ' ', 'W', 'W', 'B', ' ','W',' '],
    ['W', ' ', 'W', ' ', ' ', ' ','W','W'],
    ['W', 'B', ' ', 'BT', 'B', 'B','T','W'],
    ['W', ' ', ' ', ' ', ' ', ' ',' ','W'],
    ['W', 'W', 'W', 'W', 'W', 'W','W','W']
];

// let baseGrid = [
//     ['T','T','T','T','W','W','W','W','W','T','T','T','T','T','T','T','T','T','T','T','T','T'],
//     ['T','T','T','T','W',' ',' ',' ','W','T','T','T','T','T','T','T','T','T','T','T','T','T'],
//     ['T','T','T','T','W',' ',' ',' ','W','T','T','T','T','T','T','T','T','T','T','T','T','T'],
//     ['T','T','W','W','W',' ',' ',' ','W','W','W','T','T','T','T','T','T','T','T','T','T','T'],
//     ['T','T','W',' ',' ',' ',' ',' ',' ',' ','W','T','T','T','T','T','T','T','T','T','T','T'],
//     ['W','W','W',' ','W',' ','W','W','W',' ','W','T','T','T','T','T','W','W','W','W','W','W'],
//     ['W',' ',' ',' ','W',' ','W','W','W',' ','W','W','W','W','W','W','W',' ',' ','T','T','W'],
//     ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','T','T','W'],
//     ['W','W','W',' ','W','W','W','W','W','W',' ','W',' ','W','W','W','W',' ',' ','T','T','W'],
//     ['T','T','W',' ',' ',' ',' ',' ',' ',' ',' ','W','W','W','T','T','W','W','W','W','W','W'],
//     ['T','T','W','W','W','W','W','W','W','W','W','W','T','T','T','T','T','T','T','T','T','T']
// ];

// let grid = [
//     [' ',' ',' ',' ','W','W','W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ','W',' ',' ',' ','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ','W','B',' ',' ','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ','W','W','W',' ',' ','B','W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ','W',' ',' ','B',' ',' ','B',' ','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
//     ['W','W','W',' ','W',' ','W','W','W',' ','W',' ',' ',' ',' ',' ','W','W','W','W','W','W'],
//     ['W',' ',' ',' ','W',' ','W','W','W',' ','W','W','W','W','W','W','W',' ',' ','T','T','W'],
//     ['W',' ','B',' ',' ','B',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','T','T','W'],
//     ['W','W','W',' ','W','W','W','W','W','W',' ','W','P','W','W','W','W',' ',' ','T','T','W'],
//     [' ',' ','W',' ',' ',' ',' ',' ',' ',' ',' ','W','W','W',' ',' ','W','W','W','W','W','W'],
//     [' ',' ','W','W','W','W','W','W','W','W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
// ];

let playerPosition = { x: 2, y: 2};

function renderGrid() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';

    for (let i = 0; i < baseGrid.length; i++) {
        for (let j = 0; j < baseGrid[i].length; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            if (grid[i][j] === 'P') {
                tile.classList.add('player');
            } else if (grid[i][j] === 'BT') {
                tile.classList.add('block_on_target'); 
            } else if (grid[i][j] === 'B') {
                tile.classList.add('box'); 
            } else if (baseGrid[i][j] === 'T') {
                tile.classList.add('target'); 
            } else if (baseGrid[i][j] === ' ') {
                tile.classList.add('grass');
            } else if (baseGrid[i][j] === 'W') {
                tile.classList.add('wall'); 
            }

            gameContainer.appendChild(tile);
        }
    }

    const playerTile = grid[playerPosition.x][playerPosition.y];
    const playerElement = document.querySelector('.player');
    if (playerTile === 'P' && baseGrid[playerPosition.x][playerPosition.y] === 'T') {
        playerElement.style.backgroundImage = "url('./images/player0.png')"; 
    } else {
        playerElement.style.backgroundImage = "url('./images/player1.png')"; 
    }
}

function checkWin() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'B') return false; 
        }
    }
    document.getElementById('status').textContent = 'You Win!';
    return true;
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (baseGrid[newX][newY] === 'W') return; 

    if (grid[newX][newY] === 'B' || grid[newX][newY] === 'BT') {
        const nextX = newX + dx;
        const nextY = newY + dy;

        if (baseGrid[nextX][nextY] === 'W' || grid[nextX][nextY] === 'B' || grid[nextX][nextY] === 'BT') return;

        if (grid[newX][newY] === 'BT') {
            grid[newX][newY] = 'T';
        } else {
            grid[newX][newY] = 'B'; 
        }

        if (baseGrid[nextX][nextY] === 'T') {
            grid[nextX][nextY] = 'BT'; 
        } else {
            grid[nextX][nextY] = 'B';
        }
    }

    const currentTile = grid[playerPosition.x][playerPosition.y];
    grid[playerPosition.x][playerPosition.y] = baseGrid[playerPosition.x][playerPosition.y] === 'T' ? 'T' : ' ';
    grid[newX][newY] = 'P';
    playerPosition = { x: newX, y: newY };

    renderGrid();
    checkWin(); 
}

renderGrid();

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(-1, 0);
            break;
        case 'ArrowDown':
            movePlayer(1, 0);
            break;
        case 'ArrowLeft':
            movePlayer(0, -1);
            break;
        case 'ArrowRight':
            movePlayer(0, 1);
            break;
    }
});
