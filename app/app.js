/* global prompt:true */
var prompt = require('sync-prompt').prompt;
'use strict';
var dog = {age: 5, 
           breed: 'poodle',
};

dog.color = 'white';
dog.gender = 'f';
dog.isFunny = true;
dog.toys = ['ball', 'bone'];
dog.bark = function(){ console.log('Woof woof');} ;

console.log(dog.color);
dog.bark();

var dog2 = {name: 'Fido',
            age: 6,
            breed: 'Poodle',
            gender: 'male'
};



var dog3 = {gender: 'male'};
var name = prompt('What is your dog\'s name:?: ');
dog3.name = name;

console.log(dog3.name);

var supDogs = [];
var menu = prompt('What you like to create a new dog? (y) or (n): ');
var addAge, addGender, addName; 

while(menu !== 'q'){
  var newDog = {};
  if(menu === 'y'){
    addAge = prompt('Age : ');
    addAgg = parseInt(addAge);
    addGender = prompt('Gender: ');
    addName = prompt('Name: ');
    newDog = {age:addAge, gender:addGender, name:addName};
  }
  supDogs.push(newDog);
  
  menu = prompt('What you like to create a new dog? (y) or (q): ');
}
console.log(supDogs);



