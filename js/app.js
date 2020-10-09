console.log('Sanity Check!');

// Create Start Game Button
let buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'buttonContainer');
document.body.appendChild(buttonContainer);

let startButton = document.createElement('button');
startButton.setAttribute('class', 'startButton');
buttonContainer.appendChild(startButton);
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


let refreshButton = document.createElement('button');
refreshButton.setAttribute('class', 'refreshButton');
buttonContainer.appendChild(refreshButton);
const buttonRefresh = document.querySelector('.refreshButton');

const reload = () => {
    window.location.reload();
}
buttonRefresh.addEventListener('click', reload);


// Create timer Container and Element
let timerContainer = document.createElement('div');
timerContainer.setAttribute('class', 'timerContainer');
document.body.appendChild(timerContainer);
let timer = document.createElement('div');
timer.setAttribute('class', 'timer');
timer.innerHTML = "Will you make it everywhere?";
timerContainer.appendChild(timer);
let timerCount, timerId;


function setUpTimer(whateverTime) {
    // setInterval(function, 1000(time))
    timerCount = whateverTime;
    timerId = setInterval(()=> {
        timerCount--;
        // what do we do each second?
        if(timerCount===0) {
            alert(`Let's do it again soon!`);
            clearInterval(timerId);
        /*    setTimeout(function(){
                window.location.reload();
            }, 3000);  */
        }
        const timerText = document.querySelector('.timer');
        timerText.innerHTML = `Will you make it everywhere? ${timerCount} seconds left`;
    }, 1000);
        // get it to show up on the DOM
        const timerText = document.querySelector('.timer');
        timerText.innerHTML = `Will you make it everywhere? ${timerCount} seconds left`;
}

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

// Create Game Container
let gameContainer = document.createElement('div');
gameContainer.setAttribute('class', 'gameContainer');
document.body.appendChild(gameContainer);

// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class', 'scoreContainer');
document.body.appendChild(scoreContainer);

// Create Player Score
let playerScore = document.createElement('div');
playerScore.setAttribute('class', 'playerScore');
playerScore.innerHTML = "You made it to 0 places!";
scoreContainer.appendChild(playerScore);

// Game object
let game = {
    playerScore: 0,
    deck: [],
    playerSelection: [],
    
// Get Cards Method
    // Create a function to analyze the card images.
    getCards: function() {
        // let tempDeck = [];
        for(let i=2; i<10; i++){
            const cardImg = document.createElement('img');
            cardImg.setAttribute('class', 'gameCard')
            cardImg.setAttribute('src', `./images/card10.png`);
            cardImg.setAttribute('value', i);
            cardImg.value = i;
            this.deck.push(cardImg);
            // tempDeck.push(cardImg);
        }
        for(let j=2; j<10; j++){
            const cardImg2 = document.createElement('img');
            cardImg2.setAttribute('class', 'gameCard')
            cardImg2.setAttribute('src', `./images/card10.png`);
            cardImg2.setAttribute('value', j);
            cardImg2.value = j;
            this.deck.push(cardImg2);
        }
        // this.deck = tempDeck.concat(tempDeck);
        // console.log('current deck', this.deck);
/*        for(let k=0; k<this.deck.length; k++){
            // this.deck[k].setAttribute('id', k);
            // Setup on-click event listener here
            this.deck[k].addEventListener('click', handleClick);
        }
        // console.log(tempDeck);
        console.log(this.deck);     */
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

    selectCards: function() {
        for(let k=0; k<this.deck.length; k++){
            this.deck[k].setAttribute('id', k);
            // Setup on-click event listener here
            game.deck[k].addEventListener('click', handleClick);
        }
        
    }

}

// Select Cards Method 
    // const cardButton = document.createElement('button');
    // cardButton.setAttribute('class', 'cardButton');
    // scoreContainer.appendChild(cardButton);

    // const backCard = document.createElement('div');
    // backCard.setAttribute('class', 'backCard');
    // document.body.appendChild(backCard);

    // const backCardImg = document.createElement('img');
    // backCardImg.setAttribute('src', './images/card10.png');
    // backCard.appendChild(backCardImg);


// let firstCard = document.createElement('div');
// firstCard.setAttribute('class', 'firstCard');
// firstCard.setAttribute('value', '');
// gameContainer.appendChild(firstCard);


const handleClick = (event) => {
    // console.log('hello world');
    // const cardSelect = document.querySelector('img').getAttribute('src');
    // const cardSelect = document.getElementById('container');
    // cardSelect.classList.toggle('backCard');
    // cardSelect.toggle('src', './images/card10.png');
    // let cardClicks = [];
    let cardValue = event.target.getAttribute('value');
    event.target.setAttribute('src', `./images/card${cardValue}.png`);
    // let selectOne = (document.querySelector('.gameCard').getAttribute('value'));
    // console.log(cardValue);
    game.playerSelection.push(event.target);
    // console.log(game.playerSelection);
    if(game.playerSelection.length === 2){
        if(game.playerSelection[0].getAttribute('value') == game.playerSelection[1].getAttribute('value')){
            game.playerScore++;
            // console.log(game.playerScore);
            let newScoreInnerHTML = `You made it to ${game.playerScore} places!`;
            playerScore.innerHTML = newScoreInnerHTML;
            game.playerSelection.shift();
            game.playerSelection.shift();
            // console.log(game.playerSelection);
            if(game.playerScore === 8){
                alert('You made it!');
                // remove all cards from the container
                // let myCards = document.querySelectorAll('img');
                // for(let i=0; i<16; i++){
                    // myCards[i].remove();
                // }
                clearInterval(timerId);
                // setTimeout(function(){
                    // window.location.reload();
                // }, 5000);
                // button.addEventListener('click', newGame);
                buttonRefresh.addEventListener('click', reload);
            }

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

// Check Score Method
// When player selects first card = get value and set to const
// When player selects second card = get value and set to const
// If first card value === second card value, 
// then keep images facing up
// this.playerScore++;
// let newScoreInnerHTML = `Score: ${this.playerScore}`;
// console.log(newScoreInnerHTML);
// playerScore.innerHTML = newScoreInnerHTML;


// When player selects first card = get value and set to const
// When player selects second card = get value and set to const
// If first card value !== second card value,
// then change back to card10.png

/*score: function() {
    let card1 = 
    // if()
}*/



// game.getCards();
// game.shuffle();
// game.dealCards();
// game.selectCards();