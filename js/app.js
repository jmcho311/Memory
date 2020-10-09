// console.log('Sanity Check!');

// Create buttonContainer class
let buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'buttonContainer');
document.body.appendChild(buttonContainer);


// Add startButton to buttonContainer
let startButton = document.createElement('button');
startButton.setAttribute('class', 'startButton');
buttonContainer.appendChild(startButton);

// Create 'click' newGame eventListener
const buttonStart = document.querySelector('.startButton');
const newGame = () => {
    game.getCards();
    game.shuffle();
    game.dealCards();
    game.selectCards();
    setUpTimer(45);
    buttonStart.removeEventListener('click', newGame);
}
buttonStart.addEventListener('click', newGame);


// Add refreshButton to buttonContainer
let refreshButton = document.createElement('button');
refreshButton.setAttribute('class', 'refreshButton');
buttonContainer.appendChild(refreshButton);

// Create 'click' reload game eventListener
const buttonRefresh = document.querySelector('.refreshButton');
const reload = () => {
    window.location.reload();
}
buttonRefresh.addEventListener('click', reload);


// Create timerContainer and timer element
let timerContainer = document.createElement('div');
timerContainer.setAttribute('class', 'timerContainer');
document.body.appendChild(timerContainer);
let timer = document.createElement('div');
timer.setAttribute('class', 'timer');
timer.innerHTML = "Will you make it everywhere?";
timerContainer.appendChild(timer);

// Create timer function
let timerCount, timerId;
function setUpTimer(whateverTime) {
    timerCount = whateverTime;
    timerId = setInterval(()=> {
        timerCount--;
        if(timerCount===0) {
            alert(`Come visit again soon!`);
            clearInterval(timerId);
        }
        const timerText = document.querySelector('.timer');
        timerText.innerHTML = `Will you make it everywhere? ${timerCount} seconds left`;
    }, 1000);
        const timerText = document.querySelector('.timer');
        timerText.innerHTML = `Will you make it everywhere? ${timerCount} seconds left`;
}


// Create container element
let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);


// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class', 'scoreContainer');
document.body.appendChild(scoreContainer);

// Add playerScore to scoreContainer
let playerScore = document.createElement('div');
playerScore.setAttribute('class', 'playerScore');
playerScore.innerHTML = "You made it to 0 places!";
scoreContainer.appendChild(playerScore);


// Game object
let game = {
    playerScore: 0,
    deck: [],
    playerSelection: [],
    
// Get Cards function to create card images, src, value and to create deck.
    // Also creating a second set of the same src but with a different value
    // and pushing to the same deck to create 16 cards with only 8 card images.
    getCards: function() {
        for(let i=2; i<10; i++){
            const cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'gameCard')
            cardImg.setAttribute('src', `./images/card10.png`);
            cardImg.setAttribute('value', i);
            cardImg.value = i;
            this.deck.push(cardImg);
        }
        for(let j=2; j<10; j++){
            const cardImg2 = document.createElement('img');
            cardImg2.setAttribute('class', 'gameCard')
            cardImg2.setAttribute('src', `./images/card10.png`);
            cardImg2.setAttribute('value', j);
            cardImg2.value = j;
            this.deck.push(cardImg2);
        }
    },    

// Shuffle function to random shuffle the deck of 16 cards.
    shuffle: function() {
        for(let i=this.deck.length-1; i>0; i--){
            const j=Math.floor(Math.random()*i);
            const temp=this.deck[i];
            this.deck[i]=this.deck[j];
            this.deck[j]=temp;
        }
    },

// Deal Cards function to show card images in the grid, using DOM, for loop
    // and deck length.
    dealCards: function() {
        for(let i=0; i<this.deck.length; i++){
            container.appendChild(this.deck[i]);
        }
    },

// Select Cards function by placing 'click' eventListener on every card
    // in the deck array and calling handleClick function
    selectCards: function() {
        for(let k=0; k<this.deck.length; k++){
            game.deck[k].addEventListener('click', handleClick);
        }
        
    }
}


// Game Play function
    // With every 'click', accesses this handleClick function and
    // setAttribute to reveal image of the card and
    // pushes the image element into a new playerSelection array
const handleClick = (event) => {
    let cardValue = event.target.getAttribute('value');
    event.target.setAttribute('src', `./images/card${cardValue}.png`);
    game.playerSelection.push(event.target);

    // Game Scoring functions
        // Accessing card value from playerSelection array index 0 and 1 = first click, second click
        // If ===, playerScore increases by one and innerHTML updated to show in game
        // .shift() twice on playerSelection array to remove and refresh for next player clicks
    if(game.playerSelection.length === 2){
        if(game.playerSelection[0].getAttribute('value') == game.playerSelection[1].getAttribute('value')){
            game.playerScore++;
            let newScoreInnerHTML = `You made it to ${game.playerScore} places!`;
            playerScore.innerHTML = newScoreInnerHTML;
            game.playerSelection.shift();
            game.playerSelection.shift();

            // If playerScore matches all 8 pairs, alert pops up and
                // stop timer and activate 'click' reload button
            if(game.playerScore === 8){
                alert('What a great trip!');
                clearInterval(timerId);
                buttonRefresh.addEventListener('click', reload);
            }

        // If !==, setAttribute src of cards back to card10 image and
            // .shift() twice on playerSelection array to remove and refresh for next player clicks
            // wrap all around a timeout function to delay resetting card images
        } else if(game.playerSelection[0].getAttribute('value') != game.playerSelection[1].getAttribute('value')){
            setTimeout(function(){
                game.playerSelection[0].setAttribute('src', './images/card10.png');
                game.playerSelection[1].setAttribute('src', './images/card10.png');
                game.playerSelection.shift();
                game.playerSelection.shift();
            }, 750);
            
        }
    }   
}