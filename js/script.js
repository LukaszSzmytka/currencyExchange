{
  const calculateRate = (amount, currency) => {
    const EUR = 4.7804;
    const USD = 4.9;
    const CHF = 4.852;
    const HRK = 0.6345;
    const TRY = 0.2635;
    const GBP = 5.4537;

    switch (currency) {
      case "EUR":
        rate = EUR;
        return amount / EUR;

      case "USD":
        rate = USD;
        return amount / USD;

      case "CHF":
        rate = CHF;
        return amount / CHF;

      case "HRK":
        rate = HRK;
        return amount / HRK;

      case "TRY":
        rate = TRY;
        return amount / TRY;

      case "GBP":
        rate = GBP;
        return amount / GBP;
    }
  };

  const updateSumText = (sum, currency) => {
    const sumElement = document.querySelector(".js-sum");
    sumElement.innerHTML = `${sum.toFixed(2)} ${currency} `;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");

    const currencyElement = document.querySelector(".js-currency");
    const rateElement = document.querySelector(".js-rate");

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const sum = calculateRate(amount, currency);

    rateElement.innerText = rate;

    updateSumText(sum, currency);
  };

  const init = () => {
    const formElemnt = document.querySelector(".js-form");

    formElemnt.addEventListener("submit", onFormSubmit);
  };

  init();
}
