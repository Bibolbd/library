class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  info() {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.isRead
    );
  }

  removeBook() {
    const self = this;
    displayLibrary(
      myLibrary.filter(function (book) {
        return book !== self;
      }, this)
    );
  }

  changeStatus() {
    this.isRead = this.isRead === "finished" ? "not yet read" : "finished";
    displayLibrary(myLibrary);
  }
}
let myLibrary = [];

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
  addBook.style.display = "none";
  displayLibrary(myLibrary);
});

function displayLibrary(array) {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }

  array.map(function (value) {
    const bookCard = document.createElement("div");
    const buttonGroup = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const removeButton = document.createElement("button");
    const readButton = document.createElement("button");

    title.textContent = value.title;
    author.textContent = `Author: ${value.author}`;
    pages.textContent = `Pages: ${value.pages}`;
    removeButton.textContent = "Remove";
    readButton.textContent = `${
      value.isRead === "finished" ? "Finished" : "Not Yet"
    }`;

    bookCard.classList.add("cardContainer");
    buttonGroup.classList.add("buttonGroup");
    removeButton.classList.add("removeButton");
    readButton.classList.add("readButton");
    title.classList.add("bookTitle");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(removeButton);
    buttonGroup.appendChild(readButton);
    bookCard.appendChild(buttonGroup);
    library.appendChild(bookCard);

    removeButton.addEventListener("click", function () {
      value.removeBook();
    });

    readButton.addEventListener("click", function () {
      value.changeStatus();
    });
  });
}

let addState = false;
newBook.addEventListener("click", function () {
  addState = !addState;
  addBook.style.display = addState ? "flex" : "none";
});
