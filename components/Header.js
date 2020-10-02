// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  let div = document.createElement("div");
  let dateSpan = document.createElement("span");
  let h1 = document.createElement("h1");
  let tempSpan = document.createElement("span");

  div.classList.add("header");
  div.appendChild(dateSpan).classList.add("date")
  div.lastChild.textContent = "MARCH 28, 2020";
  div.appendChild(h1).textContent = "Lambda Times";
  div.appendChild(tempSpan).classList.add("temp")
  div.lastChild.textContent = "98°";
  document.querySelector(".header-container").appendChild(div);
};

Header()
