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



async function fetchartData(text) {
  const url = "https://api.artic.edu/api/v1/artworks";
  let currentPage = "";
  // try {
  let BASE_URL = `${url}/search?q=${text}`;
  let res = await axios.get(BASE_URL);
  let data = res.data;
  console.log(data.data);
  let res2 = await axios.get(data.data[0].api_link)
  artistName.textContent = res2.data.data.artist_title
  artWorkTitle.textContent = res2.data.data.title
  displayImage.textContent = res2.data.data.thumbnail
  origin.textContent = res2.data.data.place_of_origin
  date.textContent = res2.data.data.date_display
  medium.textContent = res2.data.medium_display
  dime.textContent = res2.data.data.dimensions

  randomButton.addEventListener('click', randomSelection);
  function randomSelection() {
    let random = Math.floor(Math.random() * data.data[0].api_link.length);
    fetchartData(random)
  }
  // console.log(res2.data.data.artist_title);
  // data.data.forEach(work => {
  //   const 
  // })
  // for (i = 0; i < data.data.length; i++) {
  //   let nextPage = data["pagination"].next_url;
  // let BASE_URL = nextPage
  // console.log(nextPage);
  // if (data.data.artist_title === )
  // };

  // };
};


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



searchButton.addEventListener('click', updateValue);
function updateValue() {
  let text = input.value;
  fetchartData(text)
}

// searchButton.addEventListener('searchButton', click);
// function updateValue() {

//   console.log();
// }

// randomButton.addEventListener('click', randomSelection);
// function randomSelection() {
//   let random = Math.floor(Math.random() * data.data.length);
//   fetchartData(random)
// }
