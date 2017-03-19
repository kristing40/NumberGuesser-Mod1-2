/***GLOBAL VARIABLES***/
var input = document.querySelector('.input-field');
var guessBtn = document.querySelector('.guess-btn')
var clearBtn = document.querySelector('.clear-btn');
var topMessage = document.querySelector('.top-message');
var numGuess = document.querySelector('.num-guess');
var bottomMessage = document.querySelector('.bottom-message');
var resetBtn = document.querySelector('.reset-btn');
var displayGuess = document.querySelector('.display-guess-section')


/***EVENT LISTENERS***/
guessBtn.addEventListener('click', function(e){
  e.preventDefault();
  var inputValue = parseInt(input.value);
  userGuess(inputValue);
});

input.addEventListener('keyup', function(e) {
  e.preventDefault();
  guessBtn.disabled = false;
  clearBtn.disabled = false;
  resetBtn.disabled = false;
});

clearBtn.addEventListener('click', function(e) {
  e.preventDefault();
  clearField();
});

resetBtn.addEventListener('click', function(e) {
  e.preventDefault();
  window.location.reload(true);
});


/***FUNCTIONS***/
function clearField() {
  input.value ="";
}

function userGuess(inputValue) {
  var randNum = Math.floor(Math.random() * 100 + 1);
  var min = 0;
  var max = 100;
  topMessage.textContent = "Your last guess was";
  numGuess.textContent = inputValue;

      if(inputValue > randNum) {
         bottomMessage.textContent = "That was too high";
       }else if (inputValue < randNum) {
         bottomMessage.textContent = "That was too low!";
       }else if (inputValue < min || inputValue > max) {
         bottomMessage.textContent = "Please enter a number between 1 and 100";
       }else {
         bottomMessage.textContent = "Boom!";
       }

      //  switch (inputValue) {
      //    case > randNum:
      //           bottomMessage.textContent = "That was too high";
      //           break;
      //    case < randNum:
      //           bottomMessage.textContent = "That was too low!";
      //           break;
      //    case === randNum:
      //           bottomMessage.textContent = "Boom!";
      //           break;
      //    case > Math.max(100) || < Math.min(0):
      //           bottomMessage.textContent = "Please enter a number between 1 and 100";
      //           break;
      //    default:
      //           bottomMessage.textContent = "Boom!";
      //  }
}
