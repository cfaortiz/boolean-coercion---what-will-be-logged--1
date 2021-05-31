// For each statement, guess whether JavaScript will treat the value as true or false.
let weather = "sunny";
if (weather) {
  console.log("There is weather outside");
}
let weatherGuess = true ; // enter true or false here true
console.log(weatherGuess)

let temperature = 31;
if (temperature) {
  console.log('music')
  console.log("The temperature is " + temperature);
}
let temperatureGuess = true; // enter true or false here  true


let nothingToSay = "";
if (nothingToSay) {
  console.log("There is nothing to say");
}
let nothingToSayGuess = false; // enter true or false here. false


let freezing = 0;
if (freezing) {
  console.log("It's freezing!");
}
let freezingGuess = false; // enter true or false here false


console.log(!!34); //turns truthy value to true

console.log(!34); //evaluates to not true

console.log('fffff');

// This tests your code - you can ignore it for now!
require("./test.js");(void 0);


//Double bang !! turns anything into a boolean value.
//even truthy or falsy values example:

