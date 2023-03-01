var app = document.getElementById('outer');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Hello everyone!')
  .pauseFor(2000)
  .deleteChars(9)
  .typeString('<strong>world!</strong>')
  .pauseFor(2000)
  .start();
