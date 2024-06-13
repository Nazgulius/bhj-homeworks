let tab = document.getElementsByClassName('tab');
let tabActive = document.getElementsByClassName('tab_active');
let tabContent = document.getElementsByClassName('tab__content');


let i = 0;

tab.item(0).addEventListener(  
  "click",    
  () => {      
    console.log(tab.indexOf('tab_active'));
    i = tab.indexOf(tabActive);
    tab.item(i).classList.toggle ('tab_active');
    tabContent.item(i).classList.toggle ('tab__content_active');
    tab.item(0).classList.toggle ('tab_active');
    tabContent.item(0).classList.toggle ('tab__content_active');
  }  
)

tab.item(1).addEventListener(
  "click",
  function () {
    i = tab.indexOf('tab_active');
    tab.item(i).classList.toggle ('tab_active');
    tabContent.item(i).classList.toggle ('tab__content_active');
    tab.item(1).classList.toggle ('tab_active');
    tabContent.item(1).classList.toggle ('tab__content_active');
  }
)

tab.item(2).addEventListener(
  "click",
  () => {
    i = tab.indexOf(tabActive);
        tab.item(i).classList.toggle ('tab_active');
        tabContent.item(i).classList.toggle ('tab__content_active');
    tab.item(2).classList.toggle ('tab_active');
    tabContent.item(2).classList.toggle ('tab__content_active');
  }
)
