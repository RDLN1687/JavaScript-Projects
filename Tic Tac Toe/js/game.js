let activePlayer ="X";
let selectedSquares=[];

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element=> element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === "X") {
            select.style.backgroundImage=("./img1.png");
        } else {
            select.style.backgroundImage= ("./img2.png");
        }
    }

    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();
    if (activePlayer === "X") {
        activePlayer = "O";
    } else {
        activePlayer = "X"
    }

    Audio ('./place.mp3');
if (activePlayer === "O") {
    disableClick();
    setTimeout(function () {computersTurn();}, 1000);
}
return true;


function computersTurn() {
    let success = flase;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random()*9));
        
    if (placeXOrO(pickASquare)) {
        placeXOrO(pickASquare);
        success =true;
    };
    }
}
    function checkWinConditions() {
        if (arrayIncludes ('0X', "1x", "2X")) {drawWinLine(50,100,558,100)}
        else if (arrayIncludes ('3X', "4X", "5X")) {drawWinLine(50,304,558,304)}
        else if (arrayIncludes ('6X', "7X", "8X")) {drawWinLine(50,508,558,508)}
        else if (arrayIncludes ('0X', "3X", "6X")) {drawWinLine(100,50,100,558)}
        else if (arrayIncludes ('1X', "4X", "7X")) {drawWinLine(304,50,304, 558)}
        else if (arrayIncludes ('2X', "5X", "8X")) {drawWinLine(508,50508,558)}
        else if (arrayIncludes ('6X', "4X", "2X")) {drawWinLine(100,508,510,90)}
        else if (arrayIncludes ('0X', "4X", "8X")) {drawWinLine(100,100,520,520)}
        else if (arrayIncludes ('0O', "1O", "2O")) {drawWinLine(50,100,558,100)}
        else if (arrayIncludes ('3O', "4O", "5O")) {drawWinLine(50,304,558,304)}
        else if (arrayIncludes ('6O', "7O", "8O")) {drawWinLine(50,508,558,508)}
        else if (arrayIncludes ('0O', "3O", "6O")) {drawWinLine(100,50,100,558)}
        else if (arrayIncludes ('1O', "4O", "7O")) {drawWinLine(304,50,304, 558)}
        else if (arrayIncludes ('2O', "5O", "8O")) {drawWinLine(508,50508,558)}
        else if (arrayIncludes ('6O', "4O", "2O")) {drawWinLine(100,508,510,90)}
        else if (arrayIncludes ('0O', "4O", "8O")) {drawWinLine(100,100,520,520)}
        else if (selectedSquares.length >=9) {
            Audio('./media/tie.mp3');
            setTimeout (function () {resetGame(); }, 500);
        }

function arrayIncludes (squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a=== true && b === true && c === true ) return true ;}
}

function resetGame() {
    for (let i=0; i<9; i++) {
        let square =document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares =[];
}

function Audio(AudioURL) {
    let Audio = new Audio (AudioURL);
    Audio.play();
}


function drawWinLine (coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById ('win-lines');
    const c = canvas.getContext ('2d');
    let X1 =coordX1,
    Y1 =coordY1,
    X2 =coordX2,
    Y2=coordY2,
    X=X1,
    Y=Y1;
}
}


