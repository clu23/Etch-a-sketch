let container = document.getElementById("container-grid");
let rows = document.getElementsByClassName("gridRow");
const grid = document.getElementById('container-grid');
let currentMode='classic';


function customGrid(m){
    grid.style.gridTemplateColumns = `repeat(${m}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${m}, 1fr)`
      
    for (let i = 0; i < m*m; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        grid.appendChild(gridElement)
    }
    let cells = document.querySelectorAll('.grid-element');
    cells.forEach(cell => cell.addEventListener('mouseover',(evt) => setCellsColor(evt), false));
}
   

function setCellsColor(e){
    if (currentMode==='classic'){
        e.target.style.backgroundColor = 'black';
    }
    else if (currentMode==='rainbow'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
}

function erase(){
    cells.forEach(cell => cell.style.backgroundColor='white');
}

function changeGridSize(n){
    grid.innerHTML = ''
    customGrid(n);
}

function userInputSize(){
    let n=prompt("Please enter an integer between 1 and 64");
    changeGridSize(n);
}

function classicMode(){
    currentMode='classic';
}

function rainbowMode(){
    currentMode='rainbow';
}

customGrid(32)


document.getElementById('erase-button').addEventListener('click',erase,false);
document.getElementById('change-grid').addEventListener('click',userInputSize,false);
document.getElementById('black-mode').addEventListener('click',classicMode,false);
document.getElementById('color-mode').addEventListener('click',rainbowMode,false);

console.log(document.getElementsByClassName("cell"))
