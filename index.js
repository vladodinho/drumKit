let buttons = document.querySelectorAll('.drum');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  })
}

document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case 'w':
      let audioTom1 = new Audio('sounds/tom-1.mp3');
      audioTom1.play();
      break;

    case 'a':
      let audioTom2 = new Audio('sounds/tom-2.mp3');
      audioTom2.play();
      break;

    case 's':
      let audioTom3 = new Audio('sounds/tom-3.mp3');
      audioTom3.play();
      break;

    case 'd':
      let audioTom4 = new Audio('sounds/tom-4.mp3');
      audioTom4.play();
      break;

    case 'j':
      let audioSnare = new Audio('sounds/snare.mp3');
      audioSnare.play();
      break;

    case 'k':
      let audioCrash = new Audio('sounds/crash.mp3');
      audioCrash.play();
      break;

    case 'l':
      let audioKick = new Audio('sounds/kick-bass.mp3');
      audioKick.play();
      break;
  }
}

function buttonAnimation(currentKey){
  activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed')}
    , 100);
}
