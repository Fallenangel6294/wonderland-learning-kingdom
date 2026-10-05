// Wonderland Learning Kingdom

const kingdomScreen = document.getElementById("kingdomScreen");
const castleScreen = document.getElementById("castleScreen");

const storybookCastle = document.getElementById("storybookCastle");
const backToKingdom = document.getElementById("backToKingdom");

const letterQuestScreen = document.getElementById("letterQuestScreen");

const letterQuestButton = document.getElementById("letterQuestButton");
const backToThroneRoom = document.getElementById("backToThroneRoom");
// Enter Storybook Castle
storybookCastle.addEventListener("click", function () {
    kingdomScreen.style.display = "none";
    castleScreen.style.display = "block";
});

// Return to Wonderland map
backToKingdom.addEventListener("click", function () {
    castleScreen.style.display = "none";
    kingdomScreen.style.display = "block";
});
// Enter Letter Quest
letterQuestButton.addEventListener("click", function () {
    castleScreen.style.display = "none";
    letterQuestScreen.style.display = "block";
});

// Return to Throne Room
backToThroneRoom.addEventListener("click", function () {
    letterQuestScreen.style.display = "none";
    castleScreen.style.display = "block";
});
// Letter Quest Question Bank

const letterQuestQuestions = [
    {
        question: "Can you find the letter A?",
        choices: ["A", "M", "S", "T"],
        correct: "A"
    },

    {
        question: "Can you find the letter B?",
        choices: ["D", "B", "P", "R"],
        correct: "B"
    },

    {
        question: "Can you find the letter C?",
        choices: ["O", "G", "C", "Q"],
        correct: "C"
    },

    {
        question: "Can you find the letter D?",
        choices: ["B", "P", "D", "O"],
        correct: "D"
    },

    {
        question: "Can you find the letter E?",
        choices: ["F", "E", "I", "L"],
        correct: "E"
    }
];


// Letter Quest Game

const startLetterQuest = document.getElementById("startLetterQuest");
const letterQuestWelcome = document.getElementById("letterQuestWelcome");

let currentQuestion = null;


// Start the quest

startLetterQuest.addEventListener("click", function () {

    showNextQuestion();

});


// Show a question

function showNextQuestion() {

    const randomIndex = Math.floor(
        Math.random() * letterQuestQuestions.length
    );

    currentQuestion = letterQuestQuestions[randomIndex];

    let choicesHTML = "";

    currentQuestion.choices.forEach(function (choice) {

        choicesHTML += `
            <button
                class="letter-choice"
                data-answer="${choice}"
            >
                ${choice}
            </button>
        `;

    });


    letterQuestWelcome.innerHTML = `
        <div class="quest-scroll">

            <div class="scroll-content">

                <h1>🔤 Letter Quest</h1>

                <p>
                    ${currentQuestion.question}
                </p>

                <div class="letter-choices">
                    ${choicesHTML}
                </div>

                <p
                    class="answer-message"
                    id="answerMessage"
                ></p>

            </div>

        </div>
    `;


    const letterChoices =
        document.querySelectorAll(".letter-choice");

    const answerMessage =
        document.getElementById("answerMessage");


    letterChoices.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedAnswer =
                button.dataset.answer;


            if (selectedAnswer === currentQuestion.correct) {

                answerMessage.textContent =
                    "🎉 Great job! ⭐";

                answerMessage.className =
                    "answer-message correct";


                setTimeout(function () {

                    showNextQuestion();

                }, 1000);


            } else {

                answerMessage.textContent =
                    "🐰 Try again! You can do it!";

                answerMessage.className =
                    "answer-message try-again";

            }

        });

    });

}
console.log("Letter Quest Start button connected!");
