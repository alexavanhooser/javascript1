//querying the DOM practice
//mostly for user interactions or debugging
//this specifies that we wanted to find a h1 tag element.. returns an array of all items w/ specific tag

//can't attach an eventListener to an array
var functionOutside = function(event) {
  console.log(event);
}

var h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('click', functionOutside);




var divClass = document.getElementsByClassName('div');
console.log(divClass);

var id document.getElementById('div');
console.log("id : " + id);

//querySelector practice: querySelectors allow you to do things without the confines of traditional DOM queries (yay ES5)
//querySelector only gets the FIRST instance of this class, Id, whatever.. they're cool because you're not compelled to type out the full "getElementsbyId", etc
//period or hashtag respectively make it a class or an Id
var div1= document.querySelector('div');
div1.addEventListener('mouseeenter', function(){
  div1.style.backgroundColor = "yellow"; //we do everything the same as in CSS, but we camelCase it
  alert('mouse over is working');

div1.addEventListener('mouseleave', function() {
    div1.style.backgroundColor = 'white';
  });
});


//this grabs all instances, not just the first as querySelector does
//you would then use a separate function to loop through all
var iv = document.querySelectorAll('div');
console.log(iv);


//-----------------try it out!----------------------------
//Create a function that queries the DOM for the body tag using all of these methods.
//The function should take 2 arguments:
      //the DOM selector method the user wants to employ
      //and the name of the DOM selector to be searched for.
//these need to be specified in the HTML to mean anything (need to have body classes/Ids/etc)
var userQueryType = prompt('Which type did you want to use?', "Please use either 'tag', 'class', 'id', 'selector', 'selectorAll'");

function domQuery(queryType, tagToQuery) {
  tagtoQuery = 'body';
  switch(queryType) {
    case 'tag':
    console.log(document.getElementsByTagName('body')[0]);//indexes are added here becuse these are things that will return an array
    break;

    case 'class':
    console.log(document.getElementsByClassName('body')[0]);
    break;

    case 'id':
    console.log(document.getElementById('body'));
    break;

    case 'selector':
    console.log(document.querySelector('body'))
    break;

    case 'selectorAll':
    console.log(document.querySelectorAll('body')[0]); //notice that this also includes an index because it returns ALL instances, not just one
    //# and . are specific to this because it's reusuable and dynamic, that's why you have to specify
    break;
  }
}

//---------------------event listeners-------------------------------
var div1 = document.querySelector('div');
div1.addEventListener('mouseeenter', function(){
  div1.style.backgroundColor = "yellow"; //we do everything the same as in CSS, but we camelCase it
  alert('mouse over is working');

div1.addEventListener('mouseleave', function() {
    div1.style.backgroundColor = 'white';
  });
});

var myKey = document.querySelector('.keydownExample');
myKey.addEventListener('keydown', function(e){
  if(e.keyCode === 13) {
      console.log('ya hit enter, mi amigo');
  }
});

//--------------------------try it out---------------------------------------
//On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
//Create event listeners for each:
var myDiv = document.querySelector('.my-div'),
myButton = document.querySelector('button'),
myTitle = document.querySelector('.my-title');

//For the button, alert the user with a message when they click it.
myButton.addEventListener("click", () => {
  alert("wassup");
});
//click = arg1, () => = arg2, alert() also equals arg2.

//For the div, change the color of the background when their mouse goes into the div.
color = ["blue", "green", "black", "purple", "yellow"];

//more dynamic version:
myDiv.addEventListener('mouseenter', function(e){
  e.target.style.backgroundColor = "randomColor(0, color.length - 1);"//highest possible index is array -1
});

//fancy statistics version
function randomColor(min, max) {
  var num = Math.round //yea boi
  (
    //Math.random will give you a random integer btwn 0 and 1, multiplying
    //by the mathematical equation rounds it and gives you a whole # (this is the section above labeled "yea boi")
    Math.random() *
    (max - min) + min);
  return color[num];
};

//For the h1, change the color of the text when the user releases any key..
var myInput = document.querySelector(".keydownExample");
myTitle.addEventListener("keyup", function(e) {
  myTitle.style.color = randomColor(0, color.length -1);
});
//Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.




//-------------------------take home section------------------------------
  //Employ a function that accepts two arguments: temperature and scale (either celcius or fahrenheit).
var fToC = prompt('Enter a number to convert from Fahrenheit to Celcius.', '33');
  function fToC(fahrenheit)
  {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
      console.log(message);
  }
  fToC(45);
  //Display the temperature in an h3 with minimal styling.
  //When the user clicks on the h3, run the function to convert the temperature
    //Display the converted temperature in the h3.
var h3Display = document.querySelector('h3');
temp.addEventListener('click', function()) {
  temp.
});
