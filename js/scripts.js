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
function myMagicFunction(argument1, argument2) {
  console.log(`${argument1} is better than ${argument2}`);
};

myMagicFunction("Coffee", "Tea");
