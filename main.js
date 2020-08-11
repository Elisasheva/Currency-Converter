
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let currencyFirstElement = document.querySelector(".js-currency-first");
let currencySecondElement = document.querySelector(".js-currency-second");

let amountElementValue = amountElement.value;


    let ratePLN = 1;
    let rateWON = 0.003156;
    let rateJUAN = 0.5380;
    let rateJEN = 0.035237;
    let rateRINGGIT = 0.8907;
    let rateBAHT = 0.1203;
    let ratePESO = 0.0763;
    let rateSINGAPUR = 0.0763;
    let rateHONG = 0.4825;
    let rateRUPIA = 0.0002547;
    let rateRIEL = 0.00091;
    let rateKIP = 0.00041;


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

        let amountElementValue = amountElement.value;

        result = (amountElement.value * FirstCurrencyType / SecondCurrencyType).toLocaleString();
        resultElement.innerText = `${amountElementValue} ${FirstCurrencyName} = ${result} ${CurrencyName}`;
    };

    currencyFirstElement.addEventListener("input", exchange);
    currencySecondElement.addEventListener("input", exchange);
    amountElement.addEventListener("input", exchange);