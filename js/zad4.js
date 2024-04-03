function reset() { window.location.href = "zad4.html"; }
function returnToIndex() { window.location.href = "index.html"; }
function refEx(ex) { window.location.href = ex; }

var answers = [true, false, true, true];

function checkAnswer(btn, answer, index) {
    let correctAnswer = answers[index];
            
    if (answer === correctAnswer) {
        btn.style.backgroundColor = "#28a745";
        disableOtherButtons(btn.parentElement, btn);
    } else {
        btn.style.backgroundColor = "#E34234";
        disableOtherButtons(btn.parentElement, btn);
    }
}

function disableOtherButtons(container, selectedButton) {
    let buttons = container.querySelectorAll('.answer-button');

    buttons.forEach(button => {
        if (button !== selectedButton) {
                button.disabled = true;
        }
    });
}