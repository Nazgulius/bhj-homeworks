let hasTooltip = document.querySelectorAll('.has-tooltip')[0];
let elementHelp = dovument.createElement('<div class="tooltip">Текст подсказки</div');


hasTooltip.addEventListener(
  "click",  
  () => { 
    hasTooltip.appendChild(elementHelp);
    let tooltip = document.querySelector('.tooltip');
    tooltip.classList.toggle('tooltip_active');

  }
)

/*  работает, но добавляет новые элементы бесконечно
hasTooltip.insertAdjacentHTML('beforeEnd','<div class="tooltip">Текст подсказки</div')
let tooltip = document.querySelector('.tooltip');
tooltip.classList.toggle('tooltip_active');

*/