
document.addEventListener("DOMContentLoaded", () => {
  let gifsForm = document.querySelector("#giphy-form")
  gifsForm.addEventListener("submit", handleGifForm);
})

//When the giphy form is submitted, 
function handleGifForm(event){
  event.preventDefault()
  let searchTerm = event.target[0].value
  fetchGifs(searchTerm)
}

//fetch to the GIPHY API, 
function fetchGifs(searchTerm){
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEYS.giphy}&q=${searchTerm}&limit=3&rating=g`)
  .then(res => { return res.json() })
  .then(data => { 
    processGifs(data)
   })
}

//add <img> to our #giphy-div
function processGifs(obj){
  let imageTags = obj.data.map(gif => `<img src="${gif.images.original.url}" width="200px"/>`).join("\n")
    document.querySelector("#giphy-div").innerHTML = imageTags
}