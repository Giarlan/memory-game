const FRONT = "card-front";
const BACK = "card-back";

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

createCardsFromTechs(techs);

function createCardsFromTechs(techs) {
    let cards = [];

    for(let tech of techs) {
        cards.push(createPairFromTech(tech));
    }

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
    return tech + parseInt(Math.ramdom() *1000);
}