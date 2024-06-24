let rotatorCase = document.querySelectorAll('.rotator__case');
let i = 1;
let j = 0;

rotatorCase[0].classList.add('rotator__case_active');

setInterval(() => {
  rotatorCase[i].classList.add('rotator__case_active');
  rotatorCase[j].classList.remove('rotator__case_active');
  i++;
  j++;
  if (i >= rotatorCase.length) {
    i = 0;    
  }
  if (j >= rotatorCase.length) {    
    j = 0;
  }
}, 1000)