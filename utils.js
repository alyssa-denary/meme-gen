"use strict";

function renderMeme(obj) {
  // Container creation & styling
  const container = document.createElement("section");
  container.style.margin = "2rem";
  container.style.position = "relative";
  container.style.display = "inline-flex";
  document.querySelector("#display-memes").appendChild(container);
  // Image creation & styling
  const image = document.createElement("img");
  image.src = obj.url;
  image.style.minWidth = "45rem";
  image.style.maxWidth = "70rem";
  image.style.maxHeight = "70rem";
  image.style.borderRadius = ".5rem";
  container.appendChild(image);
  // Top text creation & styling
  const textTop = document.createElement("p");
  textTop.textContent = obj.topText;
  textTop.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textTop.style.fontSize = "3rem";
  textTop.style.color = "rgb(250, 250, 250)";
  textTop.style.textShadow = "0 0 .5rem rgb(0, 0, 0)";
  textTop.style.textAlign = "center";
  textTop.style.position = "absolute";
  textTop.style.top = ".5rem";
  textTop.style.left = "0";
  textTop.style.right = "0";
  container.appendChild(textTop);
  // Bottom text creation & styling
  const textBottom = document.createElement("p");
  textBottom.textContent = obj.bottomText;
  textBottom.style.fontFamily =
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  textBottom.style.fontSize = "3rem";
  textBottom.style.color = "rgb(250, 250, 250)";
  textBottom.style.textShadow = "0 0 .5rem rgb(0, 0, 0)";
  textBottom.style.textAlign = "center";
  textBottom.style.position = "absolute";
  textBottom.style.bottom = ".5rem";
  textBottom.style.left = "0";
  textBottom.style.right = "0";
  container.appendChild(textBottom);
  // Remove button creation & styling
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.position = "absolute";
  deleteButton.style.width = "100%";
  deleteButton.style.height = "100%";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = ".5rem";
  deleteButton.style.backgroundColor = "rgba(14, 13, 13, 0.6)";
  deleteButton.style.color = "rgba(167, 163, 163, 0.6)";
  deleteButton.style.fontSize = "12rem";
  deleteButton.style.fontWeight = "800";
  deleteButton.style.visibility = "hidden";
  deleteButton.addEventListener("click", (e) => {
    removeMeme(obj.id, container);
  });
  container.appendChild(deleteButton);
  // Event listeners to show/hide deleteButton
  container.addEventListener("mouseenter", (e) => {
    deleteButton.style.visibility = "visible";
  });
  container.addEventListener("mouseleave", (e) => {
    deleteButton.style.visibility = "hidden";
  });
}

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

function store(key, obj) {
  localStorage.setItem(`${key}`, JSON.stringify(obj));
}

function retrieve(key) {
  const objJSON = localStorage.getItem(`${key}`);
  return objJSON !== null ? JSON.parse(objJSON) : [];
}

// Function to remove from dom
function removeMeme(id, element) {
  const targetIndex = memes.findIndex((obj) => obj.id === id);
  if (targetIndex !== -1) {
    memes.splice(targetIndex, 1);
  }
  store("memes", memes);
  element.remove();
}
