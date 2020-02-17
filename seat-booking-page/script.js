const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = +movieSelect.value; // if we need to get number instead of string  we use + or we can use parseInt

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatCount = selectedSeats.length; // length gives us number of element in array

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

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
