//making objects
// var myObj = {
//         firstName: "Alexa",
//         lastName: "VanHooser"
//     }; //Note that this is only one way to make an object!
//
//
// var episodeEightSucks = {
//   ryeker: "my teacher",
//   opinion:"thinks ep 8 sucks. i just like poe"
// };
//
// //constructor function
// function Name(first, last) {
//   this.first = first;
//   this.last = last;
// };
//
// let newPerson = new Name("Ryeker", "Herndon");
// console.log(newPerson);
//function is like a recipe, this. is the ingredients, the function call is like spitting out the dish
//singleton = 1 instance of a new thing


//----------------prototype example--------------
// function User(username, password) {
//   this.username = username;
//   this.password = password;
// };
//
// var users = [];
//
// function login() {
//   var username = prompt("Enter a username.", "yaBoi");
//   var password = prompt("Enter a password.", "yaBoi123");
//   var newUser = new User(username, password);
//   users.push(newUser);
//   console.log(newUser);
// }
//
// login();
//the value following the dot does not have to match what you call later.
//for example, you could call "this.username", "this.un"


//------------in-class practice---------------
//create the form with username and password areas
//have a new user be created when they click submit
var newUserForm = document.forms.newUser;
//has us listen for the submit event(click on submit thingy); only works on forms
newUserForm.addEventListener("submit", function(e) {
  login(e);
});

function User(username, password) {
  this.username = username;
  this.password = password;
};

function login(e) {
  myEvent.preventDefault();
  var username = document.querySelector('.username').value;
  var password = newUserForm.password.value;
  var newUser = new User(username, password);

  console.log(newUser);
}

//car example
var calcMileage = funtion(miles, gallons) {
  return miles / gallons;
}

function Vehicle(wheels, type, engine, color, miles, gallons) {
  this.wheels = wheels;
  this.type = type;
  this.engine = engine;
  this.color = color;
  this.calculateGasMileage = calcMileage(miles, gallons);
}

function Engine(numOfCyls, injectionSystem, vrooms, horsees) {
  this.numOfCyl = numOfCyls;
  this.injectionSystem = injectionSystem;
  this.vrooms = vrooms;
  this.horsees = horsees;
}

var myEngine = new Engine(2, 'crap', 0.00, "???");

var saturn = new Vehicle(4, "car", myEngine, "faded grey", 5, 4);
console.log(saturn.mileage);


// In TODO items
// Each one must have submut buttons, edit buttons, mark as done
  // Not necessarily need to make thse functions, but it'd be good practice!
// Create one construcotr witht all these methods attached, so that you can put it all together at once
// calcMileage comes out as a numerical value: why?
    // Value gets returned from that Vehicle function,
          // If you do not set a return value, your answer will be undefined
  // accessing mileage on saturn
  // console.log(saturn.calculateMileage); //outputs the mileage of the saturn























//example of key & value

// var admin = {
//   name: 'Peter',
//   password: 'yaboi666',
//   lastLogin: new Date (0/0/0000)
// };
//
// //dot notation
// console.log(admin.password);
// //bracket notation
// console.log(admin['password']);
//
//
// // for(let i = 0; i < data.length; i++) {
// //   console.log(data[i]);
// // }
// // //checking price
// // if(data[i]['price'] < 9) {
// // }
//
// data = [
//   {
// name: 'soap',
// price: 10.99,
// notes: 'Great for getting clean.'
//   }]
//
// let i = 0;
// do {
//   console.log(data[i].notes);
//   i++;
// } while(i < data.length);
