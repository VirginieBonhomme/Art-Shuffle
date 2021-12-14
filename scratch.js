const randomButton = document.getElementById("random-button");
const searchButton = document.getElementById("search-button");
const displayImage = document.getElementById("display-image");
const input = document.getElementById("blank");
const artistName = document.getElementsByClassName("artist-name");
const artWorkTitle = document.getElementsByClassName("artwork-title");
const origin = document.getElementsByClassName("origin");
const date = document.getElementsByClassName("display-date");
const medium = document.getElementsByClassName("display-date");
const dime = document.getElementsByClassName("dimensions");




async function fetchartData() {
  const url = "https://api.artic.edu/api/v1/artworks";
  let currentPage = "";
  let BASE_URL = `${url}?page=${currentPage}`;
  let res = await axios.get(BASE_URL);
  let data = res.data;
  for (i = 0; i < data.data.length; i++) {
    let nextPage = data["pagination"].next_url;
    // let BASE_URL = nextPage
    console.log(nextPage);
    // if (data.data.artist_title === )
  };
  // console.log(data.data);
};
fetchartData();

// async function displayArtWork() {

// };
// displayArtWork();

// async function displayArtistName() {

// };
// displayArtisName();

// async function displayWorkTitle() {

// };
// displayWorkTitle();

// async function displayOrigin() {

// };
// displayOrigin();

// async function displayDate() {

// };
// displayDate();

// async function displayMedium() {

// };
// displayMedium();

// async function displayDime() {

// };
// displayDime();


// function remove() {

// };
// remove();



input.addEventListener('input', updateValue);
function updateValue() {
  let text = input.value;
  console.log(text);
}

// searchButton.addEventListener('searchButton', click);
// function updateValue() {

//   console.log();
// }

// randomButton.addEventListener('randomButton', click);
// function randomSelection() {

//   console.log();
// }
