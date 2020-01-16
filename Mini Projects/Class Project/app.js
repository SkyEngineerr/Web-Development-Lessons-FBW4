//Book Constructor
function Book (title, author ,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    
}

//UI Constructor
function UI(){}

//Add Book to List
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById("book-list")

    //Create tr element
    const row = document.createElement('tr')

    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</></td>`
    
    list.appendChild(row)
}

//Event Listener

document.getElementById("book-form").addEventListener('submit', function (e){
    //Get inputs values
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const isbn = document.getElementById("isbn").value

    //Intantiate Book
    const book = new Book(title, author, isbn)
    console.log(book);

    //Intantiate UI
    const ui = new UI();

    //Add book to list
    ui.addBookToList(book)

    e.preventDefault();
})

console.log('eren');