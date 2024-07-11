let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

//hasTooltip[0].insertAdjacentHTML('afterEnd',`<div class="tooltip">${hasTooltip[0].title}</div>`);

let tooltip;
//let tooltip = document.getElementsByClassName('tooltip');

hasTooltip.forEach((element, index) => {  
  hasTooltip[index].insertAdjacentHTML('afterEnd',`<div class="tooltip">${hasTooltip[index].title}</div>`);
  
  element.addEventListener(
  "click",  
    (elem) => { 
      elem.preventDefault(); 
      tooltip = document.getElementsByClassName('tooltip');      
      //let a = hasTooltip[index].getBoundingClientRect();
      //tooltip[index].setAttribute('left', a['x'] + a['width'] + 'px');
      //tooltip[index].setAttribute('left', '100px');
      //tooltip[index].setAttribute('padding-left', '100px');
            
      for (let i = 0; i < tooltip.length; i++) { 
        if (element.title === tooltip[i].textContent) {
          tooltip[i].classList.toggle('tooltip_active');
        } else {
          tooltip[i].classList.remove('tooltip_active');          
        }        
      }   

      /*
      if (element.previousElementSibling === elem.tooltip) {
        tooltip.classList.toggle("tooltip_active");
      } else {
        
        hasTooltip[index].parentNode.insertBefore(tooltip, hasTooltip[index]);
        tooltip.textContent = hasTooltip[index].title;
      }*/      
  });
});
