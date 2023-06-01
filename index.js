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
  // console.log(myLibrary)
  displayLibrary();
});

function displayLibrary() {
  let library = myLibrary.map(function (value, index) {
    return {
      key: index,
      title: value.title,
      author: value.author,
      pages: value.pages,
      isRead: value.isRead,
    };
  });
  console.log(library);
}
