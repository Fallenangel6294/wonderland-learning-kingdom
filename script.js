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
