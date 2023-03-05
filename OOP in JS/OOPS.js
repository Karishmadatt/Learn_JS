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

// coding challege - 1
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

const Create = function(car,speed){
    this.car = car;
    this.speed = speed; 
};

Create.prototype.accelerate = function(){
    console.log(this.speed+=10);
    
};

Create.prototype.brake = function(){
    console.log(this.speed-=5);
};

const d1 = new Create('BMW',120);
const d2 = new Create('Mercedes',95);
console.log(d1,d2);
d1.accelerate();
d2.brake();