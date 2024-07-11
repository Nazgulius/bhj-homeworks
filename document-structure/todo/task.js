let form = document.querySelector('form');
let tasksList = document.getElementById('tasks__list');
let text = document.getElementById('task__input');

form.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();
    if(text.value.trim().length > 0){
      tasksList.insertAdjacentHTML('beforeEnd',
        `<div class="task">
          <div class="task__title">
            ${text.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`); 
      text.value = '';
    }
}) 

tasksList.addEventListener(
  'click', 
  function (e) {
    if(e.target.classList.contains('task__remove')){
      e.target.parentElement.remove();
    }
})
