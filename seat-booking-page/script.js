const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value; // if we need to get number instead of string  we use + or we can use parseInt

populateUI();

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatCount = selectedSeats.length; // length gives us number of element in array
  const seatIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat); // using the spread operator we pass value of array
  });

  localStorage.setItem("seatIndex", JSON.stringify(seatIndex));
  count.innerHTML = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  saveMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// save selected movie index and price
function saveMovieData(movieIndex, ticketPrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", ticketPrice);
}

// get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("seatIndex"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// initial count and total
updateSelectedCount();
