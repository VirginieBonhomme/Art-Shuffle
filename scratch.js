const randomButton = document.getElementById("#random-button");
const searchButton = document.getElementById("#search-button");
const displayImage = document.getElementById("#display-image");




async function fetchartWork() {
  const url = "https://api.artic.edu/api/v1/artworks";
  let res = await axios.get(url);
  let data = res.data;
  console.log(data.data);
};
fetchartWork();