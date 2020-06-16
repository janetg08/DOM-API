/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "Script Running" in the browser's dev tools console
console.log("Script Running");

// space to define all variables that will be used throughout the program
// variable to store BASE currency (user's oringial currency)
let base;

// variable to store CONVERT currency (what the user is converting to)
let convert;

// variable to store apiURL (which will fetch conversion factor)
let apiURL;

// variable to store user input for amount to be converted from base to convert
let amount;

// variable to store conversion factor fetched from API
let conversionFactor;
let number;

// variable to store total (number * amount)
let total;
let converted;

// User makes a selection for base currency
// selection is stored in variable "base"
let baseCurrency = document.querySelector("#baseSelect");
console.log(baseCurrency);
baseCurrency.addEventListener("change", e => {
  base = e.target.value;
  console.log(base);
});

// User inputs an amount to convert from base currency to convert currency
// input is stored in variable "amount"
let userInput = document.querySelector("#query");
console.log(userInput);
userInput.addEventListener("input", e => {
  console.log(`The user is entering an amount to be converted.`);
  amount = e.target.value;
  console.log(amount);
});

// User makes a selection for convert currency
// selection is stored in variable "convert"
let convertCurrency = document.querySelector("#convertSelect");
console.log(convertCurrency);
convertCurrency.addEventListener("change", e => {
  convert = e.target.value;
  console.log(convert);
});

// fetches API Data and stores responses in a varibale called conversionFactor
async function sendAPIRequest() {
  let response = await fetch(apiURL);
  console.log(response);
  let conversionFactor = await response.json();
  console.log(conversionFactor);
  number = Object.entries(conversionFactor)[0][1];
  console.log(number);
  convertInput();
  results.innerHTML = `${amount} ${base} = ${converted} ${convert}`
}

// the part that isn't working is total = amount * number (specifically the number part and it doesn't)
// work as parseFloat(number) either...
function convertInput() {
  total = amount * number
  console.log(total);
  converted = total.toFixed(2)
  console.log(converted)
}

// When the "convert" button is pressed, API request is made to get conversion factor from base currency to convert currency
let convertButton = document.querySelector("#convert");
console.log(convertButton);
convertButton.addEventListener("click", e => {
  console.log("Converting...");
  apiURL =
    "https://free.currconv.com/api/v7/convert?q=" +
    base +
    "_" +
    convert +
    "&compact=ultra&apiKey=f5183e18436723df09b0";
  sendAPIRequest();
});

let results = document.querySelector("#results");

// these aren't working yet - I want to have something that when pressed, resets all fields to default state
// (forms to "Select" and empty input field)

// function resetQuery() {
//   baseCurrency.innerHTML = amount.innerHTML += "";
//   convertCurrency.innterHTML = "";
// }

// let resetButton = document.querySelector("#reset");
// console.log(resetButton);
// resetButton.addEventListener("click", e => {
//   console.log("Clear all data in entered fields.");
//   resetQuery();
// });


  
