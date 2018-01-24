//this is my gh-pages branch
var sentence = "dfjnsdjfnkjs";
//console.log(sentence);
{//Block A
  {//Block B
    {//Block C
      {//Block D

      }
    }
  }
}

{let firstNumber = 22; //Declaration and definition
//  console.log(firstNumber);
}
var secondNumber = 11;
// or
var firstNumber; //declaration
  firstNumber = 22; //definition

firstNumber = "hello government"; // this redefines the variable (woohoo)
//  console.log(firstNumber);

const truth = "trump sucks";
//console.log(truth); //constant

let rightNow = new Date ();
//console.log(rightNow); //gives you current date/time



var iLikePi = Math.PI;
//console.log(iLikePi);//this logs a value of pi rounded off



var string = "yeah boi";

var newString = new String("yeah boi");

//console.log(string.toUpperCase());

//arrays
var myArray = ["Hello World"];
//console.log(myArray.length);

//object
var myObject = {
  myString: "wassup world"
};







//let alertMessage = alert("hello capitalists buy my book");
//let confirmMessage = confirm("et tu, brutus?");

//let promptMessage = prompt("state your opinion on the last jedi", "poe dameron is nice but.. ehhhh");
//console.log(promptMessage);

//TAKE HOME SECTION
//asks for first name
var firstName = prompt("What's your first name?", "Poe");
// logs user's first name into console
  console.log(firstName);
//asks for last name
var lastName = prompt("Now, state your last name.", "Dameron");
//alerts last name
alert(lastName);
//asks user birthday
let birthday = prompt("When were you born?", "Please use the following format: 1/24/56");
//alert: their birthday
confirm (new Date(birthday));
