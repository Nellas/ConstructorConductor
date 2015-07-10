//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var PersonConstructor = function(name, age) {
    this.name = name;
    this.age = age;
};


//Now create three instances of Person with data you make up

var person1 = new PersonConstructor('Hermione', 17);
var person2 = new PersonConstructor('Harry', 17);
var person3 = new PersonConstructor('Albus', 'unknown');


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

PersonConstructor.prototype.sayName = function(name) {
    console.log('\n', this.name);
};


person1.sayName();
person2.sayName();
person3.sayName();
