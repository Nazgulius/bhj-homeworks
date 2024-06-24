var isInViewport = function(element){
  const viewportHeight = window.innerHeight;
  const top = element.getBoundingClientRect().top;
  const bottom = element.getBoundingClientRect().bottom;

  if (top > 0 && bottom < viewportHeight) {
    return true; 
  }
  
  return false;
};

const revAll = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
  for (let i = 0; i < revAll.length; i++) {
    if (isInViewport(revAll[i])) {
      revAll[i].classList.add('reveal_active');
    }    
  }
});
