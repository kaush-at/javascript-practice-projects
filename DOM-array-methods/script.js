const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleMoneyBtn = document.getElementById("double-money");
const showMillionairsBtn = document.getElementById("show-millionairs");
const sortBtn = document.getElementById("sort");
const calculateBtn = document.getElementById("calculate");
// const main = document.getElementById("main");

let data = [];

// fetch rsndom user and add money

// by using regular fetch api
// function getRandomUser() {
//   fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// by using async await
async function getRandomUser() {
  const result = await fetch("https://randomuser.me/api");
  const data = await result.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function addData(user) {
  data.push(user);

  updateDOM();
}

// assigning default parameters
function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatNumberAsMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

function doubleMoney() {
  data = data.map((user) => {
    console.log(user.money * 2);
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// sort according to their money
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

//format number as money
function formatNumberAsMoney(number) {
  return "$ " + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67;
}

// sort only millionairs
function filterByMillionairs() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

// calculate the total wealth
function getTotalWealth() {
    const wealthTotal = data.reduce((total, user) => (total += user.money), 0);
    const totalWealth = document.createElement("div");
    totalWealth.innerHTML = `<h3>Total Wealth : <strong>${formatNumberAsMoney(
        wealthTotal
    )}</strong>`;

    main.appendChild(totalWealth);
}

// event listner for add user button
addUserBtn.addEventListener("click", getRandomUser);

// double money event listner
doubleMoneyBtn.addEventListener("click", doubleMoney);

// sort by wealth
sortBtn.addEventListener("click", sortByRichest);

// filter by millionairs
showMillionairsBtn.addEventListener("click", filterByMillionairs);

// calculatebtn eventlistner
calculateBtn.addEventListener("click", getTotalWealth);