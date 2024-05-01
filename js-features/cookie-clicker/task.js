let countClick = document.getElementById('clicker__counter'); 
let button = document.getElementById('cookie'); 

button.onclick = function () {
    countClick.textContent++;
    if (countClick.textContent % 2) {
        button.setAttribute("style","width:250px");
    } else {
        button.setAttribute("style","width:200px");
    }
}