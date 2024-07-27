let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

function addAnsver (ansver) {
  pollAnswers.insertAdjacentHTML('beforeEnd',
  `<button class="poll__answer">
    ${ansver}
  </button>`
  )
}

xhr.onload = function() {
  if (xhr.status != 200) {
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
  } else {    
    let data = JSON.parse(xhr.response);

    pollTitle.insertAdjacentHTML('beforeEnd', `${data.data.title}`);    
    for (let key in data.data.answers) {      
      addAnsver(data.data.answers[key]);
    }
  
    document.querySelectorAll('.poll__answer').forEach((element) => { 
      element.addEventListener('click', 
        () => {
          document.getElementById("pop-up").showModal();
      })
    })
  }
};