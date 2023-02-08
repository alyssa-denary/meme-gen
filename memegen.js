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

const renderMeme = (url, topText, bottomText) => {
  // create div with class (?) to hold meme image
  const container = document.createElement("section");
  container.width = 450;
  container.height = 450;
  container.style.backgroundImage = `url('${url}')`;
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundSize = "450px 450px";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";
  console.log(container);

  // create img with class (?)
  // const image = document.createElement("img");
  // image.className = "meme-img";
  // add img url to img src
  // image.src = url;
  // image.width = 450;
  // attach img inside div
  // container.appendChild(image);

  // display top text
  const textTop = document.createElement("p");
  textTop.textContent = topText;
  textTop.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textTop.style.fontSize = "3rem";
  textTop.style.color = "rgb(250, 250, 250)";
  textTop.style.textShadow = "0px 0px rgb(0, 0, 0)";
  container.appendChild(textTop);
  // display bottom text
  const textBottom = document.createElement("p");
  textBottom.textContent = bottomText;
  textBottom.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textBottom.style.fontSize = "3rem";
  textBottom.style.color = "rgb(250, 250, 250)";
  textBottom.style.textShadow = "0px 0px rgb(0, 0, 0)";
  container.appendChild(textBottom);
  // display container in DOM
  document.querySelector("#display-memes").appendChild(container);
  // Store in localStorage
};

// when form submitted
document.querySelector(".meme-form-button").addEventListener("click", (e) => {
  // disable auto refresh
  e.preventDefault();
  // extract user submitted url
  // render image
  renderMeme(urlEl.value, topTextEl.value, bottomTextEl.value);
  // reset form values
  urlEl.value = "";
  topTextEl.value = "";
  bottomTextEl.value = "";
});

// listen for click on image to remove from DOM
