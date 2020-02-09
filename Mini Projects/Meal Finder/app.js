const http = new EasyHTTP

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



// Searching the heroes or a hero and fetch from API
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
          heroes.innerHTML = `<img src="deadpool/dp1.png" class="img-fluid" alt="" style="width:55rem;">`
        } else{
          console.log(val.data.results);
          
          heroes.innerHTML = val.data.results
            .map(
              hero => `
            <div class="card-fluid col-lg-3 col-md-3 col-6" data-heroID="${hero.id}" style="width: 12rem;">
                <img class="card-img-top deneme" src="${hero.thumbnail.path + '.' + hero.thumbnail.extension}" alt="" style="height:10rem; width:10rem;">
              <div class="card-body hero-info">
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

//Get Hero By ID
function getHeroById(heroID){
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
  http.get(`https://gateway.marvel.com/v1/public/characters/${heroid}/comics?format=comic&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
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
}



//Event listeners
submit.addEventListener('submit', searchHero);
random.addEventListener('click', randomHero);




heroes.addEventListener('click',  e => {
  const heroID = e.path[1].getAttribute('data-heroID')
  getHeroById(heroID)
})