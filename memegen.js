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
  // display container in DOM
  // Store in local storage

// listen for click on image to remove from DOM
*/


// when form submitted
document.querySelector(".meme-form-button").addEventListener("click", (e) => {
  e.preventDefault();
  renderMeme(urlEl.value, topTextEl.value, bottomTextEl.value);
  // reset form values
  // urlEl.value = "";
  // topTextEl.value = "";
  // bottomTextEl.value = "";
});

// listen for click on image to remove from DOM
