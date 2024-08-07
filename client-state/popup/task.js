const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close');

if (document.cookie.includes("state=true")) {
  subscribeModal.classList.remove('modal_active');  
} else {
  modalClose[0].addEventListener('click', (e) => {
    document.cookie = 'state=' + encodeURIComponent('true');
    subscribeModal.classList.remove('modal_active');
  })
}