const questions = [
    {
        question: "Podaj wzór na prędkość",
        options: ["e = d / v", "v = s / t", "p = e * u", "a² + b² = c²"],
        correctAnswer: 1
    },
    {
        question: "Ile jest zasad dynamiki Newtona?",
        options: ["2", "7", "4", "3"],
        correctAnswer: 3
    },
    {
        question: "Amper to jednostka",
        options: ["Natężenia", "Napięcia", "Rezystancji", "Mocy"],
        correctAnswer: 0
    },
    {
        question: "Jeśli na ciało nie działąją żadne siły to:",
        options: ["Pozostaje ono w spoczynku", "Pozostaje ono w spoczynku lub porusza sie ruchem jednostajnie przyspieszonym", "Spada", "Przemieszcza sie w obrębie własnej osi"],
        correctAnswer: 1
    },
    {
        question: "Co jest najmniejsze",
        options: ["Proton", "Elektron", "Neutron", "Atom"],
        correctAnswer: 3
    },
    {
        question: "Zero absolutne to:",
        options: ["Najnższa z osiągnietych dotąd temperatur", "Najniższa z możliwych temperatur", "Najniższa temperatura zanotowana w kosmosie", "Umowna temperatura ciała w próżni"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.classList.add("btn", "option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedButton = event.target;
    if (selectedIndex === currentQuestion.correctAnswer) {
        selectedButton.style.backgroundColor = "#28a745";
        score++;
    } else { selectedButton.style.backgroundColor = "#dc3545"; }

    optionsContainer.querySelectorAll(".option").forEach(button => { button.disabled = true; });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000); 
    } else { endGame(); }
}

function endGame() {
    const totalQuestions = questions.length;
    const scorePercentage = Math.round((score / totalQuestions) * 100);
    const endScreen = `
        <div class="navbuttons">
            <button class="btn btn-off">← Poprzednie zadanie</button>
            <button id="btn-back" class="btn" onclick="returnToIndex()">Powrot na strone główną</button>
            <button class="btn" onclick="refEx('zad2.html')">Następne zadanie →</button>
        </div>
        <div>
            <h2>Koniec gry!</h2>
            <p>Zdobyłeś ${score} punktów na ${totalQuestions} możliwych (${scorePercentage}%).</p>
            <button class="btn" onclick="playAgain()">Zagraj ponownie</button>
        </div>
    `;
    document.body.innerHTML = endScreen;
}

function playAgain() { window.location.href = "zad1.html"; }
function returnToIndex() { window.location.href = "index.html"; }
function refEx(ex) { window.location.href = ex; }

loadQuestion();
