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
    },

    {
        question: "Can you find the letter F?",
        choices: ["T", "P", "F", "E"],
        correct: "F"
    },

    {
        question: "Can you find the letter G?",
        choices: ["C", "G", "O", "Q"],
        correct: "G"
    },

    {
        question: "Can you find the letter H?",
        choices: ["N", "H", "M", "K"],
        correct: "H"
    },

    {
        question: "Can you find the letter I?",
        choices: ["L", "I", "T", "J"],
        correct: "I"
    },

    {
        question: "Can you find the letter J?",
        choices: ["I", "J", "G", "L"],
        correct: "J"
    },

    {
        question: "Can you find the letter K?",
        choices: ["H", "K", "R", "X"],
        correct: "K"
    },

    {
        question: "Can you find the letter L?",
        choices: ["I", "T", "L", "F"],
        correct: "L"
    },

    {
        question: "Can you find the letter M?",
        choices: ["N", "W", "M", "H"],
        correct: "M"
    },

    {
        question: "Can you find the letter N?",
        choices: ["M", "H", "N", "W"],
        correct: "N"
    },

    {
        question: "Can you find the letter O?",
        choices: ["Q", "C", "O", "D"],
        correct: "O"
    },

    {
        question: "Can you find the letter P?",
        choices: ["B", "P", "R", "D"],
        correct: "P"
    },

    {
        question: "Can you find the letter R?",
        choices: ["P", "B", "R", "K"],
        correct: "R"
    },

    {
        question: "Can you find the letter S?",
        choices: ["C", "S", "Z", "G"],
        correct: "S"
    },

    {
        question: "Can you find the letter T?",
        choices: ["I", "F", "T", "L"],
        correct: "T"
    },

    {
        question: "Can you find the letter Z?",
        choices: ["S", "Z", "N", "X"],
        correct: "Z"
    }
    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches A?",
        choices: ["a", "m", "s", "t"],
        correct: "a"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches B?",
        choices: ["d", "b", "p", "r"],
        correct: "b"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches C?",
        choices: ["o", "g", "c", "q"],
        correct: "c"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches D?",
        choices: ["b", "p", "d", "o"],
        correct: "d"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches E?",
        choices: ["f", "e", "i", "l"],
        correct: "e"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches F?",
        choices: ["t", "p", "f", "e"],
        correct: "f"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches G?",
        choices: ["c", "g", "o", "q"],
        correct: "g"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches H?",
        choices: ["n", "h", "m", "k"],
        correct: "h"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches I?",
        choices: ["l", "i", "t", "j"],
        correct: "i"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches J?",
        choices: ["i", "j", "g", "l"],
        correct: "j"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches K?",
        choices: ["h", "k", "r", "x"],
        correct: "k"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches L?",
        choices: ["i", "t", "l", "f"],
        correct: "l"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches M?",
        choices: ["n", "w", "m", "h"],
        correct: "m"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches N?",
        choices: ["m", "h", "n", "w"],
        correct: "n"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches O?",
        choices: ["q", "c", "o", "d"],
        correct: "o"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches P?",
        choices: ["b", "p", "r", "d"],
        correct: "p"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches R?",
        choices: ["p", "b", "r", "k"],
        correct: "r"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches S?",
        choices: ["c", "s", "z", "g"],
        correct: "s"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches T?",
        choices: ["i", "f", "t", "l"],
        correct: "t"
    },

    {
        skill: "uppercase-lowercase",
        question: "Which lowercase letter matches Z?",
        choices: ["s", "z", "n", "x"],
        correct: "z"
    },
];

// Letter Quest Game

const startLetterQuest =
    document.getElementById("startLetterQuest");

const letterQuestWelcome =
    document.getElementById("letterQuestWelcome");

let currentQuestion = null;

let currentQuestionNumber = 0;

let starsEarned = 0;

let usedQuestionIndexes = [];

const questionsPerQuest = 5;


// Start the quest

startLetterQuest.addEventListener("click", function () {

    currentQuestionNumber = 0;
    starsEarned = 0;
    usedQuestionIndexes = [];

    showNextQuestion();

});


// Show the next question

function showNextQuestion() {

    if (currentQuestionNumber >= questionsPerQuest) {

        showQuestComplete();

        return;
    }


    currentQuestionNumber++;


    let availableQuestionIndexes = [];

letterQuestQuestions.forEach(function (question, index) {

    if (!usedQuestionIndexes.includes(index)) {
        availableQuestionIndexes.push(index);
    }

});


const randomPosition = Math.floor(
    Math.random() * availableQuestionIndexes.length
);

const randomIndex =
    availableQuestionIndexes[randomPosition];


usedQuestionIndexes.push(randomIndex);


currentQuestion =
    letterQuestQuestions[randomIndex];

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

                <p class="question-counter">
                    Question ${currentQuestionNumber} of ${questionsPerQuest}
                </p>

                <p class="star-counter">
                    ⭐ ${starsEarned}
                </p>

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


            if (
                selectedAnswer ===
                currentQuestion.correct
            ) {

                starsEarned++;


                answerMessage.textContent =
                    "🎉 Great job! ⭐";


                answerMessage.className =
                    "answer-message correct";


                letterChoices.forEach(function (choiceButton) {

                    choiceButton.disabled = true;

                });


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
function showQuestComplete() {

    letterQuestWelcome.innerHTML = `
        <div class="quest-scroll">

            <div class="scroll-content">

                <h1>🎉 Quest Complete! 🎉</h1>

                <p>
                    You did it!
                </p>

                <p class="final-stars">
                    ⭐ ⭐ ⭐ ⭐ ⭐
                </p>

                <p>
                    You earned ${starsEarned} Learning Stars!
                </p>

                <div class="quest-complete-buttons">

                    <button
                        class="start-quest-button"
                        id="playAgainButton"
                    >
                        🔄 PLAY AGAIN
                    </button>

                    <button
                        class="castle-return-button"
                        id="returnToCastleButton"
                    >
                        🏰 RETURN TO CASTLE
                    </button>

                </div>

            </div>

        </div>
    `;


    // Find the new buttons

    const playAgainButton =
        document.getElementById("playAgainButton");

    const returnToCastleButton =
        document.getElementById("returnToCastleButton");


    // Play Again

    playAgainButton.addEventListener("click", function () {

    currentQuestionNumber = 0;
    starsEarned = 0;
    usedQuestionIndexes = [];

    showNextQuestion();

});
    returnToCastleButton.addEventListener("click", function () {

        console.log("RETURN TO CASTLE CLICKED!");

        letterQuestScreen.style.display = "none";
        castleScreen.style.display = "block";

    });

    returnToCastleButton.addEventListener("click", function () {

        letterQuestScreen.style.display = "none";
        castleScreen.style.display = "block";

    });

}
