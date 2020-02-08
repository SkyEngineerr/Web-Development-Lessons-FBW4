const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  heroes = document.getElementById('heroes'),
  resultHeading = document.getElementById('result-heading'),
  comicSection = document.getElementById('comicSection');
console.log(heroes);
//Keys for MARVEL API
const PRIV_KEY = "8bd6702a32eefc2c9cd4f8bf8b8e4f40e985c33b";
const PUBLIC_KEY = "8b4cb10529415427d58dd88366be9a56";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

const http = new EasyHTTP

// Search hero and fetch from API
function searchHero(e) {
  e.preventDefault();

  // Clear single meal
  comicSection.innerHTML = '';

  // Get search term
  const term = search.value;

  // Check input value whether empty or not
  if (term.trim()) {

    //get users
    http.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${term}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(val => {
        if (val.data.results === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else if (term == 'deadpool') {
          heroes.innerHTML = `<img src="deadpool/dp1.png" alt="" style="width:55rem;">`
        } else{
          console.log(val.data.results)
          heroes.innerHTML = val.data.results
            .map(
              hero => `
            <div class="card-fluid col-lg-3 col-md-3 col-6" style="width: 12rem;">
                <img class="card-img-top deneme" src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}" alt="" style="height:10rem; width:10rem;">
              <div class="card-body">
                <p class="card-text">${hero.name}</p>
              </div>
            </div>
          `
          )
          .join('');
        }
      })
      .catch(er => console.log(er))
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}



//Random number function for random click button
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}



//Get random hero from API
function randomHero (e) {
  const randomID = getRandomInt(1010671, 1010698)
  comicSection.innerHTML = ''
  http.get(`https://gateway.marvel.com/v1/public/characters/${randomID}?&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(val => {
        const hero = val.data.results[0]
        console.log(hero)
        heroes.innerHTML = `
        <div class="card text-center" style="width: 100rem; ">
                <div class="row no-gutters">
                    <div class="col-auto">
                        <img src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}" class="img-fluid" alt="" style="width: 20rem;">
                    </div>
                    <div class="col text-left">
                        <div class="card-block px-2">
                            <h3 class="card-title mt-3">${hero.name}</h3>
                            <p class="card-text">${hero.description}</p>
                            
                        </div>
                    </div>
                </div>
                <div class="card-footer w-100 text-muted text-right">
                  Data provided by Marvel. © 2020 Marvel
                </div>
            </div>`
      })
      .catch(er => console.log(er))

      http.get(`https://gateway.marvel.com/v1/public/characters/${randomID}/comics?format=comic&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(val => {
        const comics = val.data.results
        console.log(val.data)
        for(item of comics) {
          let charList = []
          let creatorList = []
          for (element of item.characters.items) {
            charList.push(element.name)
          }
          for (element of item.creators.items) {
            creatorList.push(element.name)
          }
          console.log(item)
          comicSection.innerHTML += `
          <div class="card-fluid col-lg-4 col-md-3 col-6 h-100 mt-3" id="comicCards">
            <a href="#"><img src="${item.thumbnail.path+'.'+item.thumbnail.extension}" class="card-img-top" alt="" ></a>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
            </div>
            <p style="font-size: 12px;" class="card-text mb-0">${item.description}</p>
            <p style="font-size: 12px;" class="card-text text-muted ">Characters: ${charList} </p>
            <p style="font-size: 12px;" class="card-text text-muted">Creators: ${creatorList} </p>
            <div class="card-footer">
              <small style="line-height: 1;" class="text-muted"> Data provided by Marvel. © 2020 Marvel </small>
            </div>
          </div>`
          charlist = []
          creatorList = []
        }
       
      })
      
      .catch(er => console.log(er))
    // Clear search text
    search.value = '';
} 



//Event listeners
submit.addEventListener('submit', searchHero);
random.addEventListener('click', randomHero);





// $.getJSON(url, {
//     ts: ts,
//     apikey: PUBLIC_KEY,
//     hash: hash
//   })
//   .done(function (data) {
//     console.log(data.data);
//     resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

    // if (data.results === null) {
    //   resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
    // } else if (term == 'deadpool') {
    //   heroes.innerHTML = `<img src="Photos/deadpool/dp3.png" alt="">`
    // } else {
//       console.log(data.data.results)
//       const heroes = data.data.results
//       const h1 = document.createElement('h1')
//       h1.innerHTML ="saDSKLASMDKASMDLA"
//       heroes.appendChild(h1)
//       heroes.innerHTML = 'asdasdasdasdasddasdasdasd'
//       console.log(heroes.innerHTML)
//       // for(item of heroes) {
//       //   heroes.innerHTML = 'asdasdasdasdasddasdasdasd'
//       //   // heroes.innerHTML = `
//       //   // <div class="col-lg-2 col-md-3 col-6 ">
//       //   // <a href="#" class="d-block mb-4 h-100">
//       //   //   <img class="img-fluid img-thumbnail" src="${item.thumbnail.path + '.' +item.thumbnail.extension}" alt="">
//       //   // </a>
//       //   // <div class="carousel-caption">
//       //   //   <h4>${item.name}</h4>
//       //   // </div>
//       //   // </div>
//       //   // `
//       // }
//       // heroes.innerHTML = data.results
//       //   .map(
//       //     hero => `
//       //   <div class="col-lg-2 col-md-3 col-6 ">
//       //   <a href="#" class="d-block mb-4 h-100">
//       //     <img class="img-fluid img-thumbnail" src="${hero.image.url}" alt="">
//       //   </a>
//       //   <div class="carousel-caption">
//       //     <h4>${hero.name}</h4>
//       //   </div>
//       // </div>
//       // `
//       // )
//       // .join('');
//     }
//   })
//   .fail(function(err){
//     // the error codes are listed on the dev site
//     console.log(err);
//   });