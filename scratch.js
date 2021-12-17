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



async function fetchartData(text) {
  const url = "https://api.artic.edu/api/v1/artworks";
  let currentPage = "";

  let BASE_URL = `${url}/search?q=${text}`;
  let res = await axios.get(BASE_URL);
  let data = res.data;
  console.log(data.data);
  let res2 = await axios.get(data.data[0].api_link)
  console.log(res2)
  let imageUrl = `${res2.data.config.iiif_url}/${res2.data.data.image_id}/full/843,/0/default.jpg`;


  artistName.textContent = res2.data.data.artist_title;
  artWorkTitle.textContent = res2.data.data.title;
  imageTag.src = imageUrl
  origin.textContent = res2.data.data.place_of_origin;
  date.textContent = res2.data.data.date_display;
  medium.textContent = res2.data.data.medium_display;
  dime.textContent = res2.data.data.dimensions;

  randomButton.addEventListener('click', randomSelection);
  function randomSelection() {

    let random = Math.floor(Math.random() * data.data[0].api_link.length);
    fetchartData(random)
  }



};



searchButton.addEventListener('click', updateValue);
function updateValue() {
  let text = input.value;
  fetchartData(text)
}


