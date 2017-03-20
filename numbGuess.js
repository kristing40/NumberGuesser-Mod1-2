/***GLOBAL VARIABLES***/
var initialInput = document.querySelector('.input-field');
var guessBtn = document.querySelector('.guess-btn')
var clearBtn = document.querySelector('.clear-btn');
var numGuess = document.querySelector('.num-guess');
var bottomMessage = document.querySelector('.bottom-message');
var newMinMaxInput = document.querySelector('.new-min-max-fields');
var newMinValue = document.querySelector('.new-min-val');
var newMaxValue = document.querySelector('.new-max-val');
var submitNewRangeBtn = document.querySelector('.submit-new-range-btn');
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
    var topMessage = document.querySelector('.top-message');
    topMessage.textContent = "Your last guess was";
    numGuess.textContent = inputValue;
}

function randNumCalc(inputValue, randNum) {
    min = 0;
    max = 100;

    if (inputValue < min || inputValue > max) {
        bottomMessage.textContent = "Enter a number between 1 and 100";
    } else if (inputValue < randNum) {
        bottomMessage.textContent = "That was too low!";
    } else if (inputValue > randNum) {
        bottomMessage.textContent = "That was too high";
    } else if (inputValue === randNum) {
        bottomMessage.textContent = "Boom!";
    }
}

function userGuess(inputValue, randNum) {
    topMessages(inputValue);
    randNumCalc(inputValue, randNum)

}

function adjustMinMaxRange(newMin, newMax) {
    randNumCalc(newMin, newMax)
}
