const pope = {
    name: "Francis",
    age: 83,
    hasTallHat: true,
    baseballCards: [],
    bless: function(blessee){
        console.log(`I bless you, ${blessee}`);
    },
    celebrateBirthday: function() {
        console.log(`Yay!`);
        this.age++;
    },
    addCard: function (card) {
        this.baseballCards.push(card);
    },
    displayCards: function() {
        for (let i = 0; i < this.baseballCards.length; i++){
            console.log(this.baseballCards[i]);
        }
    }
};

const tellMeAboutThePope = () => {
    console.log(`The Pope is named ${pope.name}. He is ${pope.age} years old`);
};

tellMeAboutThePope();
pope.bless("Bryan");
pope.celebrateBirthday();
pope.celebrateBirthday();
pope.celebrateBirthday();
pope.celebrateBirthday();
tellMeAboutThePope();

pope.displayCards();