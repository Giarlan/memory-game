const FRONT = 'card-front';
const BACK = 'card-back';
const CARD = 'card';
const ICON = 'icon';

let techs = [
    'bootstrap',
    'css',
    'html',
    'javascript',
    'jquery',
    'nodejs',
    'reactjs',
    'git',
    'angular',
    'vuejs'
];

let cards = null;

startGame();

function startGame() {
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    console.log(cards);

    initializeCards(cards);
}

function initializeCards(cards) {
    let gameBoard = document.getElementById('gameBoard');

    cards.forEach( card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })

}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement);    
    createCardFace(BACK, card, cardElement);  
}

function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = '../assets/images/' + card.icon + '.png';
        cardElementFace.appendChild(iconElement);
    } else {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = '../assets/images/restart.png';
        cardElementFace.appendChild(iconElement);
    }
    element.appendChild(cardElementFace);

}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let ramdomIndex = 0;

    while(currentIndex !== 0) {
        ramdomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [cards[ramdomIndex], cards[currentIndex]] = [cards[currentIndex], cards[ramdomIndex]];
    }
}

createCardsFromTechs(techs);

function createCardsFromTechs(techs) {
    let cards = [];

    techs.forEach( (tech) => {
        cards.push(createPairFromTech(tech));
    })

    return cards.flatMap(pair => pair);
}

function createPairFromTech(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    },
    {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() *1000);
}

function flipCard() {

    this.classList.add('flip');

}