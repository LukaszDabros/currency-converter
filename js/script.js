{
  const formElement = document.querySelector(".js-form");
  const currencyElement = document.querySelector(".js-currency");
  const amountElement = document.querySelector(".js-amount");
  const resultElement = document.querySelector(".js-result");

  const EUR = 4.69;
  const USD = 4.37;
  const GBP = 5.32;
  const UAH = 0.012;
  const CHF = 4.82;

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {

      case "EUR":
        result = amount / EUR;
        break;

      case "USD":
        result = amount / USD;
        break;

      case "GBP":
        result = amount / GBP;
        break;

      case "UAH":
        result = amount / UAH;
        break;

      case "CHF":
        result = amount / CHF;
        break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`
  });

  formElement.addEventListener("reset", (event) => {
    resultElement.innerText = "";
  });
}