let myLibrary = [];
let bookNumber = 0;
const addBook = document.getElementById("addBook");

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

addBook.addEventListener("submit", function (Event) {
  Event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const numberOfPages = document.getElementById("numberOfPages").value;
  const isRead = document.getElementById("isRead").checked
    ? "finished"
    : "not yet read";
  myLibrary.push(new Book(title, author, numberOfPages, isRead));
  displayLibrary();
});

function displayLibrary() {
  myLibrary.map(function (value) {
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let isRead = document.createElement("p");
    title.innerHTML = value.title;
    author.innerHTML = value.author;
    pages.innerHTML = value.pages;
    isRead.innerHTML = value.isRead;
    document.body.appendChild(title);
    document.body.appendChild(author);
    document.body.appendChild(pages);
    document.body.appendChild(isRead);
  });
}
