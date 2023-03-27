{
  const calculateResult = (amount, currency) => {
    const EUR = 4.69;
    const USD = 4.37;
    const GBP = 5.32;
    const UAH = 0.012;
    const CHF = 4.82;

    switch (currency) {

      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "GBP":
        return amount / GBP;

      case "UAH":
        return amount / UAH;

      case "CHF":
        return amount / CHF;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit,);

    formElement.addEventListener("reset", (event) => {
      resultElement.innerText = "";
    });
  };

  init();
}