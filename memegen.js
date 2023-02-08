const urlEl = document.querySelector("#img-url");
const topTextEl = document.querySelector("#top-text");
const bottomTextEl = document.querySelector("#bottom-text");

/*
// render image function:
// inputs: src of image, topText, bottomText
  // create div with class (?) to hold meme image
  // create img with class (?)
  // add img url to img src
  // attach img inside div
  // display top text
  // display bottom text
  // display div img in DOM

// when form submitted
  // disable default refresh
  // extract user submitted url
  // create div with class (?) to hold meme image
  // create img with class (?)
  // add img url to img src
  // attach img inside div
  // display top text over img
  // display bottom text over img
  // display div img in DOM

// listen for click on image to remove from DOM
*/

const renderMeme = (url, topText, bottomText) => {
  // create div with class (?) to hold meme image
  const container = document.createElement("section");
  container.className = "img-container";
  container.textContent = "i'm a container";
  document.querySelector("#display-memes").appendChild(container);
  console.log(container);
  // create img with class (?)
  // add img url to img src
  // attach img inside div
  // display top text
  // display bottom text
  // display div img in DOM
};

// when form submitted
document.querySelector(".meme-form-button").addEventListener("click", (e) => {
  // disable auto refresh
  e.preventDefault();
  // extract user submitted url
  const url = urlEl.value;
  // render image
  renderMeme(url, "hello", "goog");
  // reset form values
});

// listen for click on image to remove from DOM
