/* eslint-disable no-alert */
const myLibrary = [];

function Book(title, page, author, year, genre, status) {
  // the constructor
  this.title = title;
  this.page = page;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.status = status;
}

function updatelocalStorage() {
  window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function deleteItem() {
  // splice and remove one item selected
  updatelocalStorage(myLibrary);
  // re-render and update the page with the new set of data
}

function pushBook(book) {
  if (checkStorage()) {
    ls = JSON.parse(getLocalStorage())
    ls.push(book)
    setLocalStorage(ls)
  } else {
    myLibrary.push(book)
    setLocalStorage(myLibrary)
  }
}

function checkStorage() {
  if (getLocalStorage() == null) {
    return false
  }

  return true
}

function getLocalStorage() {
  return localStorage.getItem('myLibrary');
}

function setLocalStorage(data) {
  localStorage.setItem('myLibrary', JSON.stringify(data));
}

function deleteLocalStorage() {
  localStorage.removeItem('myLibrary')
}

function addBookToLibrary() {
  const titleVal = document.getElementById('title').value;
  const pageVal = document.getElementById('pageNumber').value;
  const authorVal = document.getElementById('authorName').value;
  const yearVal = document.getElementById('yearPublished').value;
  const genreVal = document.getElementById('genre').value;
  const statusVal = document.getElementById('status').value;

  if (titleVal === '' || pageVal === '' || authorVal === '' || yearVal === '') alert("fields can't be blank!");

  document.querySelector('.bg-modal').style.display = 'none';
  const newBook = new Book(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal);

  pushBook(newBook);
}

function render() {
  ls = getLocalStorage();
  JSON.parse(ls).forEach(element => {
     element
  });
}
render();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addBookToLibrary);
});

// eslint-disable-next-line no-console
