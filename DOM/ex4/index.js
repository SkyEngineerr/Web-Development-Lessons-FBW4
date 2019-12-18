const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];


const mainDiv = document.querySelector('div.container')

for (let i = 0; i<4; i++) {
    mainDiv.appendChild(document.createElement('div'))
}

let divCard = document.querySelector('div.container').querySelectorAll("div");
console.log(divCard);

divCard.forEach(function(item){
    item.className = "card col-lg-3 col-md-3 col-sm-6 col-xs-12"
    item.style.width = "18rem";
    item.appendChild(document.createElement('div')).className = 'card-body'
    item.appendChild(document.createElement('img')).className = 'card-img-top'
    
})

let divCardBody = document.querySelectorAll('.card-body')
divCardBody = Array.from(divCardBody)
divCardBody.forEach(function(item){
    item.appendChild(document.createElement('h5')).className = 'card-title'
    item.appendChild(document.createElement('p')).className = 'card-text'
    item.appendChild(document.createElement('a')).className = 'btn btn-primary'
    
})
let headers = document.querySelectorAll(".card-title")

for (let i = 0; i<headers.length; i++) {
    headers[i].appendChild(document.createTextNode(books[i].title))
}

let cardText = document.querySelectorAll(".card-text")
    
for (let i = 0; i<cardText.length; i++) {
    cardText[i].appendChild(document.createTextNode(books[i].author))
}

let images = document.querySelectorAll(".card-img-top")
for (let i = 0; i<images.length; i++) {
    images[i].src = books[i].img
}
console.log(divCardBody);



console.log(mainDiv);


