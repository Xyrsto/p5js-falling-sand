
function make2DArray(cols, rows) {
    let arr = new Array(cols)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows)
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0
        }
    }
    return arr
}

let grid;
let w = 5;
let cols, rows;
let hueValue = 200;
function setup() {
    createCanvas(600, 600)
    colorMode(HSB, 360, 255, 255);
    cols = width / w;
    rows = height / w;
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
}

function mouseDragged() {
    let col = floor(mouseX / w)
    let row = floor(mouseY / w)
    grid[col][row] = 1
}

function draw() {
    background(0)

    if (mouseIsPressed) {
        hueValue += 0.5;
        if (hueValue > 360) {
            hueValue = 1;
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            noStroke()
            if (grid[i][j] > 0) {
                fill(hueValue, 255, 255)
                square(i * w, j * w, w)
            }

        }
    }

    let nextGrid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            if (state === 1) {
                let dir = random(1) < 0.5 ? -1 : 1
                let neighborBelow = grid[i][j + 1]
                let neighborBelowA, neighborBelowB
                if (i + dir >= 0 && i + dir <= cols - 1) {
                    neighborBelowA = grid[i + dir][j + 1]
                }
                if (i - dir >= 0 && i - dir <= cols - 1) {
                    neighborBelowB = grid[i - dir][j + 1]
                }

                if (neighborBelow === 0) {
                    nextGrid[i][j + 1] = 1
                } else if (neighborBelowA === 0) {
                    nextGrid[i + dir][j] = 1
                } else if (neighborBelowB === 0) {
                    nextGrid[i - dir][j] = 1
                } else {
                    nextGrid[i][j] = 1
                }
            }
        }
    }
    grid = nextGrid
}