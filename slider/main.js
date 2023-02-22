let images = [
  'img/img1.webp',
  'img/img2.jpeg',
  'img/img3.jpeg',
  'img/img4.webp',
  'img/img5.jpeg',
  'img/img6.webp',
];
console.log(images);
let modalWindow = document.querySelector('.modal-window');
let modalImg = document.querySelector('#modalImg');

// добавление кружочков автоматически в зависимости от кол-во картинок
let modalDots = document.querySelector('.modal-dots');
for (let i = 0; i < images.length; i++) {
  modalDots.innerHTML += `<div class="modal-dot" onclick="changeModalDot(${i})"></div>`;
}
// pictureIndex индекс текущей картинки
let pictureIndex = 0;
function showModalWindow(index) {
  console.log(images[index]);
  modalImg.src = images[index];
  modalWindow.classList.add('active');
  pictureIndex = index;
  changeModalDot(pictureIndex);
}

function closeModalWindow() {
  modalWindow.classList.remove('active');
}
// массив кружочков
let modalDot = document.querySelectorAll('.modal-dot');
console.log(modalDot);
// активный кружочек
function changeModalDot(index) {
  for (let i = 0; i < modalDot.length; i++) {
    if (index == i) {
      modalDot[i].classList.add('active-dot');
    } else {
      modalDot[i].classList.remove('active-dot');
    }
  }
  modalImg.src = images[index];
  pictureIndex = index;
}

function changeImg(number) {
  pictureIndex += number;
  if (pictureIndex >= images.length) {
    pictureIndex = 0;
  } else if (pictureIndex < 0) {
    pictureIndex = images.length - 1;
  }
  modalImg.src = images[pictureIndex];
  changeModalDot(pictureIndex);
}
