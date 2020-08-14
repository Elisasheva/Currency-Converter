{
  const currencyFirstElement = document.querySelector(".js-currency-first");
  const currencySecondElement = document.querySelector(".js-currency-second");
  const amountElement = document.querySelector(".js-amount");
  const resultElement = document.querySelector(".js-result");

  const exchangeAndCalculateResult = () => {

    const amount = amountElement.value;
    const firstCurrency = currencyFirstElement.value;
    const secondCurrency = currencySecondElement.value;

    const ratePLN = 1;
    const rateWON = 0.003156;
    const rateJUAN = 0.538;
    const rateJEN = 0.035237;
    const rateRINGGIT = 0.8907;
    const rateBAHT = 0.1203;
    const ratePESO = 0.0763;
    const rateSINGAPUR = 0.0763;
    const rateHONG = 0.4825;
    const rateRUPIA = 0.0002547;
    const rateRIEL = 0.00091;
    const rateKIP = 0.00041;

    switch (firstCurrency) {
      case "PLN":
        FirstCurrencyType = ratePLN;
        FirstCurrencyName = "PLN";
        break;
      case "KRW":
        FirstCurrencyType = rateWON;
        FirstCurrencyName = "KRW";
        break;
      case "CNY":
        FirstCurrencyType = rateJUAN;
        FirstCurrencyName = "CNY";
        break;
      case "JPY":
        FirstCurrencyType = rateJEN;
        FirstCurrencyName = "JPY";
        break;
      case "MYR":
        FirstCurrencyType = rateRINGGIT;
        FirstCurrencyName = "MYR";
        break;
      case "THB":
        FirstCurrencyType = rateBAHT;
        FirstCurrencyName = "THB";
        break;
      case "PHP":
        FirstCurrencyType = ratePESO;
        FirstCurrencyName = "PHP";
        break;
      case "SGD":
        FirstCurrencyType = rateSINGAPUR;
        FirstCurrencyName = "SGD";
        break;
      case "HKD":
        FirstCurrencyType = rateHONG;
        FirstCurrencyName = "HKD";
        break;
      case "IDR":
        FirstCurrencyType = rateRUPIA;
        FirstCurrencyName = "IDR";
        break;
      case "KHR":
        FirstCurrencyType = rateRIEL;
        FirstCurrencyName = "KHR";
        break;
      case "LAK":
        FirstCurrencyType = rateKIP;
        FirstCurrencyName = "LAK";
        break;
    }

    switch (secondCurrency) {
      case "PLN":
        SecondCurrencyType = ratePLN;
        CurrencyName = "PLN";
        break;
      case "KRW":
        SecondCurrencyType = rateWON;
        CurrencyName = "KRW";
        break;
      case "CNY":
        SecondCurrencyType = rateJUAN;
        CurrencyName = "CNY";
        break;
      case "JPY":
        SecondCurrencyType = rateJEN;
        CurrencyName = "JPY";
        break;
      case "MYR":
        SecondCurrencyType = rateRINGGIT;
        CurrencyName = "MYR";
        break;
      case "THB":
        SecondCurrencyType = rateBAHT;
        CurrencyName = "THB";
        break;
      case "PHP":
        SecondCurrencyType = ratePESO;
        CurrencyName = "PHP";
        break;
      case "SGD":
        SecondCurrencyType = rateSINGAPUR;
        CurrencyName = "SGD";
        break;
      case "HKD":
        SecondCurrencyType = rateHONG;
        CurrencyName = "HKD";
        break;
      case "IDR":
        SecondCurrencyType = rateRUPIA;
        CurrencyName = "IDR";
        break;
      case "KHR":
        SecondCurrencyType = rateRIEL;
        CurrencyName = "KHR";
        break;
      case "LAK":
        SecondCurrencyType = rateKIP;
        CurrencyName = "LAK";
        break;
    }

    const result = ((amount * FirstCurrencyType) / SecondCurrencyType).toLocaleString();
    updateResultText(amount, FirstCurrencyName, result, CurrencyName);
  
  };

  const enforceMaxLength = (event) => {
    var t = event.target;
    if (t.hasAttribute("maxlength")) {
      t.value = t.value.slice(0, t.getAttribute("maxlength"));
    };
  };

  const updateResultText = (amount, FirstCurrencyName, result, CurrencyName) => {
    resultElement.innerText = `${amount} ${FirstCurrencyName} = ${result} ${CurrencyName}`;
  }

  const init = () => {
    currencyFirstElement.addEventListener("input", exchangeAndCalculateResult);
    currencySecondElement.addEventListener("input", exchangeAndCalculateResult);
    amountElement.addEventListener("input", exchangeAndCalculateResult);
    document.body.addEventListener("input", enforceMaxLength);
  };

  init();
}
