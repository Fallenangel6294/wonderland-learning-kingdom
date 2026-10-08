// Wonderland Learning Kingdom


// ================================
// MAIN SCREEN NAVIGATION
// ================================

const kingdomScreen =
    document.getElementById("kingdomScreen");

const castleScreen =
    document.getElementById("castleScreen");

const storybookCastle =
    document.getElementById("storybookCastle");

const backToKingdom =
    document.getElementById("backToKingdom");

const letterQuestScreen =
    document.getElementById("letterQuestScreen");

const letterQuestButton =
    document.getElementById("letterQuestButton");

const backToThroneRoom =
    document.getElementById("backToThroneRoom");

const storyTimeScreen =
    document.getElementById("storyTimeScreen");

const storyTimeButton =
    document.getElementById("storyTimeButton");

const backToThroneRoomFromStoryTime =
    document.getElementById("backToThroneRoomFromStoryTime");

const bunnyMissingMoonButton =
    document.getElementById("bunnyMissingMoonButton");

const bunnyStoryScreen =
    document.getElementById("bunnyStoryScreen");

const backToStoryLibrary =
    document.getElementById("backToStoryLibrary");

const moonHotspot =
    document.getElementById("moonHotspot");

const moonDiscoveryMessage =
    document.getElementById("moonDiscoveryMessage");

const moonContinueButton =
    document.getElementById("moonContinueButton");

const bunnyStoryPage2 =
    document.getElementById("bunnyStoryPage2");

const owlHotspot =
    document.getElementById("owlHotspot");

const owlDiscoveryMessage =
    document.getElementById("owlDiscoveryMessage");

const owlContinueButton =
    document.getElementById("owlContinueButton");

const bunnyStoryPage3 =
    document.getElementById("bunnyStoryPage3");

const mushroomOne =
    document.getElementById("mushroomOne");

// Enter Storybook Castle

storybookCastle.addEventListener("click", function () {

    kingdomScreen.style.display = "none";
    castleScreen.style.display = "block";

});

storyTimeButton.addEventListener("click", function () {
    castleScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});

backToThroneRoomFromStoryTime.addEventListener("click", function () {
    storyTimeScreen.style.display = "none";
    castleScreen.style.display = "block";
});

bunnyMissingMoonButton.addEventListener("click", function () {
    storyTimeScreen.style.display = "none";
    bunnyStoryScreen.style.display = "block";
});

backToStoryLibrary.addEventListener("click", function () {
    bunnyStoryScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});

moonHotspot.addEventListener("click", function () {
    moonDiscoveryMessage.style.display = "block";
});

moonContinueButton.addEventListener("click", function () {
    document.querySelector(".story-page").style.display = "none";
    bunnyStoryPage2.style.display = "block";
});

owlHotspot.addEventListener("click", function () {
    owlDiscoveryMessage.style.display = "block";
});

owlContinueButton.addEventListener("click", function () {
    bunnyStoryPage2.style.display = "none";
    bunnyStoryPage3.style.display = "block";
});

mushroomOne.addEventListener("click", function () {
    mushroomOne.style.display = "none";
});

// Return to Wonderland Map

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


// ================================
// LETTER QUEST QUESTION BANK
// ================================

const letterQuestQuestions = [

    // FIND THE LETTER

    {
        skill: "find-letter",
        question: "Can you find the letter A?",
        choices: ["A", "M", "S", "T"],
        correct: "A"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter B?",
        choices: ["D", "B", "P", "R"],
        correct: "B"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter C?",
        choices: ["O", "G", "C", "Q"],
        correct: "C"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter D?",
        choices: ["B", "P", "D", "O"],
        correct: "D"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter E?",
        choices: ["F", "E", "I", "L"],
        correct: "E"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter F?",
        choices: ["T", "P", "F", "E"],
        correct: "F"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter G?",
        choices: ["C", "G", "O", "Q"],
        correct: "G"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter H?",
        choices: ["N", "H", "M", "K"],
        correct: "H"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter I?",
        choices: ["L", "I", "T", "J"],
        correct: "I"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter J?",
        choices: ["I", "J", "G", "L"],
        correct: "J"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter K?",
        choices: ["H", "K", "R", "X"],
        correct: "K"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter L?",
        choices: ["I", "T", "L", "F"],
        correct: "L"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter M?",
        choices: ["N", "W", "M", "H"],
        correct: "M"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter N?",
        choices: ["M", "H", "N", "W"],
        correct: "N"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter O?",
        choices: ["Q", "C", "O", "D"],
        correct: "O"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter P?",
        choices: ["B", "P", "R", "D"],
        correct: "P"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter R?",
        choices: ["P", "B", "R", "K"],
        correct: "R"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter S?",
        choices: ["C", "S", "Z", "G"],
        correct: "S"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter T?",
        choices: ["I", "F", "T", "L"],
        correct: "T"
    },

    {
        skill: "find-letter",
        question: "Can you find the letter Z?",
        choices: ["S", "Z", "N", "X"],
        correct: "Z"
    },


    // UPPERCASE & LOWERCASE

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

    // LETTER → PICTURE

{
    skill: "letter-picture",
    question: "Which letter does 🐶 DOG begin with?",
    choices: ["D", "B", "M", "S"],
    correct: "D"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐱 CAT begin with?",
    choices: ["C", "T", "B", "L"],
    correct: "C"
},
{
    skill: "letter-picture",
    question: "Which letter does 🍎 APPLE begin with?",
    choices: ["A", "P", "E", "O"],
    correct: "A"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐻 BEAR begin with?",
    choices: ["B", "D", "R", "M"],
    correct: "B"
},
{
    skill: "letter-picture",
    question: "Which letter does ☀️ SUN begin with?",
    choices: ["S", "F", "T", "C"],
    correct: "S"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐟 FISH begin with?",
    choices: ["F", "S", "P", "B"],
    correct: "F"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐰 BUNNY begin with?",
    choices: ["B", "D", "M", "N"],
    correct: "B"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐢 TURTLE begin with?",
    choices: ["T", "C", "B", "D"],
    correct: "T"
},
{
    skill: "letter-picture",
    question: "Which letter does 🦁 LION begin with?",
    choices: ["L", "M", "I", "R"],
    correct: "L"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐘 ELEPHANT begin with?",
    choices: ["E", "L", "F", "A"],
    correct: "E"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐸 FROG begin with?",
    choices: ["F", "G", "R", "B"],
    correct: "F"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐝 BEE begin with?",
    choices: ["B", "D", "P", "E"],
    correct: "B"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐍 SNAKE begin with?",
    choices: ["S", "C", "N", "B"],
    correct: "S"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐒 MONKEY begin with?",
    choices: ["M", "N", "B", "K"],
    correct: "M"
},
{
    skill: "letter-picture",
    question: "Which letter does 🦆 DUCK begin with?",
    choices: ["D", "B", "C", "T"],
    correct: "D"
},
{
    skill: "letter-picture",
    question: "Which letter does 🌙 MOON begin with?",
    choices: ["M", "N", "S", "O"],
    correct: "M"
},
{
    skill: "letter-picture",
    question: "Which letter does 🌸 FLOWER begin with?",
    choices: ["F", "L", "B", "W"],
    correct: "F"
},
{
    skill: "letter-picture",
    question: "Which letter does 🐴 HORSE begin with?",
    choices: ["H", "F", "R", "S"],
    correct: "H"
},
{
    skill: "letter-picture",
    question: "Which letter does 🦄 UNICORN begin with?",
    choices: ["U", "C", "N", "Y"],
    correct: "U"
},
{
    skill: "letter-picture",
    question: "Which letter does 🍌 BANANA begin with?",
    choices: ["B", "A", "N", "C"],
    correct: "B"
},

    // BEGINNING SOUNDS

{
    skill: "beginning-sounds",
    question: "What letter does BALL begin with?",
    choices: ["B", "M", "S", "D"],
    correct: "B"
},
{
    skill: "beginning-sounds",
    question: "What letter does MOON begin with?",
    choices: ["M", "N", "B", "S"],
    correct: "M"
},
{
    skill: "beginning-sounds",
    question: "What letter does SUN begin with?",
    choices: ["S", "F", "T", "C"],
    correct: "S"
},
{
    skill: "beginning-sounds",
    question: "What letter does FISH begin with?",
    choices: ["F", "S", "P", "B"],
    correct: "F"
},
{
    skill: "beginning-sounds",
    question: "What letter does RABBIT begin with?",
    choices: ["R", "B", "L", "D"],
    correct: "R"
},
{
    skill: "beginning-sounds",
    question: "What letter does CAT begin with?",
    choices: ["C", "K", "T", "B"],
    correct: "C"
},
{
    skill: "beginning-sounds",
    question: "What letter does TURTLE begin with?",
    choices: ["T", "C", "D", "B"],
    correct: "T"
},
{
    skill: "beginning-sounds",
    question: "What letter does APPLE begin with?",
    choices: ["A", "P", "E", "O"],
    correct: "A"
},
{
    skill: "beginning-sounds",
    question: "What letter does LION begin with?",
    choices: ["L", "M", "R", "I"],
    correct: "L"
},
{
    skill: "beginning-sounds",
    question: "What letter does ELEPHANT begin with?",
    choices: ["E", "L", "F", "A"],
    correct: "E"
},
{
    skill: "beginning-sounds",
    question: "What letter does FROG begin with?",
    choices: ["F", "G", "R", "B"],
    correct: "F"
},
{
    skill: "beginning-sounds",
    question: "What letter does BEE begin with?",
    choices: ["B", "D", "P", "E"],
    correct: "B"
},
{
    skill: "beginning-sounds",
    question: "What letter does SNAKE begin with?",
    choices: ["S", "C", "N", "B"],
    correct: "S"
},
{
    skill: "beginning-sounds",
    question: "What letter does MONKEY begin with?",
    choices: ["M", "N", "B", "K"],
    correct: "M"
},
{
    skill: "beginning-sounds",
    question: "What letter does DUCK begin with?",
    choices: ["D", "B", "C", "T"],
    correct: "D"
},
{
    skill: "beginning-sounds",
    question: "What letter does MOON begin with?",
    choices: ["M", "N", "S", "O"],
    correct: "M"
},
{
    skill: "beginning-sounds",
    question: "What letter does HORSE begin with?",
    choices: ["H", "F", "R", "S"],
    correct: "H"
},
{
    skill: "beginning-sounds",
    question: "What letter does FOX begin with?",
    choices: ["F", "X", "S", "B"],
    correct: "F"
},
{
    skill: "beginning-sounds",
    question: "What letter does UNICORN begin with?",
    choices: ["U", "C", "N", "Y"],
    correct: "U"
},
{
    skill: "beginning-sounds",
    question: "What letter does BEAR begin with?",
    choices: ["B", "D", "R", "M"],
    correct: "B"
},

    // LETTER MATCHING

{
    skill: "letter-matching",
    question: "Which letter matches A?",
    choices: ["M", "A", "S", "T"],
    correct: "A"
},
{
    skill: "letter-matching",
    question: "Which letter matches B?",
    choices: ["D", "B", "P", "R"],
    correct: "B"
},
{
    skill: "letter-matching",
    question: "Which letter matches C?",
    choices: ["O", "G", "C", "Q"],
    correct: "C"
},
{
    skill: "letter-matching",
    question: "Which letter matches D?",
    choices: ["B", "P", "D", "O"],
    correct: "D"
},
{
    skill: "letter-matching",
    question: "Which letter matches E?",
    choices: ["F", "E", "I", "L"],
    correct: "E"
},
{
    skill: "letter-matching",
    question: "Which letter matches F?",
    choices: ["T", "P", "F", "E"],
    correct: "F"
},
{
    skill: "letter-matching",
    question: "Which letter matches G?",
    choices: ["C", "G", "O", "Q"],
    correct: "G"
},
{
    skill: "letter-matching",
    question: "Which letter matches H?",
    choices: ["N", "H", "M", "K"],
    correct: "H"
},
{
    skill: "letter-matching",
    question: "Which letter matches I?",
    choices: ["L", "I", "T", "J"],
    correct: "I"
},
{
    skill: "letter-matching",
    question: "Which letter matches J?",
    choices: ["I", "J", "G", "L"],
    correct: "J"
},
{
    skill: "letter-matching",
    question: "Which letter matches K?",
    choices: ["H", "K", "R", "X"],
    correct: "K"
},
{
    skill: "letter-matching",
    question: "Which letter matches L?",
    choices: ["I", "T", "L", "F"],
    correct: "L"
},
{
    skill: "letter-matching",
    question: "Which letter matches M?",
    choices: ["N", "W", "M", "H"],
    correct: "M"
},
{
    skill: "letter-matching",
    question: "Which letter matches N?",
    choices: ["M", "H", "N", "W"],
    correct: "N"
},
{
    skill: "letter-matching",
    question: "Which letter matches O?",
    choices: ["Q", "C", "O", "D"],
    correct: "O"
},
{
    skill: "letter-matching",
    question: "Which letter matches P?",
    choices: ["B", "P", "R", "D"],
    correct: "P"
},
{
    skill: "letter-matching",
    question: "Which letter matches R?",
    choices: ["P", "B", "R", "K"],
    correct: "R"
},
{
    skill: "letter-matching",
    question: "Which letter matches S?",
    choices: ["C", "S", "Z", "G"],
    correct: "S"
},
{
    skill: "letter-matching",
    question: "Which letter matches T?",
    choices: ["I", "F", "T", "L"],
    correct: "T"
},
{
    skill: "letter-matching",
    question: "Which letter matches Z?",
    choices: ["S", "Z", "N", "X"],
    correct: "Z"
},

    // LETTER HUNT

{
    skill: "letter-hunt",
    question: "Find all the A's!",
    choices: ["A", "M", "A", "S", "T", "A"],
    correct: ["A", "A", "A"]
},
{
    skill: "letter-hunt",
    question: "Find all the B's!",
    choices: ["D", "B", "P", "B", "R", "B"],
    correct: ["B", "B", "B"]
},
{
    skill: "letter-hunt",
    question: "Find all the C's!",
    choices: ["C", "O", "G", "C", "Q", "C"],
    correct: ["C", "C", "C"]
},
{
    skill: "letter-hunt",
    question: "Find all the D's!",
    choices: ["B", "D", "P", "D", "O", "D"],
    correct: ["D", "D", "D"]
},
{
    skill: "letter-hunt",
    question: "Find all the E's!",
    choices: ["F", "E", "I", "E", "L", "E"],
    correct: ["E", "E", "E"]
},
{
    skill: "letter-hunt",
    question: "Find all the F's!",
    choices: ["F", "T", "P", "F", "E", "F"],
    correct: ["F", "F", "F"]
},
{
    skill: "letter-hunt",
    question: "Find all the G's!",
    choices: ["C", "G", "O", "G", "Q", "G"],
    correct: ["G", "G", "G"]
},
{
    skill: "letter-hunt",
    question: "Find all the H's!",
    choices: ["N", "H", "M", "H", "K", "H"],
    correct: ["H", "H", "H"]
},
{
    skill: "letter-hunt",
    question: "Find all the I's!",
    choices: ["L", "I", "T", "I", "J", "I"],
    correct: ["I", "I", "I"]
},
{
    skill: "letter-hunt",
    question: "Find all the J's!",
    choices: ["I", "J", "G", "J", "L", "J"],
    correct: ["J", "J", "J"]
},
{
    skill: "letter-hunt",
    question: "Find all the K's!",
    choices: ["H", "K", "R", "K", "X", "K"],
    correct: ["K", "K", "K"]
},
{
    skill: "letter-hunt",
    question: "Find all the L's!",
    choices: ["I", "L", "T", "L", "F", "L"],
    correct: ["L", "L", "L"]
},
{
    skill: "letter-hunt",
    question: "Find all the M's!",
    choices: ["N", "M", "W", "M", "H", "M"],
    correct: ["M", "M", "M"]
},
{
    skill: "letter-hunt",
    question: "Find all the N's!",
    choices: ["M", "N", "H", "N", "W", "N"],
    correct: ["N", "N", "N"]
},
{
    skill: "letter-hunt",
    question: "Find all the O's!",
    choices: ["Q", "O", "C", "O", "D", "O"],
    correct: ["O", "O", "O"]
},
{
    skill: "letter-hunt",
    question: "Find all the P's!",
    choices: ["B", "P", "R", "P", "D", "P"],
    correct: ["P", "P", "P"]
},
{
    skill: "letter-hunt",
    question: "Find all the R's!",
    choices: ["P", "R", "B", "R", "K", "R"],
    correct: ["R", "R", "R"]
},
{
    skill: "letter-hunt",
    question: "Find all the S's!",
    choices: ["C", "S", "Z", "S", "G", "S"],
    correct: ["S", "S", "S"]
},
{
    skill: "letter-hunt",
    question: "Find all the T's!",
    choices: ["I", "T", "F", "T", "L", "T"],
    correct: ["T", "T", "T"]
},
{
    skill: "letter-hunt",
    question: "Find all the Z's!",
    choices: ["S", "Z", "N", "Z", "X", "Z"],
    correct: ["Z", "Z", "Z"]
},

];


// ================================
// LETTER QUEST GAME
// ================================

const startLetterQuest =
    document.getElementById("startLetterQuest");

const letterQuestWelcome =
    document.getElementById("letterQuestWelcome");

let currentQuestion = null;

let currentQuestionNumber = 0;

let starsEarned = 0;

let usedQuestionIndexes = [];

let currentSkill = "find-letter";

let letterHuntFound = 0;

const questionsPerQuest = 5;


// ================================
// START QUEST
// ================================
    
startLetterQuest.addEventListener("click", function () {
    showSkillSelection();
});


// ================================
// SHOW NEXT QUESTION
// ================================
function showSkillSelection() {

    letterQuestWelcome.innerHTML = `
        <div class="quest-scroll">
            <div class="scroll-content">

                <h1>🔤 Letter Quest</h1>

                <p>
                    🐰 What would you like to practice?
                </p>

               <div class="skill-choices">

    <button class="skill-button" data-skill="find-letter">
        🔎 Find the Letter
    </button>

    <button class="skill-button" data-skill="uppercase-lowercase">
        🔡 Uppercase & Lowercase
    </button>

    <button class="skill-button" data-skill="letter-picture">
        🖼️ Letter → Picture
    </button>

    <button class="skill-button" data-skill="beginning-sounds">
    🔊 Beginning Sounds
</button>

<button class="skill-button" data-skill="letter-matching">
    🧩 Letter Matching
</button>

<button class="skill-button" data-skill="letter-hunt">
    🔍 Letter Hunt
</button>

</div>

            </div>
        </div>
    `;

    const skillButtons =
        document.querySelectorAll(".skill-button");

    skillButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            currentSkill =
                button.dataset.skill;

            currentQuestionNumber = 0;
            starsEarned = 0;
            usedQuestionIndexes = [];

            showNextQuestion();
        });

    });
}
    function showLetterHuntQuestion() {

    letterHuntFound = 0;

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

                <h1>🔍 Letter Hunt</h1>

                <p class="question-counter">
                    Question ${currentQuestionNumber} of ${questionsPerQuest}
                </p>

                <p class="star-counter">
                    ⭐ ${starsEarned}
                </p>

                <p>
                    ${currentQuestion.question}
                </p>

                <div class="letter-hunt-choices">
                    ${choicesHTML}
                </div>

                <p
                    class="answer-message"
                    id="answerMessage"
                ></p>

            </div>
        </div>
    `;

    const huntChoices =
        document.querySelectorAll(".letter-hunt-choice");

    const answerMessage =
        document.getElementById("answerMessage");

    huntChoices.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.disabled) {
                return;
            }

            const selectedLetter =
                button.dataset.letter;

            if (
                currentQuestion.correct.includes(
                    selectedLetter
                )
            ) {

                button.disabled = true;
                button.classList.add("found");

                letterHuntFound++;

                answerMessage.textContent =
                    "✨ Great find! ⭐";

                answerMessage.className =
                    "answer-message correct";

                if (
                    letterHuntFound ===
                    currentQuestion.correct.length
                ) {

                    starsEarned++;

                    answerMessage.textContent =
                        "🎉 You found them all! ⭐";

                    setTimeout(function () {
                        showNextQuestion();
                    }, 1000);
                }

            } else {

                answerMessage.textContent =
                    "🐰 Keep looking!";

                answerMessage.className =
                    "answer-message try-again";
            }

               });
    });
}

function showNextQuestion() {
    
    if (currentQuestionNumber >= questionsPerQuest) {

        showQuestComplete();

        return;

    }


    currentQuestionNumber++;


    let availableQuestionIndexes = [];

letterQuestQuestions.forEach(function (question, index) {

    if (
        question.skill === currentSkill &&
        !usedQuestionIndexes.includes(index)
    ) {

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

if (currentSkill === "letter-hunt") {
    showLetterHuntQuestion();
    return;
}

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


// ================================
// QUEST COMPLETE
// ================================

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


    const playAgainButton =
        document.getElementById("playAgainButton");

    const returnToCastleButton =
        document.getElementById("returnToCastleButton");


    playAgainButton.addEventListener("click", function () {

    currentQuestionNumber = 0;
    starsEarned = 0;
    usedQuestionIndexes = [];

    showSkillSelection();
});


    returnToCastleButton.addEventListener("click", function () {

        letterQuestScreen.style.display = "none";

        castleScreen.style.display = "block";

    });

}
