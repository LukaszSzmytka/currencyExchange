let amountElement = document.querySelector(".js-amount");
let formElemnt = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-rate");
let sumElement = document.querySelector(".js-sum");

let EUR = 4.7804;
let USD = 4.9;
let CHF = 4.852;
let HRK = 0.6345;
let TRY = 0.2635;
let GBP = 5.4537;

formElemnt.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let currency = currencyElement.value;
  let rate = rateElement.value;
  let sum = sumElement.value;

  switch (currency) {
    case "EUR":
      rate = EUR;
      break;

    case "USD":
      rate = USD;
      break;

    case "CHF":
      rate = CHF;
      break;

    case "HRK":
      rate = HRK;
      break;

    case "TRY":
      rate = TRY;
      break;

    case "GBP":
      rate = GBP;
      break;
  }

  sum = amount / rate;

  rateElement.innerText = rate;

  sumElement.innerText = sum.toFixed(2);
});
