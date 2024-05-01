let countWin = document.getElementById('dead');
let countLose = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
   
    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole")) {
            countWin.textContent++;
            if (countWin.textContent >= 10) {
                alert('Вы победили!');
                countWin.textContent = 0;
                countLose.textContent = 0;
            }
        } 
        if (!hole.classList.contains("hole_has-mole")) {
            countLose.textContent++;
            if (countLose.textContent >= 5) {
                alert('Вы проиграли!');
                countWin.textContent = 0;
                countLose.textContent = 0;
            }
        }
    }
}