import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  //document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  createWikiItem("Husky", "Dog breed");
  createWikiItem("German Shepherd", "Dog breed");
  createWikiItem("Labrador", "Dog breed");
  createWikiItem("Collie", "Dog breed");
  createWikiItem("Finnish Lapphund", "Dog breed");
}

function createWikiItem(breedName, wikitext) {
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
  text.innerText = wikitext;
  const imagediv = document.createElement("div");
  imagediv.className = "img-container";
  const image = document.createElement("img");
  image.className = "wiki-img";

  container[0].appendChild(div);
  div.appendChild(header);
  div.appendChild(content);
  content.appendChild(text);
  content.appendChild(imagediv);
  imagediv.appendChild(image);
}
