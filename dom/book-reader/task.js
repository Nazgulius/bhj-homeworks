let fontSize = document.querySelectorAll('.font-size');
let bookContent = document.querySelector('.book__content');

fontSize[0].addEventListener("click", () => {  
  fontSize[0].classList.toggle('font-size_active');
  bookContent.classList.add('book_fs-small');
  bookContent.classList.remove('book_fs-big');
  fontSize[1].classList.remove('font-size_active');
  fontSize[2].classList.remove('font-size_active');
})

fontSize[1].addEventListener("click", () => {
  fontSize[1].classList.add('font-size_active');
  bookContent.classList.remove('book_fs-small');
  bookContent.classList.remove('book_fs-big');
  fontSize[0].classList.remove('font-size_active');
  fontSize[2].classList.remove('font-size_active');
})

fontSize[2].addEventListener("click", () => {
  fontSize[2].classList.add('font-size_active');
  bookContent.classList.add('book_fs-big');
  bookContent.classList.remove('book_fs-small');
  fontSize[1].classList.remove('font-size_active');
  fontSize[0].classList.remove('font-size_active');
})