const tdNum = document.querySelectorAll("td");
const resetGameButton = document.getElementById("reset_button");
let turn = true;

for (let i=0; i < tdNum.length; i++) {
    tdNum[i].addEventListener("click", function(e) {
        if (turn) {
            e.target.innerHTML = "O"
            turn = false;
        }
        else {
            this.innerHTML = "X"
            turn = true;
        }
    })
}

resetGameButton.addEventListener("click", function() {
    tdNum.forEach(c => c.innerHTML = "");
})