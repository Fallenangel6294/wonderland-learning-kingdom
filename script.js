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
// Start Letter Quest

const startLetterQuest = document.getElementById("startLetterQuest");
const letterQuestWelcome = document.getElementById("letterQuestWelcome");

startLetterQuest.addEventListener("click", function () {

    letterQuestWelcome.innerHTML = `
        <div class="quest-scroll">

            <div class="scroll-content">

                <h1>🔤 Find the Letter!</h1>

                <p>
                    Can you find the letter <strong>A</strong>?
                </p>

                <div class="letter-choices">

                    <button class="letter-choice">A</button>
                    <button class="letter-choice">M</button>
                    <button class="letter-choice">S</button>
                    <button class="letter-choice">T</button>

                </div>

            </div>

        </div>
    `;

});
