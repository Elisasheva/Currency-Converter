
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let currencyFirstElement = document.querySelector(".js-currency-first");
let currencySecondElement = document.querySelector(".js-currency-second");

let amountElementValue = amountElement.value;


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
        }

        switch (currencySecondElement.value) {
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
        }

        let amountElementValue = amountElement.value;

        result = (amountElement.value * FirstCurrencyType / SecondCurrencyType).toLocaleString();
        resultElement.innerText = `${amountElementValue} ${FirstCurrencyName} = ${result} ${CurrencyName}`;
    };

    currencyFirstElement.addEventListener("input", exchange);
    currencySecondElement.addEventListener("input", exchange);
    amountElement.addEventListener("input", exchange);