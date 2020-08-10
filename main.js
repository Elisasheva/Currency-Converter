let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    
    let rateWON = 0.003147;
    let rateJUAN = 0.5359;
    let rateJEN = 0.035324;
    let rateRINGGIT = 0.8902;
    let rateBAHT = 0.1197;

    switch (currency) {
        case "won":
            result = amount / rateWON;
            break;
        case "juan":
            result = amount / rateJUAN;
            break;
        case "jen":
            result = amount / rateJEN;
            break;
        case "ringgit":
            result = amount / rateRINGGIT;
            break;
        case "baht":
            result = amount / rateBAHT;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${(result.toFixed(2)).toLocaleString()} ${currency}`;

    
});