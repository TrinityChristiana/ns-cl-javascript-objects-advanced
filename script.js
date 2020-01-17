const pope = {
    name: "Francis",
    age: 83,
    hasTallHat: true,
    bless: function(blessee){
        console.log(`I bless you, ${blessee}`);
    },
    celebrateBirthday: function() {
        console.log(`Yay!`);
        this.age++;
    }
};

const tellMeAboutThePope = () => {
    console.log(`The Pope is named ${pope.name}. He is ${pope.age} years old`);
};

tellMeAboutThePope();
pope.bless("Bryan");
pope.celebrateBirthday();
tellMeAboutThePope();