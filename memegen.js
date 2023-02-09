const urlEl = document.querySelector("#img-url");
const topTextEl = document.querySelector("#top-text");
const bottomTextEl = document.querySelector("#bottom-text");
const usedIds = retrieve("usedIds");
const memes = retrieve("memes");

memes.forEach((meme) => renderMeme(meme));

// Form submission
document.querySelector(".meme-form-button").addEventListener("click", (e) => {
  e.preventDefault();
  const newMeme = createMeme(
    usedIds,
    memes,
    urlEl.value,
    topTextEl.value,
    bottomTextEl.value
  );
  renderMeme(newMeme);
  // urlEl.value = "";
  // topTextEl.value = "";
  // bottomTextEl.value = "";
});

// listen for click on image to remove from DOM
