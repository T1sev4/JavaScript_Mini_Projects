let modalWindow = document.querySelector('.modal-window');
let modalImg = document.querySelector('#modalImg');

function showModalWindow(image) {
  modalImg.src = image.src;
  modalWindow.classList.add('active');
}
function closeModalWindow() {
  modalWindow.classList.remove('active');
}
