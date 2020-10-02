// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
  .then(returnedValue => {
    returnedValue.data.topics.forEach(topic => {
      let topics = document.querySelector(".topics")
      topics.appendChild(document.createElement("div")).classList.add("tab");
      topics.lastChild.textContent = `${topic}`;
      topics.lastChild.addEventListener("click", filterTopics);
    });
  })
  .catch(err => alert(`Something went wrong! We're working hard to fix it. We apologize for the inconvenience`));
function filterTopics(e) {
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    console.log(e.target.textContent, cards[i].classList)
    if (!Array.from(cards[i].classList).includes(e.target.textContent)) {
      cards[i].style.display = "none";
    }
    else cards[i].style.display = "block";
  }
}


