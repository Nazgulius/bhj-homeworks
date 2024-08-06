const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.getElementsByClassName('modal__close');

modalClose[0].addEventListener('click', (e) => {
  subscribeModal.classList.remove('modal_active');
})
