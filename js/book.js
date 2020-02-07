/* eslint-disable no-alert */
'use strict';
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

function addBookToLibrary() {
  const titleVal = document.getElementById('title').value;
  const pageVal = document.getElementById('pageNumber').value;
  const authorVal = document.getElementById('authorName').value;
  const yearVal = document.getElementById('yearPublished').value;
  const genreVal = document.getElementById('genre').value;
  const statusVal = document.getElementById('status').value;

  validate(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal)

  document.querySelector('.bg-modal').style.display = 'none';
  const newBook = new Book(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal);

  saveBook(newBook);
}

function saveBook(book) {
  if (checkStorage()) {
    let ls = getLocalStorage()
    ls.push(book)
    setLocalStorage(ls)
  } else {
    myLibrary.push(book)
    setLocalStorage(myLibrary)
  }
}

function updateBook() {
  console.log('hi')
}

function deleteItem(book_id) {
  if (checkStorage()) {
    let ls = getLocalStorage();
    ls.splice(book_id, 1)
    setLocalStorage(ls)
  } else {
    alert('No data in the local stroage')
  }
  // re-render and update the page with the new set of data
}

function validate(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal) {
  if (titleVal === '' || pageVal === '' || authorVal === '' || yearVal === '') alert("fields can't be blank!");

  return
}

function checkStorage() {
  if (getLocalStorage() == null) {
    return false
  }

  return true
}

function getLocalStorage() {
  let ls = localStorage.getItem('myLibrary');

  return JSON.parse(ls)
}

function setLocalStorage(data) {
  localStorage.setItem('myLibrary', JSON.stringify(data));
}

function deleteLocalStorage() {
  localStorage.removeItem('myLibrary')
}

function render() {
  let ls = getLocalStorage();
  ls.forEach(element => {
    console.log(element)
  });
}

function getABook(book_id) {
  let ls = getLocalStorage();
  let book = ls[book_id]
  return book
}

 render()
// eslint-disable-next-line no-console
