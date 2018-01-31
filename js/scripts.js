
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

On the day4 branch of your take-home repository, write a program that:

//Creates an array of things you need or want to do this weekend by collecting three todos from the user.
//Using a FOR loop, change the items in the array by adding days they should be completed to each index.
//Using a WHILE loop, find the task that will take the longest and log it to the console.
//Using a DO WHILE loop, add the string 'done' to all the tasks other than the one that will take the longest
//Finally, alert all the tasks that are marked done in the todo array.
