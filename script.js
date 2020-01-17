const pope = {
    name: "Francis",
    age: 83,
    hasTallHat: true,
    bless: function(blessee){
        console.log(`I bless you, ${blessee}`);
    }
};

console.log(`The Pope is named ${pope.name}. He is ${pope.age} years old`);

pope.bless("Bryan");