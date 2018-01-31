// var arr = ["thingOne", 22, true, {}, []];
// console.log(arr[1]);

//Your favorite movie of 2017
var myArr = ["Coco", 9, true, 2018];
//console.log(coolThing, coolThing.length);

//console.log(typeof(myArr));
//console.log(Array.isArray(myArr)); //returns boolean

var bestTeacher = prompt('Who is the best teacher?', 'Ryeker');
myArr.push(bestTeacher);
console.log(myArr)

//push and unshift change the original array.
//pop and shift do the same thing (changing the array)
//BUT: they also give you access to the thing that you removed.
//----------------------------splice--------------------------------------
//this cuts off everything from index 2 to the end
var removedItem = myArr.splice(2);
//this cuts off second index; the 1 implies that you're only deleting the one thing.
var removedItem = myArr.splice(2, 1);
//this would cut the true boolean and insert the false
var removedItem = myArr.splice(2, 1, false);
//this just inserts the false value at the second index
//true gets pushed down the line
var removedItem = myArr.splice(2, 0, false);
//goes two in from the end and deletes one index.
var removedItem = myArr.splice(-2, 1);

//----------------slice---------------------
//you should see one copy of the same thing
var removedItem = myArr.slice();
//this is telling it to start at the second index and make a copy
var removedItem = myArr.slice(2);
//this takes the 0 index and the 1 index, but not the 2 index
var removedItem = myArr.slice(0, 2);


//just removes
//myArr.pop();
console.log(myArr);

//-----------------------take home--------------------------
//In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
//Add all of these arrays to a final array named favoriteMovies
var firstFavorite = ['Ex Machina', 'Nathan'];
var secondFavorite = ['Moonlight', 'Chiron'];
var thirdFavorite = ['Dope', 'I forgot, fake fan.'];
var fourthFavorite = ['Freedom Writers', 'I forgot, ultrA fake fan.'];
var fifthFavorite = ['The Silence of the Lambs', "Clarice"];
var myFavoriteMovies = [];
//Create another array with your favorite and least favorite of the top 5 and console.log it.
myFavoriteMovies.push(firstFavorite, fifthFavorite);
console.log(myFavoriteMovies);
//Create an array with just the titles of your favorite movies and alert it
var myFavoriteMovies = [firstFavorite[0], secondFavorite [0], thirdFavorite [0], fourthFavorite [0], fifthFavorite[0]];
//Check the length of your favoriteMovies array by alerting it.
myFavoriteMovies.alert(myFavoriteMovies.length);
