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
  

}



/*-------------------------------- Event Listeners ----------------------------*/

for (let oneCard of cards) {
  oneCard.addEventListener("click", handleCardClick)
}
