
//-----------------------take home--------------------------
//In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
//Add all of these arrays to a final array named favoriteMovies
//ryeker edition
// var numbaOne = ["Ex Machina", "Nathan"];
// var numbaTwo = ["Moonlight", " Chiron"];
// var numbaTree = ["Dope", " There are like three of them so RIP"]
// var numbaFo = ["Freedom Writers", " fancy teacher lady"];
// var numbaFiy = ["The Silence of the Lambs", " Clarice"];
//
//
// //step 2
// var favMovies = [];
// favMovies.push(numbaOne, numbaTwo, numbaTree, numbaFo, numbaFiy);
// console.log(favMovies);
//
// //fav least fav wit console.log
// var favAndLeastFav = [];
// favAndLeastFav.push(numbaOne, numbaFiy);
// console.log(favAndLeastFav);
//
// //checking length
// alert(favMovies.length);

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
// for(var i = 0 ; i < favMovies.length; i++ ) {
//   if(favMovies[i][0] === 'Ex Machina') {
// //Once the program finds your favorite movie, have it alert the title and character name
//     alert(`${favMovies[i][0]} is my favorite movie with ${favMovies[i][1]}.`)
//   }
//
// }
//





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

// Day 4 Take Home

var todos = [];
var todoOne = prompt('Enter Todo 1 ');
var todoTwo = prompt('Enter Todo 2 ');
var todoThree = prompt('Enter Todo 3 ');
todos.push(todoOne, todoTwo, todoThree);

var todosWithDays = [];
for(let i=0;i< todos.length;i++)
{
  var due = prompt(`What day do you want to get ${todos[i]} done?`, 'Please use this format: day/month/year');
  due = new Date(due);
  todosWithDays.push([todos[i], due]);
}
console.log('todoswithdays', todosWithDays);
//Using a WHILE loop, find the task that will take the longest and log it to the console.
var now = new Date().getTime();
let i =0;
let sortedWithIndices = [];
while(i<todosWithDays.length)
{
  console.log('todosWithDays[i][1]',todosWithDays[i][1].getTime());
  let oneDay = 24 * 60 *24* 1000;
  var diffDays = Math.round((todosWithDays[i][1].getTime() - now)/oneDay);
  sortedWithIndices.push([diffDays, todosWithDays[i]]);
  i++;
}
sortedWithIndices.sort();
// console.log(sortedWithIndices);
// Which will take the longest?
console.log(`The one that takes the longest is: ${sortedWithIndices[sortedWithIndices.length - 1][1]} will take the longest`);

//Using a DO WHILE loop, add the string 'done' to all the tasks other than the one that will take the longest
let n = 0;
do {
   if( n!= sortedWithIndices.length - 1)
   {
     sortedWithIndices[n][1].push('done');
   }
   n++;
}
while(n < sortedWithIndices.length);

//Finally, alert all the tasks that are marked done in the todo array.
let alertArr = [];
for(let i = 0; i<sortedWithIndices.length; i++)
{
  if(sortedWithIndices[i][1].indexOf('done') !==  -1) {
    alertArr.push(sortedWithIndices[i][1]);
  }
}
