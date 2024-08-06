const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear');
const textArea = localStorage.getItem('textArea'); 

if (textArea) {
  editor.value = textArea;
} 

editor.addEventListener('input', (e) => {
  localStorage.setItem('textArea', e.target.value);
})

clearButton.addEventListener('click', (e) => {
  editor.value = '';
  localStorage.setItem('textArea', '');
})