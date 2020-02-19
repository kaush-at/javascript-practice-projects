const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value; // if we need to get number instead of string  we use + or we can use parseInt

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected"); // select the all row eke selected seats
  //- query selectoir all returns html node list every HTML element is a "node".
  const selectedSeatCount = selectedSeats.length; // length gives us number of element in array
  // copy selected seats in to array and map through array and return new array with indexes
  const seatIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat); // using the spread operator we pass value of array
    // ex/
    //   const numbers = [1,2,3,4];
    //   const numArr  = [...numbers,5,6]   - array eka spread karala pass karanawa spread operator eken
    //   console.log(numArr) => [1,2,3,4,5,6]
  });
  // console.log dala balanna selectedSeats walata enne nodes set ekak
  // local storage kiyanne browser eke tiyena storage eka eka refresh karama nathiwenne na
  //localStorage.setItem("movieName", movieName);
  localStorage.setItem("seatIndex", JSON.stringify(seatIndex)); // seat index kiyanne array ekak nisa apita JSON.stringify karanna one string karanna
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  localStorage.setItem("selectedIndex", e.target.selectedIndex); // The selectedIndex property sets or returns the index of the selected option in a drop-down list.
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // classList - The classList property returns the class name(s) of an element, as a DOMTokenList object.
    // This property is useful to add, remove and toggle CSS classes on an element.
    // The classList property is read-only, however, you can modify it by using the add() and remove() methods.
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
