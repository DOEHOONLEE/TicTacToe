import Game from './game.js';

const tdNum = document.querySelectorAll("td");

const hi = new Game(tdNum);

document.querySelector('table').onclick = (e) => {
    if (hi.isPlayable(e.target)) {
        hi.placeStone(e.target);
    }
    else {
        alert("Not playable. Choose some other cell");
    }
}

document.querySelector('button').onclick = () => {
    hi.reset();
}