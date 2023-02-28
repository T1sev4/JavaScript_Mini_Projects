let buttons = document.querySelectorAll('.button');
let information = document.querySelectorAll('.information');
console.log(buttons);
console.log(information);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    changeActiveBtn(i);
    changeActiveInfo(i);
  });
}

function changeActiveBtn(index) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == index) {
      buttons[i].classList.add('active-btn');
    } else {
      buttons[i].classList.remove('active-btn');
    }
  }
}

function changeActiveInfo(index) {
  for (let i = 0; i < information.length; i++) {
    if (i == index) {
      information[i].classList.add('active-info');
    } else {
      information[i].classList.remove('active-info');
    }
  }
}
