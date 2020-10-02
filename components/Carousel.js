/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const breeds = [
  'mastiff',
  'affenpinscher',
  'australian',
  'mexicanhairless',
  'pug',
  'samoyed',
  'akita',
  'bluetick',
  'borzoi',
  'shiba',
  'whippet',
  'vizsla'
]


function CarouselMaker() {
  let parentDiv = document.createElement("div");
  let leftBtnDiv = document.createElement("div");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let img4 = document.createElement("img");
  let img5 = document.createElement("img");
  let rightBtnDiv = document.createElement("div");

  parentDiv.classList.add("carousel");
  leftBtnDiv.classList.add("left-button");
  leftBtnDiv.textContent = " < ";
  leftBtnDiv.addEventListener("click", moveLeft);
  rightBtnDiv.classList.add("right-button");
  rightBtnDiv.textContent = " > ";
  rightBtnDiv.addEventListener("click", moveRight);

  img1.classList.add("car-img", "img1");
  populateCarousel(img1);
  img2.classList.add("car-img", "img2");
  populateCarousel(img2);
  img3.classList.add("car-img", "img3");
  populateCarousel(img3);
  img4.classList.add("car-img", "img4");
  populateCarousel(img4);
  img5.classList.add("car-img", "img5");
  populateCarousel(img5);

  parentDiv.appendChild(leftBtnDiv);
  parentDiv.appendChild(img1);
  parentDiv.appendChild(img2);
  parentDiv.appendChild(img3);
  parentDiv.appendChild(img4);
  parentDiv.appendChild(img5);
  parentDiv.appendChild(rightBtnDiv);

  return parentDiv;
}

function getDogURL(node, breed) {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then(futureData => {
      node.setAttribute("src", `${futureData.data.message[0]}`);
    })
  .catch(err => {console.log(err, "+++ERROR+++ OUT OF CHEESE +++ERROR+++")});
}

function populateCarousel(node) {
  let breed = breeds[Math.floor(Math.random()*12)];
  getDogURL(node, breed);
}

function moveLeft() {
  let images = document.querySelectorAll(".car-img");
  for (let i = 0; i < images.length; i++) { 
    if (i === images.length-1) {
      images[i].setAttribute("src", `${populateCarousel(images[i])}`);
    } else images[i].setAttribute("src", `${images[i+1].src}`);
  }
}

function moveRight() {
  let images = document.querySelectorAll(".car-img");
  for (let i = images.length-1; i >= 0; i--) { 
    if (i-1 >= 0) {
      images[i].setAttribute("src", `${images[i-1].src}`);
    } else images[i].setAttribute("src", `${populateCarousel(images[i])}`);
  }
}

document.querySelector(".carousel-container").appendChild(CarouselMaker());


//++++get images+++++
