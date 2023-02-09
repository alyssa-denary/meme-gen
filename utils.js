"use strict";

function renderMeme(obj) {
  // create div to hold meme image
  const container = document.createElement("section");
  container.style.margin = "2rem";
  container.style.position = "relative";
  container.style.display = "inline-flex";
  // style & display img
  const image = document.createElement("img");
  image.src = obj.url;
  image.style.minWidth = "450px";
  image.style.borderRadius = "5px";
  container.appendChild(image);
  // style & display top text
  const textTop = document.createElement("p");
  textTop.textContent = obj.topText;
  textTop.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textTop.style.fontSize = "3rem";
  textTop.style.color = "rgb(250, 250, 250)";
  textTop.style.textShadow = "0px 0px 5px rgb(0, 0, 0)";
  container.appendChild(textTop);
  // postiion top text
  textTop.style.textAlign = "center";
  textTop.style.position = "absolute";
  textTop.style.top = "5px";
  textTop.style.left = "0px";
  textTop.style.right = "0px";
  // style & display bottom text
  const textBottom = document.createElement("p");
  textBottom.textContent = obj.bottomText;
  textBottom.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textBottom.style.fontSize = "3rem";
  textBottom.style.color = "rgb(250, 250, 250)";
  textBottom.style.textShadow = "0px 0px rgb(0, 0, 0)";
  container.appendChild(textBottom);
  // position bottom text
  textBottom.style.textAlign = "center";
  textBottom.style.position = "absolute";
  textBottom.style.bottom = "5px";
  textBottom.style.left = "0px";
  textBottom.style.right = "0px";
  // display container in DOM
  document.querySelector("#display-memes").appendChild(container);
}

// Function create id
function createID(usedIds) {
  let min = 1;
  let max = 1000000;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (!usedIds.includes(randomNum)) {
    usedIds.push(randomNum);
    return randomNum;
  } else {
    return createID(usedIds);
  }
}

// Create new meme
function createMeme(usedIds, memes, url, topText, bottomText) {
  const meme = {
    id: createID(usedIds),
    url: url,
    topText: topText,
    bottomText: bottomText,
  };
  memes.push(meme);
  store("memes", memes);
  return meme;
}

// Store in localStorage function
function store(key, obj) {
  localStorage.setItem(`${key}`, JSON.stringify(obj));
}

// Retrieve from localStorage function
function retrieve(key) {
  const objJSON = localStorage.getItem(`${key}`);
  return objJSON !== null ? JSON.parse(objJSON) : [];
}

// Function to remove from dom
