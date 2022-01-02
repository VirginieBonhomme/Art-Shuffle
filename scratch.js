const randomButton = document.querySelector("#random-button");
const searchButton = document.querySelector("#search-button");
const displayImage = document.querySelector("#display-image");
const input = document.querySelector("#blank");
const artistName = document.querySelector(".artist-name");
const artWorkTitle = document.querySelector(".artwork-title");
const origin = document.querySelector(".origin");
const date = document.querySelector(".display-date");
const medium = document.querySelector(".medium");
const dime = document.querySelector(".dimensions");
const imageTag = document.querySelector(".imageTag")


let artData
let imageUrl

async function fetchartData(text) {

  const url = "https://api.artic.edu/api/v1/artworks";

  let BASE_URL = `${url}/search?q=${text}`;
  let res = await axios.get(BASE_URL);
  let data = res.data;
  console.log(data.data);
  artData = await axios.get(data.data[Math.floor(Math.random() * data.data.length)].api_link);
  console.log(artData)
  imageUrl = `${artData.data.config.iiif_url}/${artData.data.data.image_id}/full/843,/0/default.jpg`;

  renderArt();
};

function renderArt() {

  artistName.textContent = "Artist Name: " + artData.data.data.artist_title;
  artWorkTitle.textContent = "Title: " + artData.data.data.title;
  imageTag.src = imageUrl
  origin.textContent = "Origin: " + artData.data.data.place_of_origin;
  date.textContent = "Display Date: " + artData.data.data.date_display;
  medium.textContent = "Medium: " + artData.data.data.medium_display;
  dime.textContent = "Dim: " + artData.data.data.dimensions;
}

function updateValue() {
  let text = input.value;
  fetchartData(text)
}

function randomSelection() {
  fetchartData(artData)
}

searchButton.addEventListener('click', updateValue);
randomButton.addEventListener('click', randomSelection);