document.getElementById('submit-btn').addEventListener('click', function() {
    var statements = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            statements.push(checkbox.id);
        }
    });

    var correctAnswers = ['statement1', 'statement3', 'statement5'];
    var correctCount = 0;
    statements.forEach(function(statement) {
        if (correctAnswers.includes(statement)) {
            correctCount++;
        } else { if(correctCount > 0) { correctCount-- }}
    });

    var resultText = "Twój wynik: " + correctCount + "/" + correctAnswers.length;
    alert(resultText);
});
function reset() { window.location.href = "zad3.html"; }
function returnToIndex() { window.location.href = "index.html"; }
function refEx(ex) { window.location.href = ex; }