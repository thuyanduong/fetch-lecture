//When the giphy form is submitted, fetch to the GIPHY API, add <img> to our #giphy-div
document.addEventListener("DOMContentLoaded", () => {
  let gifsForm = document.querySelector("#giphy-form")
  gifsForm.addEventListener("submit", fetchGifs);
})

function fetchGifs(event){
  event.preventDefault()
  let searchTerm = event.target[0].value
  console.log(searchTerm)
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEYS.giphy}&q=${searchTerm}&limit=3&rating=g`)
  .then(res => { return res.json() })
  .then(data => { 
    let imageTags = processGifs(data).join("\n")
    document.querySelector("#giphy-div").innerHTML = imageTags

   })
}

function processGifs(obj){
  return obj.data.map(gif => `<img src="${gif.images.original.url}" width="200px"/>`)
}
