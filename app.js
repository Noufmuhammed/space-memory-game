console.log("JavaScript is working")

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let flippedCards = []
let matchedCards = []
let attempts = 0
const maxAttempts = 20
let pairsMatched = 0

/*------------------------ Cached Element References ------------------------*/
const cards = document.querySelectorAll(".card")
const resetBtn = document.querySelector("#resetBtn")
const attemptsBox = document.querySelector("#attemptsBox")
const pairsBox = document.querySelector("#pairsBox")
const winMessage = document.querySelector("#winMessage")
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
        attempts++
        attemptsBox.textContent = `Attempts: ${attempts} / ${maxAttempts}`

        if (attempts === maxAttempts) {
            return
        }

        if (
            flippedCards[0].querySelector("img").id ===
            flippedCards[1].querySelector("img").id
        ) {
            console.log("Match!")

            pairsMatched = pairsMatched + 1
            pairsBox.textContent = `Pairs Matched: ${pairsMatched} / 8`
            if (pairsMatched === 8) {
            winMessage.textContent = "You Won! You matched all 8 pairs!🎉"
            winMessage.style.display = "block"
            }


            matchedCards.push(flippedCards[0])
            matchedCards.push(flippedCards[1])

            flippedCards = []
        }
         else {
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

function resetGame() {
    flippedCards = []
    matchedCards = []
    attempts = 0
    pairsMatched = 0

    attemptsBox.textContent = `Attempts: ${attempts} / ${maxAttempts}`
    pairsBox.textContent = `Pairs Matched: ${pairsMatched} / 8`
    winMessage.textContent = ""
    winMessage.style.display = "none"
    for (let oneCard of cards) {
        oneCard.querySelector("img").style.display = "block"
    }

    shuffleCards()
}

function shuffleCards() {
    const cardArray = Array.from(cards)

    function randOrd() {
        return Math.round(Math.random()) - 0.5
    }

    cardArray.sort(randOrd)

    const gameBoard = document.querySelector(".game-board")

    for (let oneCard of cardArray) {
        gameBoard.appendChild(oneCard)
    }
}

/*-------------------------------- Event Listeners ----------------------------*/

for (let oneCard of cards) {
    oneCard.addEventListener("click", handleCardClick)
}

resetBtn.addEventListener("click", resetGame)

shuffleCards()