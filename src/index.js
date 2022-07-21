import "./styles.css";
const breedData = require("./breed_data.json");

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "";
  createWikiItem("husky");
  createWikiItem("germanshepherd");
  createWikiItem("labrador");
  createWikiItem("collie");
  createWikiItem("finnishlapphund");
}

function createWikiItem(breedName) {
  const container = document.getElementsByClassName("container");

  const div = document.createElement("div");
  div.className = "wiki-item";
  const header = document.createElement("h1");
  header.innerText = breedData[breedName].name;
  header.className = "wiki-header";
  const content = document.createElement("div");
  content.className = "wiki-content";
  const text = document.createElement("p");
  text.className = "wiki-text";
  //text.innerText = descriptions[breedImage].description;
  fetchSummary(breedData[breedName].wikiname).then((res) => {
    text.innerText = res;
  });
  const imagediv = document.createElement("div");
  imagediv.className = "img-container";
  const image = document.createElement("img");
  //image.src = "https://dog.ceo/api/breed/" + breedImage + "/images/random";
  image.className = "wiki-img";
  fetchImage(breedData[breedName].imagename).then((res) => {
    image.src = res;
  });

  container[0].appendChild(div);
  div.appendChild(header);
  div.appendChild(content);
  content.appendChild(imagediv);
  imagediv.appendChild(image);
  content.appendChild(text);
}

async function fetchImage(breedName) {
  const response = await fetch(
    "https://dog.ceo/api/breed/" + breedName + "/images/random"
  );
  const data = await response.json();
  return data.message;
}

async function fetchSummary(breedName) {
  const response = await fetch(
    "https://en.wikipedia.org/api/rest_v1/page/summary/" + breedName
  );
  const data = await response.json();
  return data.extract;
}
