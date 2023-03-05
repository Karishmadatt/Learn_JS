// Constructor and new operator 

const Person = function(name , Birthyear){
    this.name = name;
    this.Birthyear = Birthyear;
    // creating a function or a method inside a constructor function is not a good practice because while creating an instance every
    // instance will have a copy of the method and suppose 1000 method is created in the constructor function then evey instance will
    // carry the 1000 function copy.
    // The solution to this is create a prototype of constructor class.
};

const test1 = new Person('Karishma',2000);
console.log(test1);

// First letter of the constructor function should be always in capital.
// steps
// 1 New instance {} is created.
// 2. function is called and this will point to {}.
// 3.{}  linkage to prototype 
// 4. function automatically return {}.
console.log(test1 instanceof Person);

// prototype
//Each object created by constructor class will now get access to all the methods of this prototype
// property

Person.prototype.calage = function(){
    console.log(2023-this.Birthyear);
}
test1.calage();
console.log(test1.__proto__);//JS set the protoproperty of objects to the prototype of constructor function.
console.log(test1.__proto__ === Person.prototype);//true
console.log(Person.prototype.isPrototypeOf(test1));//true
console.log(Person.prototype.isPrototypeOf(Person));//false
Person.prototype.species = 'Homo Sapiens';
console.log(test1.species);