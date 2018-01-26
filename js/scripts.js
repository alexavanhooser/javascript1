//day 3 branch

//DAY 2 TAKE HOME SECTION
//asks for first name
    //var firstName = prompt("What's your first name?", "Poe");
// logs user's first name into console
      //console.log(firstName);
//asks for last name
    //var lastName = prompt("Now, state your last name.", "Dameron");
//alerts last name
    //alert(lastName);
//asks user birthday
  //let birthday = prompt("When were you born?", "Please use the following format: 1/24/56");
//alert: their birthday
  //confirm (new Date(birthday));

//logical operators example. this returns as true
  //var bestNumber = "";
  //console.log(!bestNumber);

//var bestNumber = "";
// this is asking whether it comes back as falsy due to the !
//console.log(!firstname && !lastName);

//checking to see if they're loosely equal (VALUE)
var string = "1";
var number = 1;
console.log(string == number);
    //this is TRUTHY

//checking to see if they're strictly equal (type AND value)
var string = "1";
var number = 1;
console.log(string === number);
    //this is FALSY

//checking to see if they're strictly not equal to each other
var string = "1";
var number = 1;
console.log(string !== number);
    //this is truthy

//checking to see if they're loosely not equal to each other
var string = "1";
var number = 1;
console.log(string !== number);
    //this is falsy

//object comparisons
  //let obj1 = {name: "Alexa"};
  //let obj2 = {name: "Alexa"};
  //console.log(obj1 === obj2);

//asks for first name
    //var firstName = prompt("What's your first name?", "Poe");
// logs user's first name into console
    //console.log(firstName);
//asks for last name
  ///var lastName = prompt("Now, state your last name.", "Dameron");
//alerts last name
    //alert(lastName);
//asks user birthday
  //let birthday = prompt("When were you born?", "Please use the following format: 1/24/56");
//alert: their birthday
    //confirm (new Date(birthday));

//in-class challenge
    //var first = "my brain hurts";
    //var second = new String("my brain hurts");
//checking to see if strictly equal
    //console.log(first === second);
    //console.log(first == second); //checking to see if loosely equal

//fancy ryeker formatting, but it's the same goal
    //var primitive = "Hello World!";
    //var stringObject = new String ("Hello World!");
//console.log(primitive == stringObject); //true
  //console.log(typeof(primitive));
//  console.log(typeof(stringObject));
//console.log(primitive === stringObject); //false

//using variables with the yucky arithmetic operators
    //var number1 = 12;
    //var number2 = 33;
    //console.log(number1 * number2);

//modulo (%): gives you remainder
    //var number1 = 12;
    //var number2 = 33;
    //console.log(number1 % number2);


//incrementor
    //var number1 = 12;
    //var number2 = 780;
    //number1 ++; //useful for loops
    //console.log(isNaN(number1));
    //console.log(number1);

//assignment operators
    //var number1 = 12;
    //var number2 = 780;
    //number1 += 12; //number1 equals itself to what is on the other side
//this statement CHANGES the value of number1
    //console.log(number1);

//in class challenge (night 3)
//Prompt for a number value (provide a default of 10)
//   var number1 = prompt("Please enter a number value.", "10");
// //Prompt for a second number value (provide a default of 10)
//   var number2 = prompt("Provide a second number value.. for science.", "10");
// //Convert the prompted values into integers
// number1 = new Number(number1);
// number2 = new Number(number2);
// //Add the numbers together and alert the user with the result
//
//
//
//
//
// //day 3 ending stuff, one statement is being evaluated
// const bestMovie = "star wars";
// //this checks if the string is a string
// if(typeof(bestMovie) === 'string') {
//   alert('wow i love strings');
// } else {
//   alert("not a string");
// } //no semicolon because JS doesn't consider it to be a terminated statement


//this demonstrates evaluating multiple statements
 // const bestMovie = [];
 // bestMovie !== undefined ? alert('it exists!') : alert('exists');
// //this checks if the string is a string
// if(typeof(bestMovie) === 'string') {
//   alert('wow i love strings');
// } else if(typeof(bestMovie) === 'number'){
//   alert('thanks for the number');
// } else {
//   alert("not a string");
// } //no semicolon because JS doesn't consider it to be a terminated statement



//switch statement example
// switch(typeof(bestMovie)) {
//   //this is looking for the case of a  string
//   case 'string':
//     alert('yay, string city');
//     //this signals js to stop looking for other cases
//     //if it's false it'll keep going
//     break;
//   case 'number':
//     alert('woohoo, i love math! not really though');
//     break;
//   case 'boolean':
//     alert('true or false? this is a boolean');
//     break;
//   case 'object':
//     alert('this is an object');
//     break;
//   default:
//   case 'array':
//     alert('ya boi, an array');
//   break;
//
// }

//try it out day 3
//Asks for the user's age using the Date object.
var userAge = confirm('Are you over 18?');
//if the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.
if(userAge == true) {
  underEighty= confirm("Are you under 80 years old?");
if(underEighty) {
  var xWing = confirm("Do you like Star Wars?");
  if(xWing) {
    alert("yeah boi");
    }
} else {
  //Do you like prunes?
  confirm("Do you like prunes?");
    }
} else {
  prompt('enjoy your childhood');
}
