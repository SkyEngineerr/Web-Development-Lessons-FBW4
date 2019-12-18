<<<<<<< HEAD
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,19,20]

let body1 = document.querySelector('body')
let ulList = document.createElement("ul");

arr.forEach(function(item){  
  if(item % 2 == 0){
    ulList.appendChild(document.createElement('li')).appendChild(document.createTextNode(item))
  }
})
=======
const books1 = [
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

/// ORDERING OBJECT TO FIRST CHARACTER OF AUTHOR'S SURNAME
var books = books1.slice(0);
books.sort(function(a,b) {
    var x = a.author.split(" ")[1][0].toLowerCase();
    var y = b.author.split(" ")[1][0].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
//////////////////////////////////////////////////////////

const mainDiv = document.querySelector('div.row')

for (let i = 0; i<4; i++) {
    mainDiv.appendChild(document.createElement('div'))
}

let divCard = document.querySelector('div.row').querySelectorAll("div");
console.log(divCard);

divCard.forEach(function(item){
    item.className = "card col-lg-3 col-md-3 col-sm-6 col-xs-12 "
    item.style.width = "18rem";
    item.appendChild(document.createElement('img')).className = 'card-img-top'
    item.appendChild(document.createElement('div')).className = 'card-body'
})

let divCardBody = document.querySelectorAll('.card-body')
divCardBody = Array.from(divCardBody)
divCardBody.forEach(function(item){
    item.appendChild(document.createElement('h5')).className = 'card-title'
    item.appendChild(document.createElement('p')).className = 'card-text'
    item.appendChild(document.createElement('a')).className = 'btn'
})

let images = document.querySelectorAll(".card-img-top")
for (let i = 0; i<images.length; i++) {
    images[i].src = books[i].img
}

let headers = document.querySelectorAll(".card-title")
for (let i = 0; i<headers.length; i++) {
    headers[i].appendChild(document.createTextNode(books[i].title))
}

let cardText = document.querySelectorAll(".card-text")   
for (let i = 0; i<cardText.length; i++) {
    cardText[i].appendChild(document.createTextNode(books[i].author.split(" ")[1] + ", " + books[i].author.split(" ")[0]))
}

let buttons = document.querySelectorAll(".btn") 
for (let i = 0; i<buttons.length; i++) {
  if(books[i].alreadyRead == true) {
    buttons[i].className = "btn btn-success"
    buttons[i].appendChild(document.createTextNode("read"))
  }
  else {
    buttons[i].className = "btn btn-secondary"
    buttons[i].appendChild(document.createTextNode("to read"))
  }
  buttons[i].style.color = "white"
}

>>>>>>> 45c5ccd6538130d5b763e8ba343afbd26a3d1a6f

body1.appendChild(ulList)

<<<<<<< HEAD
=======



console.log(divCardBody);
console.log(mainDiv);
>>>>>>> 45c5ccd6538130d5b763e8ba343afbd26a3d1a6f


