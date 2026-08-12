console.log("JavaScript is working")
/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
let flippedCards = []


/*------------------------ Cached Element References ------------------------*/
const cards = document.querySelectorAll(".card")


console.log(cards)

/*-------------------------------- Functions --------------------------------*/     
function handleCardClick(event) {
  console.log("Card clicked")
  console.log(event.target)
  console.log(event.target.id)

  if (flippedCards.length === 2) {
    return
  }

  flippedCards.push(event.target)
  console.log(flippedCards)

  event.target.style.display = "none"

  if (flippedCards.length === 2) {
    if (flippedCards[0].id === flippedCards[1].id) {
      console.log("Match!")
      flippedCards = []
    } else {
      console.log("Not a match!")

      setTimeout(function() {
        flippedCards[0].style.display = "block"
        flippedCards[1].style.display = "block"
        flippedCards = []
      }, 1000)
    }
  }
}



/*-------------------------------- Event Listeners ----------------------------*/

for (let oneCard of cards) {
  oneCard.addEventListener("click", handleCardClick)
}
