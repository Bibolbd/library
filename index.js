let myLibrary = []
let bookNumber = 0;
const addBook = document.getElementById('addBook')

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info  = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.isRead
    }
}

addBook.addEventListener('click', function (Event) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const numberOfPages = document.getElementById('numberOfPages').value
    const isRead = document.getElementById('isRead').value
    myLibrary.push(new Book(title, author, numberOfPages, isRead))
    Event.preventDefault()
    console.log(myLibrary);
})