const tdNum = document.querySelectorAll("td");
const resetGameButton = document.getElementById("reset_button");
const winCombination = [
    "012","345","678","036","147","258","048","246"
]
let turn = true;

for (let i=0; i < tdNum.length; i++) {
    tdNum[i].addEventListener("click", function(e) {
        if (turn) {
            // e.target.innerHTML = "O"
            placeUserMove(e, "O");
            turn = false;
        }
        else {
            // this.innerHTML = "X"
            placeUserMove(e, "X");
            turn = true;
        }
    })
}


function placeUserMove(e, turn) {
    if (e.target.innerHTML) {
        alert("You cannot play there. Please pick another spot")
    }
    else {
        e.target.innerHTML = turn;
        winCheck(winCombination)
    }
}

function winCheck(winCombination) {
    
    for (let i=0; i < winCombination.length; i++) {
        let coord1 = document.getElementById(+(winCombination[i][0]));
        let coord2 = document.getElementById(+(winCombination[i][1]));
        let coord3 = document.getElementById(+(winCombination[i][2]));
        if (coord1.innerText.length && coord2.innerText.length && coord3.innerText.length) {
            if (coord1.innerText == coord2.innerText && coord2.innerText == coord3.innerText) {
                alert("The winner is " + coord1.innerText);
                reset();
            }
        }
    }
}

function reset() {
        tdNum.forEach(c => c.innerHTML = "");
}