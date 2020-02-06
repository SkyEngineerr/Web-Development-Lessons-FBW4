// you will also have to setup the referring domains on your marvel developer portal
const PRIV_KEY = "8bd6702a32eefc2c9cd4f8bf8b8e4f40e985c33b";
const PUBLIC_KEY = "8b4cb10529415427d58dd88366be9a56";

function getMarvelResponse() {

  // you need a new ts every request                                                                                    
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


   url = 'http://gateway.marvel.com:80/v1/public/characters/1009718';

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash
    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
   
      console.log(data.data.results[0].stories.items[0]);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();
