const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  heroes = document.getElementById('heroes'),
  resultHeading = document.getElementById('result-heading'),
  single_hero = document.getElementById('single-hero');
console.log(12);
//Keys for MARVEL API
const PRIV_KEY = "8bd6702a32eefc2c9cd4f8bf8b8e4f40e985c33b";
const PUBLIC_KEY = "8b4cb10529415427d58dd88366be9a56";


// Search meal and fetch from API
function searchHero(e) {
  e.preventDefault();

  // Clear single meal
  single_hero.innerHTML = '';

  // Get search term
  const term = search.value;

  //Timestampf and hash for Marvel API
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  // Check for empty
  const url = 'http://gateway.marvel.com:80/v1/public/characters/1009718';

  if (term.trim()) {
    console.log("submit calisiyor")
    console.log(url);
    $.getJSON(url, {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash
      })
      .done(function (data) {
        console.log(data.data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.results === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else if (term == 'deadpool') {
          heroes.innerHTML = `<img src="Photos/deadpool/dp3.png" alt="">`
        } else {

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
      .fail(function(err){
        // the error codes are listed on the dev site
        console.log(err);
      });

    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}



//Event listeners
submit.addEventListener('submit', searchHero);