// Wonderland Learning Kingdom


// ================================
// MAIN SCREEN NAVIGATION
// ================================

const kingdomScreen =
    document.getElementById("kingdomScreen");

const castleScreen =
    document.getElementById("castleScreen");

const discoveryWoodsScreen = document.getElementById("discoveryWoodsScreen");

const discoveryWoodsButton = document.getElementById("discoveryWoodsButton");

const backFromDiscoveryWoods = document.getElementById("backFromDiscoveryWoods");

const animalFriendsScreen = document.getElementById("animalFriendsScreen");

const animalFriendsButton = document.getElementById("animalFriendsButton");

const backFromAnimalFriends = document.getElementById("backFromAnimalFriends");

const animalSoundsScreen = document.getElementById("animalSoundsScreen");

const animalSoundsButton = document.getElementById("animalSoundsButton");

const backFromAnimalSounds = document.getElementById("backFromAnimalSounds");

const spellingButton = document.getElementById("spellingButton");

const spellingWorkshopScreen = document.getElementById("spellingWorkshopScreen");

const backFromSpellingWorkshop = document.getElementById("backFromSpellingWorkshop");

const wordMatchScreen = document.getElementById("wordMatchScreen");

const wordMatchButton = document.getElementById("wordMatchButton");

const wordMatchMenu = document.getElementById("wordMatchMenu");

const startWordMatch = document.getElementById("startWordMatch");

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

// Enter Discovery Woods
discoveryWoodsButton.addEventListener("click", function () {
    kingdomScreen.style.display = "none";
    discoveryWoodsScreen.style.display = "block";
});

// Return from Discovery Woods to the kingdom map
backFromDiscoveryWoods.addEventListener("click", function () {
    discoveryWoodsScreen.style.display = "none";
    kingdomScreen.style.display = "block";
});

// Enter Animal Friends
animalFriendsButton.addEventListener("click", function () {
    discoveryWoodsScreen.style.display = "none";
    animalFriendsScreen.style.display = "block";
});

// Return to Discovery Woods
backFromAnimalFriends.addEventListener("click", function () {
    animalFriendsScreen.style.display = "none";
    discoveryWoodsScreen.style.display = "block";
});

// Open Animal Sounds
animalSoundsButton.addEventListener("click", function () {
    animalFriendsScreen.style.display = "none";
    animalSoundsScreen.style.display = "block";
});

// Return to Animal Friends
backFromAnimalSounds.addEventListener("click", function () {
    animalSoundsScreen.style.display = "none";
    animalFriendsScreen.style.display = "block";
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

const mushroomTwo =
    document.getElementById("mushroomTwo");

const mushroomThree =
    document.getElementById("mushroomThree");

const mushroomCounter =
    document.getElementById("mushroomCounter");

const mushroomDiscoveryMessage =
    document.getElementById("mushroomDiscoveryMessage");

const foundMushrooms = new Set();

function findMushroom(mushroom, number) {
    if (foundMushrooms.has(number)) return;

    foundMushrooms.add(number);

    mushroomCounter.textContent =
        `🍄 ${foundMushrooms.size} of 3 found`;

    if (foundMushrooms.size === 3) {
        mushroomDiscoveryMessage.style.display = "block";
    }
}

mushroomOne.addEventListener("click", function () {
    findMushroom(mushroomOne, 1);
});

mushroomTwo.addEventListener("click", function () {
    findMushroom(mushroomTwo, 2);
});

mushroomThree.addEventListener("click", function () {
    findMushroom(mushroomThree, 3);
});
const mushroomContinueButton =
    document.getElementById("mushroomContinueButton");

const bunnyStoryPage4 =
    document.getElementById("bunnyStoryPage4");

const pondMoonHotspot =
    document.getElementById("pondMoonHotspot");

const pondMoonDiscoveryMessage =
    document.getElementById("pondMoonDiscoveryMessage");

const pondMoonContinueButton =
    document.getElementById("pondMoonContinueButton");

// Continue from the mushroom hunt to Page 4
mushroomContinueButton.addEventListener("click", function () {
    bunnyStoryPage3.style.display = "none";
    bunnyStoryPage4.style.display = "block";
});

// Find the moon's reflection
pondMoonHotspot.addEventListener("click", function () {
    pondMoonDiscoveryMessage.style.display = "block";
});

// Continue from Page 4
pondMoonContinueButton.addEventListener("click", function () {
    bunnyStoryPage4.style.display = "none";
});


const bunnyStoryPage5 =
    document.getElementById("bunnyStoryPage5");

const skyMoonHotspot =
    document.getElementById("skyMoonHotspot");

const skyMoonDiscoveryMessage =
    document.getElementById("skyMoonDiscoveryMessage");

const skyMoonContinueButton =
    document.getElementById("skyMoonContinueButton");

// Continue from Page 4 to Page 5
pondMoonContinueButton.addEventListener("click", function () {
    bunnyStoryPage4.style.display = "none";
    bunnyStoryPage5.style.display = "block";
});

// Find the real moon in the sky
skyMoonHotspot.addEventListener("click", function () {
    skyMoonDiscoveryMessage.style.display = "block";
});

// Continue from Page 5
skyMoonContinueButton.addEventListener("click", function () {
    bunnyStoryPage5.style.display = "none";
});

/* PAGE 6: THE FINALE */

const bunnyStoryPage6 =
    document.getElementById("bunnyStoryPage6");

const finalStoryMessage =
    document.getElementById("finalStoryMessage");

const finishStoryButton =
    document.getElementById("finishStoryButton");

// Continue from Page 5 to Page 6
skyMoonContinueButton.addEventListener("click", function () {
    bunnyStoryPage5.style.display = "none";
    bunnyStoryPage6.style.display = "block";
});

// Show the story's happy ending
bunnyStoryPage6.querySelector(".story-text-panel").addEventListener("click", function () {
    finalStoryMessage.style.display = "block";
});

// Return to the Kingdom

finishStoryButton.addEventListener("click", function () {
    const completedActivities = JSON.parse(
        localStorage.getItem("wonderlandCompletedActivities") || "[]"
    );

    const alreadyCompleted =
        completedActivities.includes("bunny-missing-moon");

    if (!alreadyCompleted) {
        awardLearningStars(3, "bunny-missing-moon");
        startConfettiRain();
    }

    bunnyStoryScreen.style.display = "none";
    kingdomScreen.style.display = "block";
});

// Return to Wonderland Map

backToKingdom.addEventListener("click", function () {

    castleScreen.style.display = "none";
    kingdomScreen.style.display = "block";

});

wordMatchButton.addEventListener("click", function () {
    castleScreen.style.display = "none";
    wordMatchScreen.style.display = "block";

    wordMatchMenu.style.display = "none";
});


// Return to the Storybook Castle from Word Match


const backFromWordMatch = document.getElementById("backFromWordMatch");

backFromWordMatch.addEventListener("click", function () {
    wordMatchScreen.style.display = "none";
    wordMatchMenu.style.display = "none";
    startWordMatch.style.display = "block";
    castleScreen.style.display = "block";
});


startWordMatch.addEventListener("click", function () {
    wordMatchMenu.style.display = "flex";
    startWordMatch.style.display = "none";
});

/* SPELLING WORKSHOP NAVIGATION */

spellingButton.addEventListener("click", function () {
    castleScreen.style.display = "none";
    spellingWorkshopScreen.style.display = "block";
});

backFromSpellingWorkshop.addEventListener("click", function () {
    spellingWorkshopScreen.style.display = "none";
    castleScreen.style.display = "block";
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
        document.querySelectorAll(".letter-choice");

    const answerMessage =
        document.getElementById("answerMessage");

    huntChoices.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.disabled) {
                return;
            }

            const selectedLetter =
                button.dataset.answer;

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

    
    // Add Letter Quest rewards to the Kingdom counter
    const letterQuestReward =
        "letter-quest-" + currentSkill;

    const completedActivities = JSON.parse(
        localStorage.getItem("wonderlandCompletedActivities") || "[]"
    );

    if (
        starsEarned > 0 &&
        !completedActivities.includes(letterQuestReward)
    ) {
        awardLearningStars(starsEarned, letterQuestReward);
        startConfettiRain();
    }


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

/* WONDERLAND LEARNING STAR SYSTEM */

let learningStars = Number(
    localStorage.getItem("wonderlandLearningStars") || 0
);

const starCountDisplay = document.getElementById("starCount");

function updateStarCounter() {
    if (starCountDisplay) {
        starCountDisplay.textContent = learningStars;
    }
}

function awardLearningStars(amount = 1, activityName = "") {
    const completedActivities = JSON.parse(
        localStorage.getItem("wonderlandCompletedActivities") || "[]"
    );

    if (activityName && completedActivities.includes(activityName)) {
        return;
    }

    if (activityName) {
        completedActivities.push(activityName);
        localStorage.setItem(
            "wonderlandCompletedActivities",
            JSON.stringify(completedActivities)
        );
    }

    learningStars += amount;

    localStorage.setItem(
        "wonderlandLearningStars",
        learningStars
    );

    updateStarCounter();
}

updateStarCounter();

/* WONDERLAND CONFETTI RAIN */
function startConfettiRain() {
    const colors = [
        "#ff4fa3",
        "#ffd700",
        "#54d6ff",
        "#a66bff",
        "#55d879",
        "#ff914d"
    ];

    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.animationDuration =
            2.5 + Math.random() * 2 + "s";

        document.body.appendChild(piece);

        piece.addEventListener("animationend", function () {
            piece.remove();
        });
    }
}


/* =================================
   BEAR'S BIG ADVENTURE
================================= */

const bearAdventureButton =
    document.getElementById("bearAdventureButton");

const bearStoryScreen =
    document.getElementById("bearStoryScreen");

const backToStoryLibraryFromBear =
    document.getElementById("backToStoryLibraryFromBear");

const finishBearStory =
    document.getElementById("finishBearStory");

// Keep Bear's story hidden when the website first opens.
bearStoryScreen.style.display = "none";

// Open Bear's Big Adventure.
bearAdventureButton.addEventListener("click", function () {
    storyTimeScreen.style.display = "none";
    bearStoryScreen.style.display = "block";
    showBearPage(1);
});

// Display only the selected story page.
function showBearPage(pageNumber) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("bearPage" + i).style.display = "none";
    }

    document.getElementById("bearPage" + pageNumber).style.display = "block";
}

// Connect the Next Page buttons.
document.getElementById("bearNext1").addEventListener("click", function () {
    showBearPage(2);
});

document.getElementById("bearNext2").addEventListener("click", function () {
    showBearPage(3);
});

document.getElementById("bearNext3").addEventListener("click", function () {
    showBearPage(4);
});

document.getElementById("bearNext4").addEventListener("click", function () {
    showBearPage(5);
});

document.getElementById("bearNext5").addEventListener("click", function () {
    showBearPage(6);
});

// Return to the Story Time library.
backToStoryLibraryFromBear.addEventListener("click", function () {
    bearStoryScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});

// Award the story reward when the adventure is finished.
finishBearStory.addEventListener("click", function () {
    const completedActivities = JSON.parse(
        localStorage.getItem("wonderlandCompletedActivities") || "[]"
    );

    if (!completedActivities.includes("bear-big-adventure")) {
        awardLearningStars(3, "bear-big-adventure");
        startConfettiRain();
    }

    bearStoryScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});


/* BEAR'S BIG ADVENTURE: FIND THE BLUE FLOWER */

const blueFlowerHotspot =
    document.getElementById("blueFlowerHotspot");

const blueFlowerMessage =
    document.getElementById("blueFlowerMessage");

const bearNext2 =
    document.getElementById("bearNext2");

blueFlowerHotspot.addEventListener("click", function () {
    blueFlowerMessage.style.display = "block";
    blueFlowerHotspot.style.display = "none";
    bearNext2.style.display = "inline-block";
});

/* BUTTERFLY COUNT GAME */

let butterfliesFound = [];

const butterflyCountDisplay =
    document.getElementById("butterflyCountDisplay");

const butterflyWinMessage =
    document.getElementById("butterflyWinMessage");

const butterflyButtons = [
    document.getElementById("butterfly1"),
    document.getElementById("butterfly2"),
    document.getElementById("butterfly3")
];

function resetButterflyGame() {
    butterfliesFound = [];

    butterflyCountDisplay.style.display = "block";
    butterflyCountDisplay.textContent =
        "🦋 Butterflies found: 0 of 3";

    butterflyWinMessage.style.display = "none";

    document.getElementById("bearNext3").style.display = "none";

    butterflyButtons.forEach(function (button) {
        button.style.display = "block";
    });
}

butterflyButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {

        // Do not count the same butterfly twice.
        if (butterfliesFound.includes(index)) {
            return;
        }

        butterfliesFound.push(index);

        butterflyCountDisplay.textContent =
            "🦋 Butterflies found: " +
            butterfliesFound.length + " of 3";

        // Hide the butterfly after it has been found.
        button.style.display = "none";

        // Celebrate when all three have been found.
        if (butterfliesFound.length === 3) {
            butterflyCountDisplay.style.display = "none";
            butterflyWinMessage.style.display = "block";
            document.getElementById("bearNext3").style.display =
                "inline-block";

            startConfettiRain();
        }
    });
});

// Start a fresh counting game whenever Page 3 opens.
const originalShowBearPage = showBearPage;

showBearPage = function (pageNumber) {
    originalShowBearPage(pageNumber);

    if (pageNumber === 3) {
        resetButterflyGame();
    }
};

/* WHICH WAY, BEAR? PATH CHOICE GAME */

const mushroomTrailHotspot =
    document.getElementById("mushroomTrailHotspot");

const flowerTrailHotspot =
    document.getElementById("flowerTrailHotspot");

const pathChoicePopup =
    document.getElementById("pathChoicePopup");

const pathChoiceMessage =
    document.getElementById("pathChoiceMessage");

const tryFlowerTrailAgain =
    document.getElementById("tryFlowerTrailAgain");

const bearNext4 =
    document.getElementById("bearNext4");

function resetPathChoiceGame() {
    pathChoicePopup.style.display = "none";
    tryFlowerTrailAgain.style.display = "none";
    bearNext4.style.display = "none";

    mushroomTrailHotspot.style.display = "block";
    flowerTrailHotspot.style.display = "block";
}

mushroomTrailHotspot.addEventListener("click", function () {
    pathChoicePopup.style.display = "flex";

    pathChoiceMessage.textContent =
        "🍄 The mushrooms look interesting! " +
        "But which trail has the flower petals?";

    tryFlowerTrailAgain.style.display = "inline-block";
    bearNext4.style.display = "none";
});

flowerTrailHotspot.addEventListener("click", function () {
    pathChoicePopup.style.display = "flex";

    pathChoiceMessage.textContent =
        "🌸 You found the Flower Trail! " +
        "Let's follow those petals to the beautiful flower!";

    tryFlowerTrailAgain.style.display = "none";
    bearNext4.style.display = "inline-block";

    mushroomTrailHotspot.style.display = "none";
    flowerTrailHotspot.style.display = "none";

    startConfettiRain();
});

tryFlowerTrailAgain.addEventListener("click", function () {
    resetPathChoiceGame();
});

// Reset the game whenever Page 4 opens.
const originalShowBearPageForPaths = showBearPage;

showBearPage = function (pageNumber) {
    originalShowBearPageForPaths(pageNumber);

    if (pageNumber === 4) {
        resetPathChoiceGame();
    }
};

/* THE GOLDEN FLOWER GAME */

const goldenFlowerHotspot =
    document.getElementById("goldenFlowerHotspot");

const goldenFlowerPopup =
    document.getElementById("goldenFlowerPopup");

const goldenFlowerMessage =
    document.getElementById("goldenFlowerMessage");

const bearNext5 =
    document.getElementById("bearNext5");

function resetGoldenFlowerGame() {
    goldenFlowerPopup.style.display = "none";
    goldenFlowerHotspot.style.display = "block";
    bearNext5.style.display = "none";

    goldenFlowerMessage.textContent =
        "🌟 You discovered the Golden Flower!";
}

goldenFlowerHotspot.addEventListener("click", function () {
    goldenFlowerHotspot.style.display = "none";
    goldenFlowerPopup.style.display = "flex";

    goldenFlowerMessage.textContent =
        "🌟 The Golden Flower shines with magic! " +
        "You helped Bear find something beautiful!";

    bearNext5.style.display = "inline-block";

    startConfettiRain();
});

// Reset the interaction whenever Page 5 opens.
const originalShowBearPageForFlower = showBearPage;

showBearPage = function (pageNumber) {
    originalShowBearPageForFlower(pageNumber);

    if (pageNumber === 5) {
        resetGoldenFlowerGame();
    }
};

/* =================================
   THE LITTLE BUTTERFLY STORY
================================= */

const butterflyStoryButton =
    document.getElementById("butterflyStoryButton");

const butterflyStoryScreen =
    document.getElementById("butterflyStoryScreen");

const backToStoryLibraryFromButterfly =
    document.getElementById("backToStoryLibraryFromButterfly");

const finishButterflyStory =
    document.getElementById("finishButterflyStory");

// Hide the butterfly story when the website first opens.
butterflyStoryScreen.style.display = "none";

// Open the story.
butterflyStoryButton.addEventListener("click", function () {
    storyTimeScreen.style.display = "none";
    butterflyStoryScreen.style.display = "block";
    showButterflyPage(1);
});

// Display one story page at a time.
function showButterflyPage(pageNumber) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById("butterflyPage" + i).style.display = "none";
    }

    document.getElementById("butterflyPage" + pageNumber).style.display = "block";
}

// Connect the Next Page buttons.
document.getElementById("butterflyNext1").addEventListener("click", function () {
    showButterflyPage(2);
});

document.getElementById("butterflyNext2").addEventListener("click", function () {
    showButterflyPage(3);
});

document.getElementById("butterflyNext3").addEventListener("click", function () {
    showButterflyPage(4);
});

document.getElementById("butterflyNext4").addEventListener("click", function () {
    showButterflyPage(5);
});

document.getElementById("butterflyNext5").addEventListener("click", function () {
    showButterflyPage(6);
});

// Return to Story Time.
backToStoryLibraryFromButterfly.addEventListener("click", function () {
    butterflyStoryScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});

// Award 3 Learning Stars when the story is completed.
finishButterflyStory.addEventListener("click", function () {
    const completedActivities = JSON.parse(
        localStorage.getItem("wonderlandCompletedActivities") || "[]"
    );

    if (!completedActivities.includes("little-butterfly-story")) {
        awardLearningStars(3, "little-butterfly-story");
        startConfettiRain();
    }

    butterflyStoryScreen.style.display = "none";
    storyTimeScreen.style.display = "block";
});

/* THE LITTLE BUTTERFLY: FIND THE RED FLOWER */

const redFlowerHotspot =
    document.getElementById("redFlowerHotspot");

const redFlowerPopup =
    document.getElementById("redFlowerPopup");

const redFlowerMessage =
    document.getElementById("redFlowerMessage");

const butterflyNext2Popup =
    document.getElementById("butterflyNext2Popup");

const butterflyNext2Original =
    document.getElementById("butterflyNext2");

function resetRedFlowerGame() {
    redFlowerHotspot.style.display = "block";
    redFlowerPopup.style.display = "none";
    butterflyNext2Popup.style.display = "none";
    butterflyNext2Original.style.display = "none";

    redFlowerMessage.textContent =
        "🌺 You found the red flower!";
}

redFlowerHotspot.addEventListener("click", function () {
    redFlowerHotspot.style.display = "none";
    redFlowerPopup.style.display = "flex";

    redFlowerMessage.textContent =
        "🌺 You found the red flower! " +
        "Great exploring, Marlowe and Storm!";

    butterflyNext2Popup.style.display = "inline-block";
});

// Reset the activity whenever Page 2 opens.
const originalShowButterflyPageForFlower = showButterflyPage;

showButterflyPage = function (pageNumber) {
    originalShowButterflyPageForFlower(pageNumber);

    if (pageNumber === 2) {
        resetRedFlowerGame();
    }
};

butterflyNext2Popup.addEventListener("click", function () {
    showButterflyPage(3);
});


/* THE LITTLE BUTTERFLY: COUNT THE FLOWERS */

let butterflyFlowersFound = [];

const butterflyFlowerButtons = [
    document.getElementById("countFlower1"),
    document.getElementById("countFlower2"),
    document.getElementById("countFlower3")
];

const butterflyFlowerCount =
    document.getElementById("butterflyFlowerCount");

const butterflyCountWinMessage =
    document.getElementById("butterflyCountWinMessage");

const butterflyNext3Popup =
    document.getElementById("butterflyNext3Popup");

const butterflyNext3Original =
    document.getElementById("butterflyNext3");

const butterflyCountPopup =
    document.getElementById("butterflyCountPopup");

function resetButterflyFlowerGame() {
    butterflyFlowersFound = [];

    butterflyFlowerButtons.forEach(function (button) {
        button.style.display = "block";
    });

    butterflyFlowerCount.style.display = "block";
    butterflyFlowerCount.textContent = "🌼 Flowers found: 0 of 3";

    butterflyCountWinMessage.style.display = "none";
    butterflyNext3Popup.style.display = "none";
    butterflyNext3Original.style.display = "none";
}

butterflyFlowerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {

        // Each flower counts only once.
        if (butterflyFlowersFound.includes(index)) {
            return;
        }

        butterflyFlowersFound.push(index);

        butterflyFlowerCount.textContent =
            "🌼 Flowers found: " +
            butterflyFlowersFound.length + " of 3";

        button.style.display = "none";

        if (butterflyFlowersFound.length === 3) {
            butterflyFlowerCount.style.display = "none";
            butterflyCountWinMessage.style.display = "block";
            butterflyNext3Popup.style.display = "inline-block";

            startConfettiRain();
        }
    });
});

// Reset the counting game whenever Page 3 opens.
const originalShowButterflyPageForCounting = showButterflyPage;

showButterflyPage = function (pageNumber) {
    originalShowButterflyPageForCounting(pageNumber);

    if (pageNumber === 3) {
        resetButterflyFlowerGame();
    }
};

butterflyNext3Popup.onclick = function () {
    showButterflyPage(4);
};

/* ========================================
   WORD MATCH: WORD TO PICTURE QUESTIONS
======================================== */

const wordToPictureQuestions = [
    { picture: "🐱", word: "CAT", choices: ["CAT", "DOG", "SUN"] },
    { picture: "🐶", word: "DOG", choices: ["CUP", "DOG", "CAT"] },
    { picture: "☀️", word: "SUN", choices: ["MOON", "SUN", "STAR"] },
    { picture: "🍎", word: "APPLE", choices: ["BALL", "APPLE", "FISH"] },
    { picture: "🐟", word: "FISH", choices: ["BIRD", "FISH", "DUCK"] },
    { picture: "⚽", word: "BALL", choices: ["BALL", "BOOK", "CUP"] },
    { picture: "🌙", word: "MOON", choices: ["SUN", "STAR", "MOON"] },
    { picture: "🐰", word: "BUNNY", choices: ["BEAR", "BUNNY", "CAT"] },
    { picture: "🚗", word: "CAR", choices: ["BUS", "CAR", "BOAT"] },
    { picture: "🐻", word: "BEAR", choices: ["BEAR", "DUCK", "FROG"] },
    { picture: "⭐", word: "STAR", choices: ["HEART", "MOON", "STAR"] },
    { picture: "🚌", word: "BUS", choices: ["CAR", "BUS", "TRAIN"] },
    { picture: "🍌", word: "BANANA", choices: ["APPLE", "BANANA", "GRAPE"] },
    { picture: "🦆", word: "DUCK", choices: ["DUCK", "FISH", "BIRD"] },
    { picture: "🐸", word: "FROG", choices: ["CAT", "FROG", "BEAR"] },
    { picture: "🌈", word: "RAINBOW", choices: ["CLOUD", "SUN", "RAINBOW"] },
    { picture: "🧸", word: "TEDDY", choices: ["TEDDY", "BALL", "BOOK"] },
    { picture: "🥛", word: "MILK", choices: ["WATER", "JUICE", "MILK"] },
    { picture: "🐦", word: "BIRD", choices: ["BIRD", "DUCK", "FISH"] },
    { picture: "🍓", word: "BERRY", choices: ["APPLE", "BERRY", "BANANA"] }
];

/* ========================================
   WORD TO PICTURE: GAME LOGIC
======================================== */

const wordToPictureButton =
    document.getElementById("wordToPictureButton");

const wordPictureGame =
    document.getElementById("wordPictureGame");

const wordPictureMenu =
    document.getElementById("wordMatchMenu");

const wordPictureImage =
    document.getElementById("wordPictureImage");

const wordPictureChoices =
    document.getElementById("wordPictureChoices");

const wordPictureProgress =
    document.getElementById("wordPictureProgress");

const wordPictureFeedback =
    document.getElementById("wordPictureFeedback");

const backToWordMatchMenu =
    document.getElementById("backToWordMatchMenu");

let wordPictureRound = [];
let wordPictureQuestionIndex = 0;
let wordPictureScore = 0;
let wordPictureAnswered = false;

// Shuffle the questions and select five different ones.
function startWordPictureRound() {
    wordPictureRound = [...wordToPictureQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    wordPictureQuestionIndex = 0;
    wordPictureScore = 0;

    showWordPictureQuestion();
}

// Display the current question.
function showWordPictureQuestion() {
    const question =
        wordPictureRound[wordPictureQuestionIndex];

    wordPictureAnswered = false;

    wordPictureProgress.textContent =
        `Question ${wordPictureQuestionIndex + 1} of 5`;

    wordPictureImage.textContent = question.picture;
    wordPictureFeedback.textContent = "";
    wordPictureChoices.innerHTML = "";

    const shuffledChoices = [...question.choices]
        .sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(function (choice) {
        const button = document.createElement("button");

        button.className = "word-picture-choice";
        button.textContent = choice;

        button.addEventListener("click", function () {
            checkWordPictureAnswer(button, choice, question);
        });

        wordPictureChoices.appendChild(button);
    });
}

// Check the child's answer.
function checkWordPictureAnswer(button, choice, question) {
    if (wordPictureAnswered) return;

    wordPictureAnswered = true;

    const buttons =
        wordPictureChoices.querySelectorAll("button");

    buttons.forEach(function (answerButton) {
        answerButton.disabled = true;
    });

    if (choice === question.word) {
        wordPictureScore++;

        wordPictureFeedback.textContent =
            "🌟 Fantastic! You found the right word!";

        awardLearningStars(1);
    } else {
        wordPictureFeedback.textContent =
            `Good try! The word is ${question.word}. 💜`;
    }

    const nextButton = document.createElement("button");

    nextButton.className = "word-picture-choice";
    nextButton.textContent =
        wordPictureQuestionIndex === 4
            ? "See My Results! ✨"
            : "Next Question ➜";

    nextButton.style.gridColumn = "1 / -1";

    nextButton.addEventListener("click", function () {
        wordPictureQuestionIndex++;

        if (wordPictureQuestionIndex < 5) {
            showWordPictureQuestion();
        } else {
            finishWordPictureRound();
        }
    });

    wordPictureChoices.appendChild(nextButton);
}

// Celebrate the end of the five-question round.
function finishWordPictureRound() {
    wordPictureProgress.textContent = "Round Complete!";

    wordPictureImage.textContent =
        wordPictureScore === 5 ? "🏆" : "🌟";

    wordPictureChoices.innerHTML = "";

    wordPictureFeedback.textContent =
        `You got ${wordPictureScore} out of 5 correct! Great learning!`;

    if (wordPictureScore === 5) {
        startConfettiRain();
    }

    const menuButton = document.createElement("button");

    menuButton.className = "word-picture-choice";
    menuButton.textContent = "🏰 Choose Another Game";

    menuButton.addEventListener("click", function () {
        wordPictureGame.style.display = "none";
        wordPictureMenu.style.display = "flex";
    });

    wordPictureChoices.appendChild(menuButton);
}

// Open Word to Picture from the game menu.
wordToPictureButton.addEventListener("click", function () {
    wordPictureMenu.style.display = "none";
    wordPictureGame.style.display = "flex";

    startWordPictureRound();
});

// Return to the game menu at any time.
backToWordMatchMenu.addEventListener("click", function () {
    wordPictureGame.style.display = "none";
    wordPictureMenu.style.display = "flex";
});


/* ========================================
   WORD TO WORD QUESTION BANK
======================================== */

const wordToWordQuestions = [
    { word: "CAT", choices: ["DOG", "CAT", "SUN"] },
    { word: "DOG", choices: ["DOG", "CUP", "CAR"] },
    { word: "SUN", choices: ["MOON", "SUN", "STAR"] },
    { word: "APPLE", choices: ["BALL", "APPLE", "FISH"] },
    { word: "FISH", choices: ["BIRD", "FISH", "DUCK"] },
    { word: "BALL", choices: ["BALL", "BOOK", "CUP"] },
    { word: "MOON", choices: ["SUN", "STAR", "MOON"] },
    { word: "BUNNY", choices: ["BEAR", "BUNNY", "CAT"] },
    { word: "CAR", choices: ["BUS", "CAR", "BOAT"] },
    { word: "BEAR", choices: ["BEAR", "DUCK", "FROG"] },
    { word: "STAR", choices: ["HEART", "MOON", "STAR"] },
    { word: "BUS", choices: ["CAR", "BUS", "TRAIN"] },
    { word: "BANANA", choices: ["APPLE", "BANANA", "GRAPE"] },
    { word: "DUCK", choices: ["DUCK", "FISH", "BIRD"] },
    { word: "FROG", choices: ["CAT", "FROG", "BEAR"] },
    { word: "RAINBOW", choices: ["CLOUD", "SUN", "RAINBOW"] },
    { word: "TEDDY", choices: ["TEDDY", "BALL", "BOOK"] },
    { word: "MILK", choices: ["WATER", "JUICE", "MILK"] },
    { word: "BIRD", choices: ["BIRD", "DUCK", "FISH"] },
    { word: "BERRY", choices: ["APPLE", "BERRY", "BANANA"] }
];

/* ========================================
   WORD TO WORD GAME LOGIC
======================================== */

const wordToWordButton = document.getElementById("wordToWordButton");
const wordWordGame = document.getElementById("wordWordGame");
const wordWordMenu = document.getElementById("wordMatchMenu");
const wordWordTarget = document.getElementById("wordWordTarget");
const wordWordChoices = document.getElementById("wordWordChoices");
const wordWordProgress = document.getElementById("wordWordProgress");
const wordWordFeedback = document.getElementById("wordWordFeedback");
const backToWordMenu = document.getElementById("backToWordMenu");

let wordWordRound = [];
let wordWordQuestionIndex = 0;
let wordWordScore = 0;
let wordWordAnswered = false;

function startWordWordRound() {
    wordWordRound = [...wordToWordQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    wordWordQuestionIndex = 0;
    wordWordScore = 0;

    showWordWordQuestion();
}

function showWordWordQuestion() {
    const question = wordWordRound[wordWordQuestionIndex];

    wordWordAnswered = false;

    wordWordProgress.textContent =
        `Question ${wordWordQuestionIndex + 1} of 5`;

    wordWordTarget.textContent = question.word;
    wordWordFeedback.textContent = "";
    wordWordChoices.innerHTML = "";

    const shuffledChoices = [...question.choices]
        .sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(function (choice) {
        const button = document.createElement("button");

        button.className = "word-word-choice";
        button.textContent = choice;

        button.addEventListener("click", function () {
            checkWordWordAnswer(choice, question);
        });

        wordWordChoices.appendChild(button);
    });
}

function checkWordWordAnswer(choice, question) {
    if (wordWordAnswered) return;

    wordWordAnswered = true;

    const buttons = wordWordChoices.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (choice === question.word) {
        wordWordScore++;

        wordWordFeedback.textContent =
            "🌟 Fantastic! You found the matching word!";

        awardLearningStars(1);
    } else {
        wordWordFeedback.textContent =
            `Good try! The matching word is ${question.word}. 💜`;
    }

    const nextButton = document.createElement("button");

    nextButton.className = "word-word-choice";
    nextButton.textContent =
        wordWordQuestionIndex === 4
            ? "See My Results! ✨"
            : "Next Question ➜";

    nextButton.style.gridColumn = "1 / -1";

    nextButton.addEventListener("click", function () {
        wordWordQuestionIndex++;

        if (wordWordQuestionIndex < 5) {
            showWordWordQuestion();
        } else {
            finishWordWordRound();
        }
    });

    wordWordChoices.appendChild(nextButton);
}

function finishWordWordRound() {
    wordWordProgress.textContent = "Round Complete!";

    wordWordTarget.textContent =
        wordWordScore === 5 ? "🏆" : "🌟";

    wordWordChoices.innerHTML = "";

    wordWordFeedback.textContent =
        `You got ${wordWordScore} out of 5 correct! Great learning!`;

    if (wordWordScore === 5) {
        startConfettiRain();
    }

    const menuButton = document.createElement("button");

    menuButton.className = "word-word-choice";
    menuButton.textContent = "🏰 Choose Another Game";

    menuButton.style.gridColumn = "1 / -1";

    menuButton.addEventListener("click", function () {
        wordWordGame.style.display = "none";
        wordWordMenu.style.display = "flex";
    });

    wordWordChoices.appendChild(menuButton);
}

wordToWordButton.addEventListener("click", function () {
    wordWordMenu.style.display = "none";
    wordWordGame.style.display = "flex";

    startWordWordRound();
});

backToWordMenu.addEventListener("click", function () {
    wordWordGame.style.display = "none";
    wordWordMenu.style.display = "flex";
});

/* ========================================
   PICTURE TO PICTURE QUESTION BANK
======================================== */

const pictureToPictureQuestions = [
    { picture: "🐱", choices: ["🐶", "🐱", "🐰"] },
    { picture: "🐶", choices: ["🐶", "🐻", "🐸"] },
    { picture: "☀️", choices: ["🌙", "⭐", "☀️"] },
    { picture: "🍎", choices: ["🍌", "🍎", "🍓"] },
    { picture: "🐟", choices: ["🐦", "🐟", "🦆"] },
    { picture: "⚽", choices: ["📚", "⚽", "🎈"] },
    { picture: "🌙", choices: ["⭐", "🌙", "☀️"] },
    { picture: "🐰", choices: ["🐻", "🐱", "🐰"] },
    { picture: "🚗", choices: ["🚌", "🚗", "🚂"] },
    { picture: "🐻", choices: ["🐸", "🐻", "🐶"] },
    { picture: "⭐", choices: ["❤️", "⭐", "🌈"] },
    { picture: "🚌", choices: ["🚗", "🚂", "🚌"] },
    { picture: "🍌", choices: ["🍇", "🍎", "🍌"] },
    { picture: "🦆", choices: ["🐟", "🦆", "🐦"] },
    { picture: "🐸", choices: ["🐱", "🐻", "🐸"] },
    { picture: "🌈", choices: ["☁️", "🌈", "☀️"] },
    { picture: "🧸", choices: ["⚽", "🧸", "📚"] },
    { picture: "🥛", choices: ["🧃", "🥛", "💧"] },
    { picture: "🐦", choices: ["🦆", "🐟", "🐦"] },
    { picture: "🍓", choices: ["🍎", "🍌", "🍓"] }
];

/* ========================================
   PICTURE TO PICTURE GAME LOGIC
======================================== */

const pictureToPictureButton = document.getElementById("pictureToPictureButton");
const picturePictureGame = document.getElementById("picturePictureGame");
const picturePictureMenu = document.getElementById("wordMatchMenu");
const picturePictureTarget = document.getElementById("picturePictureTarget");
const picturePictureChoices = document.getElementById("picturePictureChoices");
const picturePictureProgress = document.getElementById("picturePictureProgress");
const picturePictureFeedback = document.getElementById("picturePictureFeedback");
const backToPictureMenu = document.getElementById("backToPictureMenu");

let picturePictureRound = [];
let picturePictureQuestionIndex = 0;
let picturePictureScore = 0;
let picturePictureAnswered = false;

function startPicturePictureRound() {
    picturePictureRound = [...pictureToPictureQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    picturePictureQuestionIndex = 0;
    picturePictureScore = 0;

    showPicturePictureQuestion();
}

function showPicturePictureQuestion() {
    const question = picturePictureRound[picturePictureQuestionIndex];

    picturePictureAnswered = false;

    picturePictureProgress.textContent =
        `Question ${picturePictureQuestionIndex + 1} of 5`;

    picturePictureTarget.textContent = question.picture;
    picturePictureFeedback.textContent = "";
    picturePictureChoices.innerHTML = "";

    const shuffledChoices = [...question.choices]
        .sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(function (choice) {
        const button = document.createElement("button");

        button.className = "picture-picture-choice";
        button.textContent = choice;
        button.setAttribute("aria-label", "Choose this picture");

        button.addEventListener("click", function () {
            checkPicturePictureAnswer(choice, question);
        });

        picturePictureChoices.appendChild(button);
    });
}

function checkPicturePictureAnswer(choice, question) {
    if (picturePictureAnswered) return;

    picturePictureAnswered = true;

    const buttons = picturePictureChoices.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (choice === question.picture) {
        picturePictureScore++;

        picturePictureFeedback.textContent =
            "🌟 Fantastic! You found the matching picture!";

        awardLearningStars(1);
    } else {
        picturePictureFeedback.textContent =
            "Good try! Look carefully at the pictures. 💜";
    }

    const nextButton = document.createElement("button");

    nextButton.className = "picture-picture-choice";
    nextButton.textContent =
        picturePictureQuestionIndex === 4
            ? "See My Results! ✨"
            : "Next Question ➜";

    nextButton.style.gridColumn = "1 / -1";
    nextButton.style.fontSize = "22px";

    nextButton.addEventListener("click", function () {
        picturePictureQuestionIndex++;

        if (picturePictureQuestionIndex < 5) {
            showPicturePictureQuestion();
        } else {
            finishPicturePictureRound();
        }
    });

    picturePictureChoices.appendChild(nextButton);
}

function finishPicturePictureRound() {
    picturePictureProgress.textContent = "Round Complete!";

    picturePictureTarget.textContent =
        picturePictureScore === 5 ? "🏆" : "🌟";

    picturePictureChoices.innerHTML = "";

    picturePictureFeedback.textContent =
        `You got ${picturePictureScore} out of 5 correct! Great learning!`;

    if (picturePictureScore === 5) {
        startConfettiRain();
    }

    const menuButton = document.createElement("button");

    menuButton.className = "picture-picture-choice";
    menuButton.textContent = "🏰 Choose Another Game";
    menuButton.style.gridColumn = "1 / -1";
    menuButton.style.fontSize = "22px";

    menuButton.addEventListener("click", function () {
        picturePictureGame.style.display = "none";
        picturePictureMenu.style.display = "flex";
    });

    picturePictureChoices.appendChild(menuButton);
}

pictureToPictureButton.addEventListener("click", function () {
    picturePictureMenu.style.display = "none";
    picturePictureGame.style.display = "flex";

    startPicturePictureRound();
});

backToPictureMenu.addEventListener("click", function () {
    picturePictureGame.style.display = "none";
    picturePictureMenu.style.display = "flex";
});

/* ========================================
   SPELLING WORKSHOP GAME
======================================== */

const spellingWords = [
    { word: "CAT", hint: "🐱" },
    { word: "SUN", hint: "☀️" },
    { word: "BUNNY", hint: "🐰" },
    { word: "HAT", hint: "👒" },
    { word: "PIG", hint: "🐷" },
    { word: "FOX", hint: "🦊" },
    { word: "CUP", hint: "🥤" },
    { word: "BEE", hint: "🐝" }
];

let currentSpellingWord = null;
let selectedSpellingLetters = [];

function startSpellingRound() {
    const answerArea = document.getElementById("spellingAnswerArea");
    const choicesArea = document.getElementById("spellingLetterChoices");
    const feedback = document.getElementById("spellingFeedback");
    const question = document.getElementById("spellingQuestion");

    if (!answerArea || !choicesArea || !feedback) return;

    currentSpellingWord =
        spellingWords[Math.floor(Math.random() * spellingWords.length)];

    selectedSpellingLetters = [];
    answerArea.innerHTML = "";
    choicesArea.innerHTML = "";
    feedback.textContent = "";
    if (question) {
    question.textContent = currentSpellingWord.word;
}

    const letters = currentSpellingWord.word.split("");

    // Mix the letters so the child must find the correct order.
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);

    shuffledLetters.forEach((letter, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "spelling-letter-choice";
        button.textContent = letter;
        button.setAttribute("aria-label", `Letter ${letter}`);

        button.addEventListener("click", () => {
            if (button.disabled) return;

            button.disabled = true;
            selectedSpellingLetters.push({ letter, button });

            const tile = document.createElement("button");
            tile.type = "button";
            tile.className = "spelling-letter-tile";
            tile.textContent = letter;
            tile.setAttribute("aria-label", `Remove letter ${letter}`);

            tile.addEventListener("click", () => {
                selectedSpellingLetters =
                    selectedSpellingLetters.filter(item => item.button !== button);

                button.disabled = false;
                tile.remove();
                checkSpellingAnswer();
            });

            answerArea.appendChild(tile);
            checkSpellingAnswer();
        });

        choicesArea.appendChild(button);
    });

    feedback.textContent = currentSpellingWord.hint;
}

function checkSpellingAnswer() {
    const feedback = document.getElementById("spellingFeedback");

    if (!currentSpellingWord || !feedback) return;

    const answer = selectedSpellingLetters
        .map(item => item.letter)
        .join("");

    if (answer.length < currentSpellingWord.word.length) return;

    if (answer === currentSpellingWord.word) {
        feedback.textContent = "🌟 Wonderful spelling!";
        
        if (typeof awardLearningStars === "function") {
            awardLearningStars(1, "Spelling Workshop");
        }

        if (typeof startConfettiRain === "function") {
            startConfettiRain();
        }

        setTimeout(startSpellingRound, 1600);
    } else {
        feedback.textContent = "💜 Try again! Tap a letter below to change it.";
    }
}

// Prepare the first round when the spelling screen opens.
if (typeof spellingButton !== "undefined" && spellingButton) {
    spellingButton.addEventListener("click", startSpellingRound);
}



/* =================================
   ANIMAL SOUNDS GAME
   20 animals, 5 questions per round
================================= */

const playAnimalSoundButton = document.getElementById("playAnimalSoundButton");
const animalSoundsFeedback = document.getElementById("animalSoundsFeedback");
const animalSoundChoices = document.getElementById("animalSoundChoices");
const animalQuestionCounter = document.getElementById("animalQuestionCounter");

const animalSoundQuestions = [
    { animal: "cow", name: "Cow", sound: "Moo! Moo!" },
    { animal: "pig", name: "Pig", sound: "Oink! Oink!" },
    { animal: "horse", name: "Horse", sound: "Neigh!" },
    { animal: "sheep", name: "Sheep", sound: "Baa! Baa!" },
    { animal: "goat", name: "Goat", sound: "Maa! Maa!" },
    { animal: "chicken", name: "Chicken", sound: "Cluck! Cluck!" },
    { animal: "duck", name: "Duck", sound: "Quack! Quack!" },
    { animal: "owl", name: "Owl", sound: "Hoo! Hoo!" },
    { animal: "fox", name: "Fox", sound: "Yip! Yip!" },
    { animal: "wolf", name: "Wolf", sound: "Howl!" },
    { animal: "lion", name: "Lion", sound: "Roar!" },
    { animal: "elephant", name: "Elephant", sound: "Trumpet!" },
    { animal: "monkey", name: "Monkey", sound: "Ooh! Ooh! Ah! Ah!" },
    { animal: "frog", name: "Frog", sound: "Ribbit! Ribbit!" },
    { animal: "songbird", name: "Songbird", sound: "Tweet! Tweet!" },
    { animal: "dog", name: "Dog", sound: "Woof! Woof!" },
    { animal: "cat", name: "Cat", sound: "Meow!" },
    { animal: "turkey", name: "Turkey", sound: "Gobble! Gobble!" },
    { animal: "rooster", name: "Rooster", sound: "Cock-a-doodle-doo!" },
    { animal: "donkey", name: "Donkey", sound: "Hee-haw!" }
];

let animalRoundQuestions = [];
let currentAnimalQuestion = null;
let animalQuestionIndex = 0;
let animalCorrectAnswers = 0;
let animalQuestionAnswered = false;

function shuffleAnimalQuestions(questions) {
    const shuffled = [...questions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startAnimalSoundsRound() {
    animalRoundQuestions = shuffleAnimalQuestions(animalSoundQuestions).slice(0, 5);
    animalQuestionIndex = 0;
    animalCorrectAnswers = 0;

    showAnimalSoundQuestion();
}

function showAnimalSoundQuestion() {
    if (animalQuestionIndex >= animalRoundQuestions.length) {
        finishAnimalSoundsRound();
        return;
    }

    currentAnimalQuestion = animalRoundQuestions[animalQuestionIndex];
    animalQuestionAnswered = false;

    animalQuestionCounter.textContent =
        `Question ${animalQuestionIndex + 1} of 5`;

    animalSoundsFeedback.textContent = "";

    playAnimalSoundButton.textContent = "Play Animal Sound";

    const wrongAnswers = shuffleAnimalQuestions(
        animalSoundQuestions.filter(
            question => question.animal !== currentAnimalQuestion.animal
        )
    ).slice(0, 2);

    const choices = shuffleAnimalQuestions([
        currentAnimalQuestion,
        ...wrongAnswers
    ]);

    animalSoundChoices.innerHTML = "";

    choices.forEach(function (animal) {
        const button = document.createElement("button");

        button.className = "animal-choice";
        button.textContent = animal.name;
        button.dataset.animal = animal.animal;

        button.addEventListener("click", function () {
            answerAnimalSoundQuestion(animal.animal);
        });

        animalSoundChoices.appendChild(button);
    });
}

function playCurrentAnimalSound() {
    if (!currentAnimalQuestion) return;

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(
            currentAnimalQuestion.sound
        );

        speech.rate = 0.8;
        window.speechSynthesis.speak(speech);
    } else {
        animalSoundsFeedback.textContent =
            currentAnimalQuestion.sound;
    }
}

function answerAnimalSoundQuestion(selectedAnimal) {
    if (animalQuestionAnswered || !currentAnimalQuestion) return;

    if (selectedAnimal === currentAnimalQuestion.animal) {
        animalQuestionAnswered = true;
        animalCorrectAnswers++;

        animalSoundsFeedback.textContent =
            `Wonderful! That's the ${currentAnimalQuestion.name}!`;

        if (typeof awardLearningStars === "function") {
            awardLearningStars(1, "Animal Sounds");
        }

        animalQuestionIndex++;

        setTimeout(showAnimalSoundQuestion, 1200);
    } else {
        animalSoundsFeedback.textContent =
            "Good try! Listen again and choose another animal.";
    }
}

function finishAnimalSoundsRound() {
    currentAnimalQuestion = null;

    animalQuestionCounter.textContent = "Round complete!";

    animalSoundsFeedback.textContent =
        `You got ${animalCorrectAnswers} out of 5 questions right!`;

    playAnimalSoundButton.textContent = "Play Another Round";
    animalSoundsFeedback.setAttribute("role", "status");
}

playAnimalSoundButton.addEventListener("click", function () {
    if (!currentAnimalQuestion) {
        startAnimalSoundsRound();
    } else {
        playCurrentAnimalSound();
    }
});
