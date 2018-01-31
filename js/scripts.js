// var arr = ["thingOne", 22, true, {}, []];
// console.log(arr[1]);

//Your favorite movie of 2017
// var myArr = ["Coco", 9, true, 2018];
// //console.log(coolThing, coolThing.length);
//
// //console.log(typeof(myArr));
// //console.log(Array.isArray(myArr)); //returns boolean
//
// var bestTeacher = prompt('Who is the best teacher?', 'Ryeker');
// myArr.push(bestTeacher);
// console.log(myArr)
//
// //push and unshift change the original array.
// //pop and shift do the same thing (changing the array)
// //BUT: they also give you access to the thing that you removed.
// //----------------------------splice--------------------------------------
// //this cuts off everything from index 2 to the end
// var removedItem = myArr.splice(2);
// //this cuts off second index; the 1 implies that you're only deleting the one thing.
// var removedItem = myArr.splice(2, 1);
// //this would cut the true boolean and insert the false
// var removedItem = myArr.splice(2, 1, false);
// //this just inserts the false value at the second index
// //true gets pushed down the line
// var removedItem = myArr.splice(2, 0, false);
// //goes two in from the end and deletes one index.
// var removedItem = myArr.splice(-2, 1);
//
// //----------------slice---------------------
// //you should see one copy of the same thing
// var removedItem = myArr.slice();
// //this is telling it to start at the second index and make a copy
// var removedItem = myArr.slice(2);
// //this takes the 0 index and the 1 index, but not the 2 index
// var removedItem = myArr.slice(0, 2);


//just removes
//myArr.pop();
//console.log(myArr);

//-----------------------take home--------------------------
//In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
//Add all of these arrays to a final array named favoriteMovies
//ryeker edition
var numbaOne = ["Ex Machina", "Nathan"];
var numbaTwo = ["Moonlight", " Chiron"];
var numbaTree = ["Dope", " There are like three of them so RIP"]
var numbaFo = ["Freedom Writers", " fancy teacher lady"];
var numbaFiy = ["The Silence of the Lambs", " Clarice"];


//step 2
var favMovies = [];
favMovies.push(numbaOne, numbaTwo, numbaTree, numbaFo, numbaFiy);
console.log(favMovies);

//fav least fav wit console.log
var favAndLeastFav = [];
favAndLeastFav.push(numbaOne, numbaFiy);
console.log(favAndLeastFav);

//checking length
alert(favMovies.length);

//--------------------------------loops, WOOHOO--------------------------------------------------
//while loop
// let i = 0;
//
// while (i < favMovies.length) {
//   //console.log(favMovies[i]);
//   i++;
// }





//---------------practice for loop --------------------
//Write a for loop to iterate over the array
//Find your favorite movie by searching for the title in the loop
for(var i = 0 ; i < favMovies.length; i++ ) {
  if(favMovies[i][0] === 'Ex Machina') {
//Once the program finds your favorite movie, have it alert the title and character name
    alert(`${favMovies[i][0]} is my favorite movie with ${favMovies[i][1]}.`)
  }

}















// for loops EX 2
// for(var i = favMovies.length - 1; i > 0; i--) {
//   console.log(favMovies[i]);
// }

// //do while loop
// var i = 0;
// do {
//   console.log(favMovies[i]);
//   i++;
// } while (i < favMovies.length);
