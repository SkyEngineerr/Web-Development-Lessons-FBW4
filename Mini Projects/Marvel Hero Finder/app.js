const http = new EasyHTTP

const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  heroes = document.getElementById('heroes'),
  resultHeading = document.getElementById('result-heading'),
  comicSection = document.getElementById('comicSection');
  loading = document.getElementById("loading")


//Display of loading screen was defined 'none'
loading.style.display = "none"


//Keys for MARVEL API
const PRIV_KEY = "8bd6702a32eefc2c9cd4f8bf8b8e4f40e985c33b";
const PUBLIC_KEY = "8b4cb10529415427d58dd88366be9a56";
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

// Searching the heroes or a hero and fetch from API
function searchHero(e) {
  // Clear sections
  comicSection.innerHTML = '';
  heroes.innerHTML = '';
  resultHeading.innerHTML = '';

  // Get search term
  const term = search.value;

  e.preventDefault();

  function loader() {
    setTimeout(function () {
      loading.style.display = "block";
    }, 10);
    setTimeout(function () {
      loading.style.display = "none";

      // Check input value whether empty or not
      if (term.trim()) {
        //get users
        http.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${term}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
          .then(val => {
            const heroesJS = val.data.results
            let num = 1

            if (heroesJS.length == 0) {
              resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;

            } else if (term == 'deadpool') {
              heroes.innerHTML = `<img src="https://media0.giphy.com/media/t774Y478EoCrX6cCie/source.gif" class="img-fluid" alt="" style="width:55rem;">`
            } else {
              for (hero of heroesJS) {
                console.log(hero)
                if (hero.description == "" && hero.thumbnail.path.includes("image")) {
                  heroes.innerHTML += `
              <div class="card m-2" style="width:18rem;" data-heroID="${hero.id}">
                <img class="card-img-top" src="Unknown avatars/${num}.jpg"  style="height:17rem;">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text" style="font-size:1vh">There is no information about the hero. If you want to get some information about the hero, please search on Google or Wikipedia.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              `
                  num++
                } else if (hero.description == "") {
                  heroes.innerHTML += `
              <div class="card m-2" style="width:18rem;" data-heroID="${hero.id}">
                <img class="card-img-top" src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}"  style="height:17rem;">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text" style="font-size:1vh">There is no information about the hero. If you want to get some information about the hero, please search on Google or Wikipedia.</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              `
                } else {
                  heroes.innerHTML += `
              <div class="card m-2 overflow-hidden" style="width:18rem;" data-heroID="${hero.id}">
                <img class="card-img-top" src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}"  style="height:17rem;">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text " style="font-size:1vh">${hero.description}</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              `
                }
              }
            }
          })
          .catch(er => console.log(er))
        // Clear search text
        search.value = '';
      } else {
        alert('Please enter a search term');
      }

    }, 2100);
  }
  loader()
}

//Random number function for random click button
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Get random hero from API
function randomHero(e) {
  let randomID = getRandomInt(1009146, 1011143)
  console.log(randomID)
  comicSection.innerHTML = ''
  resultHeading.innerHTML = ''

  let fetchNow = function () {
    http.get(`https://gateway.marvel.com/v1/public/characters/${randomID}?&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .then(val => {
        if (val.code == 404) {
          randomID = getRandomInt(1009146, 1011143)
          console.log(randomID)
          fetchNow()
        } else {
          const hero = val.data.results[0]
          if (hero.description == "") {
            heroes.innerHTML = `
            <div class="card text-center" style="width: 100rem; ">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}" class="img-fluid" alt="" style="width: 20rem;">
                        </div>
                        <div class="col text-left">
                            <div class="card-block px-2">
                                <h3 class="card-title mt-3 ml-5">${hero.name}</h3>
                                <p class="card-text mt-3 ml-3">There is no information about "${hero.name}" in our database. If you want to get some information about the hero, you can visit "https://wwww.marvel.com"</p>
                            </div>
                            <div class="card-footer w-100 text-muted text-right" style="bottom:0; position:absolute;">
                                Data provided by Marvel. © 2020 Marvel
                            </div>
                        </div>
                    </div>
              </div>`
          } else {
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
                            <div class="card-footer w-100 text-muted text-right" style="bottom:0; position:absolute;">
                                Data provided by Marvel. © 2020 Marvel
                            </div>
                        </div>
                    </div>
              </div>`
          }
        }

        //Print all comics bottom of the hero section
        http.get(`https://gateway.marvel.com/v1/public/characters/${randomID}/comics?format=comic&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
          .then(val => {
            const comics = val.data.results
            console.log(val.data)
            for (item of comics) {
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
          <div class="card-fluid col-lg-4 col-md-3 col-12 h-100 mt-3" id="comicCards">
            <a id="comic_card" href="#"><img src="${item.thumbnail.path+'.'+item.thumbnail.extension}" class="card-img-top" alt="" ></a>
            <div class="card-body" style="height:30rem;">
              <h5 class="card-title">${item.title}</h5>
              <p style="font-size: 12px;" class="card-text mb-0">${item.description}</p>
              <p style="font-size: 12px;" class="card-text text-muted mt-1 ">Characters: ${charList} </p>
              <p style="font-size: 12px;" class="card-text text-muted">Creators: ${creatorList} </p>
              <div class="card-footer text-center" style="bottom:0; position:absolute;">
                <small style="line-height: 1;" class="text-muted"> Data provided by Marvel. © 2020 Marvel </small>
              </div>
            </div>
          </div>`
              charlist = []
              creatorList = []
            }

          })
          .catch(er => console.log(er))

      })
      .catch(er => console.log(er))
  }
  fetchNow()


  // Clear search text
  search.value = '';
}

//Get Hero By ID
function getHeroById(heroID) {
  heroes.innerHTML = '';
  comicSection.innerHTML = '';
  const heroid = heroID
  http.get(`https://gateway.marvel.com/v1/public/characters/${heroid}?&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then(val => {
      const hero = val.data.results[0]
      heroes.innerHTML = `
            <div class="card text-center" style="width: 100rem; ">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}" class="img-fluid" alt="" style="width: 20rem;">
                        </div>
                        <div class="col text-left">
                            <div class="card-block px-2">
                                <h3 class="card-title mt-3">${hero.name}</h3>
                                <p class="card-text">There is no information about "${hero.name}" in our database. If you want to get some information about the hero, you can visit "https://wwww.marvel.com"</p>
                            </div>
                            <div class="card-footer w-100 text-muted text-right" style="bottom:0; position:absolute;">
                                Data provided by Marvel. © 2020 Marvel
                            </div>
                        </div>
                    </div>
              </div>`
    })
    .catch(er => console.log(er))
  http.get(`https://gateway.marvel.com/v1/public/characters/${heroid}/comics?format=comic&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then(val => {
      const comics = val.data.results
      console.log(val.data)
      for (item of comics) {
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
          <div class="card-fluid col-lg-4 col-md-3 col-12 h-100 mt-3" id="comicCards">
            <a id="comic_card" href="#"><img src="${item.thumbnail.path+'.'+item.thumbnail.extension}" class="card-img-top" alt="" ></a>
            <div class="card-body" style="height:30rem;">
              <h5 class="card-title">${item.title}</h5>
              <p style="font-size: 12px;" class="card-text mb-0">${item.description}</p>
              <p style="font-size: 12px;" class="card-text text-muted mt-1 ">Characters: ${charList} </p>
              <p style="font-size: 12px;" class="card-text text-muted">Creators: ${creatorList} </p>
              <div class="card-footer text-center" style="bottom:0; position:absolute;">
                <small style="line-height: 1;" class="text-muted"> Data provided by Marvel. © 2020 Marvel </small>
              </div>
            </div>
          </div>`
        charlist = []
        creatorList = []
      }

    })
    .catch(er => console.log(er))
}



//Event listeners
submit.addEventListener('submit', searchHero);
random.addEventListener('click', randomHero);




heroes.addEventListener('click', e => {
  const heroID = e.path[1].getAttribute('data-heroID')
  getHeroById(heroID)
})