const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form'); 
const welcome = document.getElementById('welcome'); 
const userId = document.getElementById('user_id'); 

function getJSON(key) {
  try {
    return JSON.parse(key);
  } catch (e) {
    return null;
  }
}

if(localStorage.user_id) {
  userId.innerHTML = localStorage.user_id;
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
}

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();  
  const xhr = new XMLHttpRequest();
  const formData = new FormData(signinForm);
  
  xhr.onload = function() {   
    const res = getJSON(xhr.response);  
    if (res.success) {
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      localStorage.setItem('user_id', res.user_id);
      userId.innerHTML = localStorage.user_id;      
    } else {
      alert(`Неверный логин/пароль`);
      signin.classList.add('signin_active');
      welcome.classList.remove('welcome_active');
    }   
  }
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');  
  xhr.send(formData);
})