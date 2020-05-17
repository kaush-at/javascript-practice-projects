const wordEl = document.getElementById("word");
const wrongLetterEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "wizard", "interface"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// let correctLetters = ["w", "i", "z", "a", "r", "d"];
let correctLetters = [];
let wrongLetters = [];

// show the hidden word
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letters"> 
      ${correctLetters.includes(letter) ? letter : ""} 
      </span>`
    )
    .join("")}`;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = `Congrtulations..!, You won.`;
    popup.style.display = "flex";
  }
}

//update wrong letters
function updateWrongLetterEl() {
  wrongLetterEl.innerHTML = `${wrongLetters.length > 0 ? `<p>Wrong</p>` : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}`;

  figureParts.forEach();
}

// show notification function
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLetterEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();
