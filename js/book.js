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
  if (checkStorage) {
    // add to the local storage array
    // delete the current local storage array
    // save the local storage array
  getLocalStorage().push(book)
  
  }

  myLibrary.push(book)
  setLocalStorage(myLibrary)
  // re-render and update the page with the new set of data
}

function checkStorage() {
  if (getLocalStorage == null) false

  return true
}

function getLocalStorage() {
  getMyLibray = window.localStorage.getItem('myLibrary');

  return getMyLibray
}

function setLocalStorage(data) {
   window.localStorage.setItem('myLibrary', JSON.stringify(data));
}

function deleteLocalStorage(){
  
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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addBookToLibrary);
});

// eslint-disable-next-line no-console
