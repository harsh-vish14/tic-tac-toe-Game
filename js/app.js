// this is winning indexes
const winnerData = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// taking const value of the x and o
const x = 'X'
const o = 'O'

// getting all div which have class name box
var buttons = document.getElementsByClassName("box");
var anyoneWon = false;
// console.log(buttons)

// the current will start by value x
var currentValue = 'X'
// putting eventlisterner the click event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log(currentValue);
        if (buttons[i].innerHTML === '') {
            buttons[i].innerHTML = currentValue
        }
        // checking the any one is winning or not
        winnerData.forEach(data => {
            checkWinning(data, currentValue);
        });

        // if there is no win then checking is Draw
        if (isDraw()) {
            document.getElementById('title').innerHTML = `Let's Play<br><div class="won" style="text-align: center;">Draw</div>`
        }

        // always swapping the currentValue at every click
        currentValue = currentValue === 'X' ? 'O' : 'X';
    })
}

// this is checkwinning function
var checkWinning = (data, currentValue) => {
    if (buttons[data[0]].innerHTML != '' && buttons[data[1]].innerHTML != '' && buttons[data[2]].innerHTML != '' && buttons[data[0]].innerHTML === buttons[data[1]].innerHTML && buttons[data[1]].innerHTML === buttons[data[2]].innerHTML) {
        document.getElementById('title').innerHTML = `Let's Play<br><div class="won" style="text-align: center;">${currentValue} won's game</div>`
        console.log(currentValue + " won's game");
        anyoneWon = true
    }
}

// this is isDraw function
var isDraw = () => {
    var isNull = false
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML == '') {
            isNull = true
        }
    }
    console.log('isnull: ' + isNull);
    if (isNull==false) {
        if (anyoneWon == true) {
            return false
        }
        return true
    }
}

// at clicking the button
var restartGame = () => {
    currentValue = 'X';
    document.getElementById('title').innerHTML = `Let's Play`
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = ''
    }
}