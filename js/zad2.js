var sentences = [
    { text: "Energia kinetyczna to energia ruchu. Przyśpieszenie jest zmianą _______ w czasie.", answer: "prędkości" },
    { text: "Prawo powszechnego ciążenia opisuje siłę przyciągania między dwoma _______.", answer: "masami" },
    { text: "Moc jest miarą szybkości wykonywanej _______.", answer: "pracy" },
    { text: "W termodynamice pierwszego prawo mówi o zachowaniu energii, a drugie o kierunku zmiany _______.", answer: "entropii" },
    { text: "Impuls to iloczyn siły i czasu działania, a pęd to iloczyn _______.", answer: "siły i czasu" }
];

function displaySentences() {
    var sentenceElement = document.getElementById("sentence");
    sentences.forEach(function(sentence) {
        var p = document.createElement("p");
        p.innerHTML = sentence.text.replace("_______", "<input type='text' class='answer-input'>");
        sentenceElement.appendChild(p);
    });
}

displaySentences();

function checkAnswer() {
    var userAnswers = document.querySelectorAll(".answer-input");
    var resultDisplay = document.getElementById("result");
    var allCorrect = true;

    userAnswers.forEach(function(input, index) {
        var userInput = input.value.toLowerCase();
        var correctAnswer = sentences[index].answer.toLowerCase();
        if (userInput !== correctAnswer) {
        allCorrect = false;
        input.classList.add("incorrect");
        } else {
        input.classList.add("correct");
        }
    });
}

function reset() { window.location.href = "zad2.html"; }
function returnToIndex() { window.location.href = "index.html"; }
function refEx(ex) { window.location.href = ex; }