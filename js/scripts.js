// const orderForm = document.forms.order;
// console.log(orderForm.quantity.value);
// var submitBtn = orderForm.submit;
// document.addEventListener('submit', function(e) {
//   e.preventDefault(); //validation, verification that restrictions are met
//   if(orderForm.quality.value == null) {
//     //can make function here to call out fake
//   }
// });
//
// // //arbitrary example of preventDefault()
// // //can change value of tracker in global scope. if it was local, it'd just reset the var "tracker" to 0
// // var tracker = 0; //tracks how many times they click something in this case
// // //once they click it twice, it stops them from changing things/whatever you wnated the function to do
// // myH1.addEventListenet("click", function(e){
// //   if(tracker <= 2) {
// //     //do stuff
// //     tracker++;
// //   } else {
// //     myButton.setAttribute('disabled', 'true');
// //     e.preventDefault();
// //   }
// // })
//
//
//
// //-------------------explicit binding--------------------------
// var checkScope = function() {
//   alert(`Hi, ${this.name}, welcome to the dark side.`);
// }
//
// var user = {
//   name: 'Alexa',
//   password: 'yeahboi123',
//   lastLogin: new Date()
// };
//
// var admin = {
//   name: 'Peter',
//   password: 'FBIagent666',
//   lastLogin: new Date(0/0/0000)
// };
// //forces checkScope to be bound to user object
// checkScope.call(admin);
// checkScope();
//
//
// //scope = where variables and functions live
//
// //---------------SCOPE PRACTICE-----------------------
// // We will get more in-depth when we talk about Object creation and prototypes. For now, let's check the context/scope of what we already know.
// // declare a var in the global context and define it with a string.
// var yaBoi = "Alexa";
//   function logYaBoi() {
//     var yaBoi = "Darth Vader";
//     console.log(yaBoi);
//   }
//
//   console.log(yaBoi);
// logYaBoi();
//
// // create a function and declare the same var inside the function.
//
// // console.log the var inside the function and outside the function.
//
// // Do the same with a let, then again with a const.
// let yaBoi = "Alexa";
//   function logYaBoi() {
//     let yaBoi = "Darth Vader";
//     console.log(yaBoi);
//   }
//
//   console.log(yaBoi);
// logYaBoi();

//const
    // const yaBoi = "Alexa";
    //   function logYaBoi() {
    //     const yaBoi = "Darth Vader";
    //     console.log(yaBoi);
    //   }
    //   console.log(yaBoi);
    // logYaBoi();
    // Knowing what you do about variables and functions, do the results make sense?

    var myString = new String('Hello World!');
    console.log(Object.getPrototypeOf(myString));
    //telling JS to use object rules and then tell me prototypeOf this string.
    //sort of like array.isArray
