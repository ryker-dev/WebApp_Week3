import "./styles.css";
const descriptions = require("./breed_descriptions.json");

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "";
  createWikiItem("Husky", "husky", "Dog breed");
  createWikiItem("German Shepherd", "germanshepherd", "Dog breed");
  createWikiItem("Labrador", "labrador", "Dog breed");
  createWikiItem("Collie", "collie", "Dog breed");
  createWikiItem("Finnish Lapphund", "finnish", "Dog breed");
}

function createWikiItem(breedName, breedImage, wikitext) {
  const container = document.getElementsByClassName("container");

  const div = document.createElement("div");
  div.className = "wiki-item";
  const header = document.createElement("h1");
  header.innerText = breedName;
  header.className = "wiki-header";
  const content = document.createElement("div");
  content.className = "wiki-content";
  const text = document.createElement("p");
  text.className = "wiki-text";
  text.innerText = descriptions[breedImage].description;
  const imagediv = document.createElement("div");
  imagediv.className = "img-container";
  const image = document.createElement("img");
  //image.src = "https://dog.ceo/api/breed/" + breedImage + "/images/random";
  image.className = "wiki-img";
  image.src = fetchImage(breedImage).then((res) => {
    image.src = res;
  });

  container[0].appendChild(div);
  div.appendChild(header);
  div.appendChild(content);
  content.appendChild(text);
  content.appendChild(imagediv);
  imagediv.appendChild(image);
}

async function fetchImage(breedName, image) {
  const response = await fetch(
    "https://dog.ceo/api/breed/" + breedName + "/images/random"
  );
  const data = await response.json();
  return data.message;
}
