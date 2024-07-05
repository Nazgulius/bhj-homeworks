let hasTooltip = document.querySelectorAll('.has-tooltip');

let aText0 = hasTooltip.item(0).getAttribute('title');
let aText1 = hasTooltip.item(1).getAttribute('title');
let aText2 = hasTooltip.item(2).getAttribute('title');
let aText3 = hasTooltip.item(3).getAttribute('title');
let aText4 = hasTooltip.item(4).getAttribute('title');
let aText5 = hasTooltip.item(5).getAttribute('title');

hasTooltip.item(0).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText0}</div>`);
hasTooltip.item(1).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText1}</div>`);
hasTooltip.item(2).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText2}</div>`);
hasTooltip.item(3).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText3}</div>`);
hasTooltip.item(4).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText4}</div>`);
hasTooltip.item(5).insertAdjacentHTML('beforeEnd',`<div class="tooltip">${aText5}</div>`);

let tooltip = document.querySelectorAll('.tooltip');

tooltip.item(0).setAttribute('data-position','top');
tooltip.item(1).setAttribute('data-position','top');
tooltip.item(2).setAttribute('data-position','top');
tooltip.item(3).setAttribute('data-position','top');
tooltip.item(4).setAttribute('data-position','top');
tooltip.item(5).setAttribute('data-position','top');

hasTooltip.item(0).addEventListener(
  "click",  
  () => {   
    tooltip.item(0).classList.toggle('tooltip_active');  
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 0) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active');  
        } 
      }  
    }    
  }
)

hasTooltip.item(1).addEventListener(
  "click",  
  () => { 
    tooltip.item(1).classList.toggle('tooltip_active');
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 1) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active');  
        } 
      }  
    }    
  }
)
hasTooltip.item(2).addEventListener(
  "click",  
  () => { 
    tooltip.item(2).classList.toggle('tooltip_active');
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 2) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active');  
        } 
      }  
    }    
  }
)
hasTooltip.item(3).addEventListener(
  "click",  
  () => { 
    tooltip.item(3).classList.toggle('tooltip_active');
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 3) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active'); 
        } 
      }  
    }    
  }
)
hasTooltip.item(4).addEventListener(
  "click",  
  () => { 
    tooltip.item(4).classList.toggle('tooltip_active');
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 4) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active');
        } 
      }  
    }    
  }
)
hasTooltip.item(5).addEventListener(
  "click",  
  () => { 
    tooltip.item(5).classList.toggle('tooltip_active');
    for (let i = 0; i < tooltip.length; i++) {
      if (i !== 5) {
        if (tooltip.item(i).classList.contains('tooltip_active')) {
          tooltip.item(i).classList.remove('tooltip_active'); 
        } 
      }  
    }    
  }
)