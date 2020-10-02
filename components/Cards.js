// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get("https://lambda-times-api.herokuapp.com/articles")
  .then(obj => {
    for (let i in obj.data.articles) {
      obj.data.articles[i].forEach(article => {
        if (i === "node") {
          article.subject = "node.js";
        } else article.subject = i;
        document.querySelector(".cards-container").appendChild(ArticleMaker(article));
      })
    }
  })
  .catch(err => alert(`Something went wrong! We're working hard to fix it. We apologize for the inconvenience`));

function ArticleMaker(article) {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("author");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  card.classList.add("card", `${article.subject}`);
  headline.classList.add("headline");
  headline.textContent = `${article.headline}`;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.setAttribute("src", article.authorPhoto);
  span.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);
  card.addEventListener("click", (e) => console.log(e.target.firstChild.textContent));

  return card;
}