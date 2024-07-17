let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((element, index) => {  
  hasTooltip[index].insertAdjacentHTML('afterEnd',`<div class="tooltip">${hasTooltip[index].title}</div>`);
  
  element.addEventListener(
  "click",  
    (elem) => {       
      elem.preventDefault(); 
      let tooltip = document.getElementsByClassName('tooltip');      
      let a = hasTooltip[index].getBoundingClientRect(); 
      
      tooltip[index].style.left= a['x'] + 'px';
      tooltip[index].style.top= a['y'] + a['height'] + 'px';
                  
      for (let i = 0; i < tooltip.length; i++) { 
        if (element.title === tooltip[i].textContent) {
          tooltip[i].classList.toggle('tooltip_active');
        } else {
          tooltip[i].classList.remove('tooltip_active');          
        }        
      }   
  });
});
