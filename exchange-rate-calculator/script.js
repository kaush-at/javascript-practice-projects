const currencyEle_1 = document.getElementById("currency-one");
const currencyEle_2 = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const buttonSwap = document.getElementById("swap");
const rateEle = document.getElementById("rate");

// fetch the exchange rate and update the dom
function calculate() {
    const currencyOne = currencyEle_1.value;
    const currencyTwo = currencyEle_2.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then((res) => res.json())
        .then((data) => {
            const rates = data.rates[currencyTwo];
            rateEle.innerText = `1 ${currencyOne} = ${rates} ${currencyTwo}`;
            amountTwo.value = (amountOne.value * rates).toFixed(2);
        });
}

// event listners
currencyEle_1.addEventListener("change", calculate);
currencyEle_2.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);
buttonSwap.addEventListener("click", () => {
    const temp = currencyEle_1.value;
    currencyEle_1.value = currencyEle_2.value;
    currencyEle_2.value = temp;
    calculate();
});
calculate();
//fetch example
// function calculate() {
//   fetch("items.json")  -> fetch karanne item.json eken
//     .then((res) => res.json())  specify we need as json
//     .then((data) => console.log(data)); // instead of print on console we can get those data and put in to body or what ever
// }

// calculate();
