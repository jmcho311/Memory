console.log('Sanity Check!');

// Create Start Game Button
let startButton = document.createElement('button');
startButton.setAttribute('class', 'startButton');
document.body.appendChild(startButton);
const button = document.querySelector('button');
button.addEventListener('click', function(event){
    game.getCards();
    game.shuffle();
    game.dealCards();
});


// Create container element
let container = document.createElement('div');
container.setAttribute('class', 'container');
// Append to DOM
document.body.appendChild(container);

// Create card elements
/*let gameCard = document.createElement('img');
gameCard.setAttribute('class', 'gameCard');
gameCard.setAttribute('src', './images/card2.png');
// Append to Container
container.appendChild(gameCard);*/

// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class', 'scoreContainer');
document.body.appendChild(scoreContainer);

// Create Player Score
let playerScore = document.createElement('div');
playerScore.setAttribute('class', 'playerScore');
playerScore.innerHTML = "Score: 0";
scoreContainer.appendChild(playerScore);

// Game object
const handleClick = () => {
    console.log('hello world');
}

let game = {
    playerScore: 0,
    deck: [],
    


// Get Cards Method
    // Create a function to analyze the card images.
    getCards: function() {
        let tempDeck = [];
        for(let i=2; i<8; i++){
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', `./images/card${i}.png`);
            cardImg.setAttribute('class', `card-${i}`);
            tempDeck.push(cardImg);
        }

        this.deck = tempDeck.concat(tempDeck);
        for(let j=0; j<this.deck.length; j++){
            this.deck[j].setAttribute('id', j);
            // Setup on-click event listener here
            this.deck[j].addEventListener('click', handleClick);
        }
        // console.log(tempDeck);
        console.log(this.deck);
    },
    

    shuffle: function() {
        // for(let i=0; i<this.deck.length; i++){
        for(let i=this.deck.length-1; i>0; i--){
            const j=Math.floor(Math.random()*i);
            const temp=this.deck[i];
            this.deck[i]=this.deck[j];
            this.deck[j]=temp;
        }
        // console.log(this.deck);
    },

// Deal Cards method to show card images in the grid
    dealCards: function() {
        // console.log(this.deck.length);
        for(let i=0; i<this.deck.length; i++){
            container.appendChild(this.deck[i]);
        }
        // console.log(this.deck);
    }


}

game.getCards();
game.shuffle();
game.dealCards();
