
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let currencyFirstElement = document.querySelector(".js-currency-first");
let currencySecondElement = document.querySelector(".js-currency-second");

    let ratePLN = 1;
    let rateWON = 0.003147;
    let rateJUAN = 0.5359;
    let rateJEN = 0.035324;
    let rateRINGGIT = 0.8902;
    let rateBAHT = 0.1197;


    let exchange = () => {
        switch (currencyFirstElement.value) {
            case "PLN":
                FirstCurrencyType = ratePLN;
                break;
            case "KRW":
                FirstCurrencyType = rateWON;
                break;
            case "CNY":
                FirstCurrencyType = rateJUAN;
                break;
            case "JPY":
                FirstCurrencyType = rateJEN;
                break;
            case "MYR":
                FirstCurrencyType = rateRINGGIT;
                break;
            case "THB":
                FirstCurrencyType = rateBAHT;
                break;
        }

        switch (currencySecondElement.value) {
            case "PLN":
                SecondCurrencyType = ratePLN;
                CurrencyName = "PLN";
                break;
            case "KRW":
                SecondCurrencyType = 1 / rateWON;
                CurrencyName = "KRW";
                break;
            case "CNY":
                SecondCurrencyType = 1 / rateJUAN;
                CurrencyName = "CNY";
                break;
            case "JPY":
                SecondCurrencyType = 1 / rateJEN;
                CurrencyName = "JPY";
                break;
            case "MYR":
                SecondCurrencyType = 1 / rateRINGGIT;
                CurrencyName = "MYR";
                break;
            case "THB":
                SecondCurrencyType = 1 / rateBAHT;
                CurrencyName = "THB";
                break;
        }

        result = (amountElement.value * FirstCurrencyType * SecondCurrencyType).toFixed(2);
        resultElement.innerText = `${result} ${CurrencyName}`;
    };

    currencyFirstElement.addEventListener("input", exchange);
    currencySecondElement.addEventListener("input", exchange);
    amountElement.addEventListener("input", exchange);