let cards = []
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// getRandomcard fxn:
function getRandomCard() {
     let randomNumber = Math.floor(Math.random()*13) + 1;
     return randomNumber;
    }

// startGame fxn: 
 function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  console.log(firstCard, secondCard);
  console.log(sum, typeof firstCard);
  
  renderGame()
}

// rendergame fxn.
function renderGame() {
  let cardsText = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsText += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true; 
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  console.log(cardsText)
  cardsEl.textContent = cardsText;
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message; 

}

// Newcard fxn:
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }

    // console.log(cards)
}