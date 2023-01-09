{
  const calculateResult = (amount, currency) => {
    const EUR = 4.697;
    const USD = 4.401;
    const CHF = 4.7606;
    const HRK = 0.6233;
    const TRY = 0.2344;
    const GBP = 5.3515;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "CHF":
        return amount / CHF;

      case "HRK":
        return amount / HRK;

      case "TRY":
        return amount / TRY;

      case "GBP":
        return amount / GBP;
    }
  };

  const updateResultText = (result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${result.toFixed(2)} ${currency} `;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");

    const currencyElement = document.querySelector(".js-currency");

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);
    const rateElement = document.querySelector(".js-rate");

    rateElement.innerText = (amount / result).toFixed(2);

    updateResultText(result, currency);
  };

  const init = () => {
    const formElemnt = document.querySelector(".js-form");

    formElemnt.addEventListener("submit", onFormSubmit);
  };

  init();
}
