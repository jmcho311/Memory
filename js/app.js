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


// const cardButton = document.createElement('button');
// cardButton.setAttribute('class', 'cardButton');
// scoreContainer.appendChild(cardButton);

// const backCard = document.createElement('div');
// backCard.setAttribute('class', 'backCard');
// document.body.appendChild(backCard);

// const backCardImg = document.createElement('img');
// backCardImg.setAttribute('src', './images/card10.png');
// backCard.appendChild(backCardImg);

const handleClick = (event) => {
    console.log('hello world');
    // const cardSelect = document.querySelector('img').getAttribute('src');
    // const cardSelect = document.getElementById('container');
    // cardSelect.classList.toggle('backCard');
    // cardSelect.toggle('src', './images/card10.png');
    const value = event.target.getAttribute('value');
    event.target.setAttribute('src', `./images/card${value}.png`);
}

let game = {
    playerScore: 0,
    deck: [],
    
// Get Cards Method
    // Create a function to analyze the card images.
    getCards: function() {
        // let tempDeck = [];
        for(let i=2; i<10; i++){
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', `./images/card10.png`);
            cardImg.setAttribute('value', i);
            cardImg.value = i;
            this.deck.push(cardImg);
            // tempDeck.push(cardImg);
        }
        for(let j=2; j<10; j++){
            const cardImg2 = document.createElement('img');
            cardImg2.setAttribute('src', `./images/card10.png`);
            cardImg2.setAttribute('value', j);
            cardImg2.value = j;
            this.deck.push(cardImg2);
        }
        // this.deck = tempDeck.concat(tempDeck);
        // console.log('current deck', this.deck);
        for(let k=0; k<this.deck.length; k++){
            this.deck[k].setAttribute('id', k);
            // Setup on-click event listener here
            this.deck[k].addEventListener('click', handleClick);
        }
        // console.log(tempDeck);
        console.log(this.deck);
    },    

// Shuffle Method 
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

// Deal Cards Method to show card images in the grid
    dealCards: function() {
        // console.log(this.deck.length);
        for(let i=0; i<this.deck.length; i++){
            container.appendChild(this.deck[i]);
        }
        // console.log(this.deck);
    },

// Select Cards Method 

}

game.getCards();
game.shuffle();
game.dealCards();
