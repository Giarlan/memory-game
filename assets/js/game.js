let game = {
    techs: [
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
    ],

    cards: null,

    createCardsFromTechs: function() {
        this.cards = [];
    
        this.techs.forEach( (tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })
    
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    createPairFromTech: function (tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() *1000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let ramdomIndex = 0;
    
        while(currentIndex !== 0) {
            ramdomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;
    
            [this.cards[ramdomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[ramdomIndex]];
        }
    }







}