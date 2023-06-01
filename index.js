let myLibrary = [];
let bookNumber = -1;

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.isRead
    );
  };
}

const addBook = document.getElementById("addBook");
const newBook = document.getElementById("newBook");
const library = document.getElementById("library");

addBook.addEventListener("submit", function (Event) {
  Event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("numberOfPages").value;
  const isRead = document.getElementById("isRead").checked
    ? "finished"
    : "not yet read";
  myLibrary.push(new Book(title, author, numberOfPages, isRead));
  bookNumber++;
  displayLibrary();
  console.log(bookNumber)
});

function displayLibrary() {
  myLibrary.map(function (value, index) {
    if (index === bookNumber) {
      let title = document.createElement("p");
      let author = document.createElement("p");
      let pages = document.createElement("p");
      let isRead = document.createElement("p");
      title.innerHTML = value.title;
      author.innerHTML = value.author;
      pages.innerHTML = value.pages;
      isRead.innerHTML = value.isRead;
      library.appendChild(title);
      library.appendChild(author);
      library.appendChild(pages);
      library.appendChild(isRead);
    }
  });
}

let addState = false;
newBook.addEventListener("click", function () {
  addState = !addState;
  addBook.style.display = addState ? "block" : "none";
});
