let tab = document.getElementsByClassName('tab');
let tabActive = document.getElementsByClassName('tab_active');
let tabContent = document.getElementsByClassName('tab__content');

tab.item(0).addEventListener(  
  "click",    
  () => { 
    tab.item(0).classList.toggle ('tab_active', true);
    tab.item(1).classList.toggle ('tab_active', false);
    tab.item(2).classList.toggle ('tab_active', false);
    tabContent.item(0).classList.toggle ('tab__content_active', true);
    tabContent.item(1).classList.toggle ('tab__content_active', false);
    tabContent.item(2).classList.toggle ('tab__content_active', false);
  }  
)

tab.item(1).addEventListener(
  "click",
  () => { 
    tab.item(0).classList.toggle ('tab_active', false);
    tab.item(1).classList.toggle ('tab_active', true);
    tab.item(2).classList.toggle ('tab_active', false);
    tabContent.item(0).classList.toggle ('tab__content_active', false);
    tabContent.item(1).classList.toggle ('tab__content_active', true);
    tabContent.item(2).classList.toggle ('tab__content_active', false);
  }  
)

tab.item(2).addEventListener(
  "click",
  () => { 
    tab.item(0).classList.toggle ('tab_active', false);
    tab.item(1).classList.toggle ('tab_active', false);
    tab.item(2).classList.toggle ('tab_active', true);
    tabContent.item(0).classList.toggle ('tab__content_active', false);
    tabContent.item(1).classList.toggle ('tab__content_active', false);
    tabContent.item(2).classList.toggle ('tab__content_active', true);
  }  
)
