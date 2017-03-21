/***GLOBAL VARIABLES***/
var initialInput = document.querySelector('.input-field');
var guessBtn = document.querySelector('.guess-btn')
var clearBtn = document.querySelector('.clear-btn');
var newMinMaxInput = document.querySelector('.new-min-max-fields');
var submitNewRangeBtn = document.querySelector('.submit-new-range-btn');
var resetBtn = document.querySelector('.reset-btn');
var bottomMessage = document.querySelector('.bottom-message');
var newMinValue = document.querySelector('.new-min-val');
var newMaxValue = document.querySelector('.new-max-val');
var min = min || 0;
var max = max || 100;
var randNum;

/***EVENT LISTENERS***/
initialInput.addEventListener('focus', function(e) {
    e.preventDefault();
    guessBtn.disabled = false;
    clearBtn.disabled = false;
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

newMinMaxInput.addEventListener('focus', function(e) {
    e.preventDefault();
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    submitNewRangeBtn.disabled = false;
    resetBtn.disabled = false;
});

submitNewRangeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    min = parseInt(newMinValue.value);
    max = parseInt(newMaxValue.value);
    randNumCalc();
    outPutDisplay(min, max);
});

resetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.reload(true);
});


/***FUNCTIONS***/
function clearField() {
    initialInput.value = "";
}

function randNumCalc() {
    randNum = Math.floor(Math.random() * (max - min) + min);
    console.log(max, min, randNum);
}
randNumCalc();

function topMessages(inputValue) {
    var topMessage = document.querySelector('.top-message');
    topMessage.textContent = "Your last guess was";
    var numGuess = document.querySelector('.num-guess');
    numGuess.textContent = inputValue;
}

function outPutDisplay(inputValue, randNum) {
    if (isNaN(inputValue)) {
        bottomMessage.textContent = "Please enter a number"
    } else if (inputValue < min || inputValue > max) {
        bottomMessage.textContent = "Enter a number between "  + min + " and " + max;
    } else if (inputValue < randNum) {
        bottomMessage.textContent = "That was too low!";
    } else if (inputValue > randNum) {
        bottomMessage.textContent = "That was too high";
    } else if (inputValue === randNum) {
        max = max + 10;
        min = min -10;
        randNumCalc();
        bottomMessage.textContent = "Boom!";
    }
}

function userGuess(inputValue, randNum) {
    topMessages(inputValue);
    outPutDisplay(inputValue, randNum)
}
