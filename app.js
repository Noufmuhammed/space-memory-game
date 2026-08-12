console.log("JavaScript is working")

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let flippedCards = []
let matchedCards = []

/*------------------------ Cached Element References ------------------------*/
const cards = document.querySelectorAll(".card")

console.log(cards)

/*-------------------------------- Functions --------------------------------*/

function handleCardClick(event) {
    const clickedCard = event.target.closest(".card")

    console.log("Card clicked")
    console.log(event.target)
    console.log(event.target.id)

    if (flippedCards.length === 2) {
        return
    }

    if (matchedCards.includes(clickedCard)) {
        return
    }

    if (flippedCards.includes(clickedCard)) {
        return
    }

    flippedCards.push(clickedCard)
    console.log(flippedCards)

    clickedCard.children[0].style.display = "none"

    if (flippedCards.length === 2) {
        if (
            flippedCards[0].querySelector("img").id ===
            flippedCards[1].querySelector("img").id
        ) {
            console.log("Match!")

            matchedCards.push(flippedCards[0])
            matchedCards.push(flippedCards[1])

            flippedCards = []

        } else {
            console.log("Not a match!")

            const firstCard = flippedCards[0]
            const secondCard = flippedCards[1]

            setTimeout(function() {
                firstCard.querySelector("img").style.display = "block"
                secondCard.querySelector("img").style.display = "block"
                flippedCards = []
            }, 1000)
        }
    }
}

/*-------------------------------- Event Listeners ----------------------------*/

for (let oneCard of cards) {
    oneCard.addEventListener("click", handleCardClick)
}