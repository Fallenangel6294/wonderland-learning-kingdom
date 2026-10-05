// Wonderland Learning Kingdom

const kingdomScreen = document.getElementById("kingdomScreen");
const castleScreen = document.getElementById("castleScreen");

const storybookCastle = document.getElementById("storybookCastle");
const backToKingdom = document.getElementById("backToKingdom");

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
