//an anonymous function with zero arguments!
// var myFunc = function() {
// console.log('anonymous function is werkin.. sike');
//
// };
//doesn't show up because: 1) there's a new scope, 2) you have to CALL that function
//it exists, but JS doesn't know to use it yet

          //ex, real-world implementation
          //compare password for this user w/ one given
// var userLogin = function(username, password) {
//}


//named function EX
//argument names are arbitrary, but what does matter is that when you call the function, you have to be mindful of vals you pass in
// function myMagicFunction(argument1, argument2) {
//   console.log(`${argument1} is better than ${argument2}`);
// };
//
// myMagicFunction("Coffee", "Tea");


//------------------------------------------in-class instructional stuff-------------------------------------------
// function callMyself(number) {
//     if(number >== 0) {
//       number--;
//       console.log(number);
//     } else {
//       return
//     }
// }
//
// //fat arrow function
// (number) ==> {
//   if (number >== 0) {
//     number--:
//     console.log(number);
//   } else {
//     return
//   }
// }
//
// //if we want function to give us back something or do a calculation
// //function keyword gives away the fact it's a declaration and not a call
// function givesMeBestNumber(number){
//   if(number === 42) {
//     return `${number} is the best number.. ever!`
//   } else {
//     alert(`${number} sucks!!`);
//   }
// }
//
//
//
//
// //gets access to #
// let message = givesMeBestNumber(42);
// alert(message);







//-------------------------try it out: calculate dog's age-----------------------

      //--fancy ryeker version--
const dogAge = prompt("How old is your dog?", 3);
//this is the declaration/definition of the function
function calcDogYears(age) {
  parseInt(age);
//returns true if it is NOT a number
    if(isNaN(age)) {
//if the user gives me a non-number.....
  calcDogYears(prompt('Nah dog, seriously. Let\'s get numerical.'))
} else {
    alert(age *= 7); //this is age = age * 7 (WOOHOO)
  }
}

calcDogYears(dogAge);

//METHOD V FUNCTION (2018)
var myString = "croissant";
myString.toUpperCase(); //method is always attached.. "something .methodCall (whatever it is, this is just arbitrary for notes lol)"
//above, myString is the object. the syntax will go object.method


//------------------------lifetime supply example (non-functioning)------------------------------------
//Now, write a function that tells you what a "lifetime supply" will be for any product. It should:
//Accept 2 arguments (age of person now, amount of product per day).
// const yearsOld = prompt("How old are you? Bluffing's allowed but not recommended.", 21);
// const pAmount = prompt("How much of your favorite product do you use a day? Just enter a numerical value", 7);
// //Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// function calcLifeSup(age, amount) {
//   parseInt(age);
//   parseInt(amount);
//   if(isNaN(age)) && (isNaN(amount)); {
//     calcLifeSup(prompt("I'm just trying to help you out! Try again."));
//   } else {
// //Alert the answer in this format: "You will need x to last you until you're y.
//     alert(`You will need ${productAmount} to last you until you're ${yearsOld}`);
//   }
// }
//
// calcLifeSup(yearsOld, pAmount);
//BONUS: write it to accept a dynamic max age.

//------------------REAL lifetime supp example-------------------
/*
Accept 2 arguments (age of person now, amount of product per day).
Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
Alert the answer in this format: "You will need x to last you until you're y.
*/

function calcLifetimeSupply(age, perDay) {
  let testArr = [age, perDay];
  if(testForInts(testArr)) {
    var lifeTime = (80 - age) * (365 * perDay);
    alert(`you will need ${lifeTime} ${supplyOf} to last until you're 80.`);
  } else {
    var age = prompt("How old are you?");
    var daily = prompt("How much do you use per day?");
    lifeTime = calcLifetimeSupply(age, daily);
  }
}

var supplyOf = prompt("What do you want a lifetime supply of?", 'hamburgers');
var age = prompt("How old are you?");
var daily = prompt("How much do you use per day?");
var lifeTime;

// calcLifetimeSupply(age, daily);

//Test my inputs
function testForInts(args) {
  var passed = true;
  for(let i = 0; i < args.length; i++) {
    if(isNaN(parseInt(args[i]))) {
      passed = false;
    }
  }
  return passed;
}



// BONUS: write it to accept a dynamic max age.

function calcLifetimeSupplyWithMaxAge(age, perDay, ageOfDeath) {
  console.log('in right fn');
  let testArr = [age, perDay, ageOfDeath]
  if(testForInts(testArr)) {
    var lifeTime = (ageOfDeath - age) * (365 * perDay);
    alert(`You will need ${lifeTime} ${supplyOf} to last until you're ${ageOfDeath}.`);
  } else {
    var age = prompt("How old are you?");
    var daily = prompt("How much do you use per day?");
    var ageOfDeath = prompt("how old you gonna life to?");
    lifeTime = calcLifetimeSupplyWithMaxAge(age, daily, ageOfDeath);
  }
}

var death = prompt("How old will you be doe?");

calcLifetimeSupplyWithMaxAge(age, daily, death);
