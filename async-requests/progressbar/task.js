let form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
  
  xhr.addEventListener('loadstart', () => {
    progress.value = 0;
    console.log(`start loadstart`);
  });
  
  xhr.addEventListener('load', () => {
    progress.value = 0;
    console.log(`start load`);
  });

  xhr.addEventListener('progress', (e) => {
    progress.value = 0.7;
    //console.log(`${e.type}: ${e.loaded} bytes transferred\n`);     
  });

  xhr.addEventListener('loadend', () => {
    progress.value = 1;
    console.log(`end loadend`);
  });
  
  e.preventDefault();
})