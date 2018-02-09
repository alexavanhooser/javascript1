var myPTag = document.querySelector('p');

console.log(myPTag.textContent);

//changing dynamically, but you have to have the HTML in a string
// myDiv.innerHTML = "<h5> You dumb </5>"

var radio = document.querySelector('#my-radio');

//START HERE
var h1 = document.createElement('h1'); //making element
var p = document.createElement('p');
var body = document.querySelector("body"); //we need this to add the content to the element

h1.innerHTML = "surprise" //giving it content
p.textConent = "whooeoeooeoe";
body.appendChild(h1);//this is like array.push, but this adds to DOM nodes or elements
body.appendChild(p);

var newDiv = document.createElement('div'); //new element created
//following lines are just styling so you can see it.
newDiv.style.backgroundColor = 'green';
newDiv.style.height = "120px";
//we want to add it to the body but insert new div and put it BEFORE p Tag
body.insertBefore(newDiv, p); //second div is the one you want it to be inserted before

//need:
//1) parent node, 2) new node, and 3) reference node
//nodes are basically just elements in front-end development terms.

//any time you string methods together (a lot of dots)
// every single one of the separate .somethings has to apply to the ORIGINAL thing you're doing



//----------------DOT NOTATION--------------------
//day6 draggable and droppable is extra credit thingy for project
//body.className = "red-background";
//body.classList.toggle("red-background");
// newDiv.addEventListener('click', () => {
//   body.classList.toggle('red-background');
// });
 //returns boolean
// if(body.clasList.contains("white-text")) {
//   //do stuff
// } else {
//   //do other stuff
// }


var newImg = document.createElement("img");
//attribute is anything inside opening tag (class, type, name, id, etc)
newImg.setAttribute("src", "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg");

body.appendChild(newImg);







//-------------------------TRY IT OUT----------------------
// Write a program that prints on the page all numbers from 1 to 100.
//For multiples of three print “Fizz” instead of the number.
//For multiples of five print “Buzz” instead of the number.
//For numbers which are multiples of both three and five print “FizzBuzz”.

// What you'll need:
    // For loop
    // Modulo/modulus/modsy-whatsit
    // console.log()
    // createElement()
    // appendChild()
    // .innerText
    // if statements or switch statements(lots of ways to do the same thing!)







//----------------------TAKE HOME SECTION-------------------------
// When the user clicks a button, prompt them for the a title.

// Put that title into an h1 that is centered on the page.

// Ask the user to write a few sentences about what they did today.

// Populate a p tag with the sentences, align the p tag text with justify.

// Finally, ask the user for his or her favorite color, and set the background of the p tag to that color

// Remember, check for edge cases with color.
