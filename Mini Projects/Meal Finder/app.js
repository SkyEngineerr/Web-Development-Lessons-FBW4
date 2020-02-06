// https://superheroapi.com/api/1158840531118606
console.log(12)
const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  heroes = document.getElementById('heroes'),
  resultHeading = document.getElementById('result-heading'),
  single_hero = document.getElementById('single-hero');
  


// Search meal and fetch from API
function searchHero(e) {
  
  e.preventDefault();

  // Clear single meal
  single_hero.innerHTML = '';

  // Get search term
  const term = search.value;
  // Check for empty

  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url2 = `http://gateway.marvel.com/v1/public/comics?ts=${Date.now()}&apikey=8b4cb10529415427d58dd88366be9a56&hash=8bd6702a32eefc2c9cd4f8bf8b8e4f40e985c33b`
  if (term.trim()) {
    console.log("submit calisiyor")
    fetch(proxyurl+marvel+term)
    .then(res => res.text())
    .then(data => {
      console.log(data);
      data = JSON.parse(data)
      resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

      if (data.results === null){
        resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
      }
      else if (term == 'deadpool') {
        heroes.innerHTML = `<img src="Photos/deadpool/dp3.png" alt="">`
      }
      else{
        
        heroes.innerHTML = data.results
            .map(
              hero => `
            <div class="col-lg-2 col-md-3 col-6 ">
            <a href="#" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src="${hero.image.url}" alt="">
            </a>
            <div class="carousel-caption">
              <h4>${hero.name}</h4>
            </div>
          </div>
          `
            )
            .join('');
      }
      })
    .catch(() => console.log("Can’t access " + marvel + " response. Blocked by browser?"))
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}



Event listeners
submit.addEventListener('submit', searchHero);