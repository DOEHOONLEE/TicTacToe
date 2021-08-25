const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export default class Game {
    constructor(board) {
        this.progress = ["", "", "", "", "", "", "", "", ""];
        this.board = board;
        this.turn = true;
        this.count = 0;
    }

    isPlayable(target) {
        return target.innerText.length ? false : true;
    }
    
    placeStone(target) {
        const cellPos = Number(target.getAttribute('data-id'));
        const turn = this.turn ? "O" : "X";
        target.innerHTML = turn;
        this.turn = !this.turn;
        
        this.progress[cellPos] = turn;
        this.count++;

        setTimeout(() => {
            this.checkWinner();
        }, 100)
    }
    
    checkWinner() {
        if (this.isComplete()) {
            alert("It's draw!");
            this.reset();
        }

        winCombination.forEach(comb => {
            let tester = "";
            comb.forEach(cell => {
                tester += this.progress[cell];
            })
            
            if (tester.length === 3 && tester.split("").every(c => c === tester[0])) {
                alert(`The winner is ${tester[0]}`);
                this.reset();
            }
        })
    }
    
    isComplete() {
        return this.count === 9 ? true : false;
    }
    
    reset() {
        this.board.forEach(cell => cell.innerHTML = "");
        this.progress = ["", "", "", "", "", "", "", "", ""];
        this.count = 0;
    }
}