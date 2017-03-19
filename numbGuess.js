/***GLOBAL VARIABLES***/
var initialInput = document.querySelector('.input-field');
var guessBtn = document.querySelector('.guess-btn')
var clearBtn = document.querySelector('.clear-btn');
var topMessage = document.querySelector('.top-message');
var numGuess = document.querySelector('.num-guess');
var bottomMessage = document.querySelector('.bottom-message');
var newMinValue = document.querySelector('.new-min-val');
var newMaxValue = document.querySelector('.new-max-val');
var newRangeBtn = document.querySelector('.new-range-btn');
var resetBtn = document.querySelector('.reset-btn');
var displayGuess = document.querySelector('.display-guess-section');
var randNum = Math.floor(Math.random() * 100 + 1);
var min;
var max;


/***EVENT LISTENERS***/
initialInput.addEventListener('focus', function(e) {
    e.preventDefault();
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    newRangeBtn.disabled = false;
    resetBtn.disabled = false;
});

guessBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var inputValue = parseInt(initialInput.value);
    userGuess(inputValue, randNum);
});


clearBtn.addEventListener('click', function(e) {
    e.preventDefault();
    clearField();
});

newRangeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var newMin = parseInt(newMinValue.value);
    var newMax = parseInt(newMaxValue.value);
    adjustMinMaxRange(newMin, newMax);

});

resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.reload(true);
});


/***FUNCTIONS***/
function clearField() {
    initialInput.value = "";
}

function topMessages(inputValue) {
    topMessage.textContent = "Your last guess was";
    numGuess.textContent = inputValue;
}

function userGuess(inputValue, randNum) {
    min = 0;
    max = 100;

    topMessages(inputValue);

    if (inputValue > randNum) {
        bottomMessage.textContent = "That was too high";
    } else if (inputValue < randNum) {
        bottomMessage.textContent = "That was too low!";
    } else if (inputValue < min || inputValue > max) {
        bottomMessage.textContent = "Please enter a number between 1 and 100";
    } else {
        bottomMessage.textContent = "Boom!";
    }
}

function adjustMinMaxRange(newMin, newMax) {
    min = newMin;
    max = newMax;

    if (initialInput)
}
