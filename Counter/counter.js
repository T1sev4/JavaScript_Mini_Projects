let numbers = document.querySelectorAll('.counter-item');
numbers.forEach((number) => {
  number.innerHTML = '0';
  function changeNumbers() {
    let finalValue = +number.getAttribute('data-num');
    let value = +number.innerHTML;
    let increment = finalValue / 50;
    if (value < finalValue) {
      number.innerHTML = Math.round(value + increment);
      setTimeout(changeNumbers, 50);
    } else {
      number.innerHTML = finalValue;
    }
  }
  changeNumbers();
});
