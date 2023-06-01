let myLibrary = [];

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

Book.prototype.removeBook = function () {
  myLibrary = myLibrary.filter(function (book) {
    return book !== this;
  }, this);
  displayLibrary(myLibrary);
};

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
  displayLibrary(myLibrary);
});

function displayLibrary(array) {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }

  array.map(function (value) {
    let bookCard = document.createElement("div");
    let buttonGroup = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let isRead = document.createElement("p");
    let removeButton = document.createElement("button");

    title.textContent = value.title;
    author.textContent = `Author: ${value.author}`;
    pages.textContent = `Pages: ${value.pages}`;
    isRead.textContent = `IsRead: ${value.isRead}`;
    removeButton.textContent = "Remove";

    bookCard.classList.add("cardContainer");
    buttonGroup.classList.add("buttonGroup");
    removeButton.classList.add("removeButton");
    title.classList.add("bookTitle");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(isRead);
    buttonGroup.appendChild(removeButton);
    bookCard.appendChild(buttonGroup);
    library.appendChild(bookCard);

    removeButton.addEventListener("click", function () {
      value.removeBook();
    });
  });
}

let addState = false;
newBook.addEventListener("click", function () {
  addState = !addState;
  addBook.style.display = addState ? "block" : "none";
});
