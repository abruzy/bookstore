
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

function getInputValue() {
  const titleVal = document.getElementById('title').value;
  const pageVal = document.getElementById('pageNumber').value;
  const authorVal = document.getElementById('authorName').value;
  const yearVal = document.getElementById('yearPublished').value;
  const genreVal = document.getElementById('genre').value;
  const statusVal = document.getElementById('status').value;

  return [titleVal, pageVal, authorVal, yearVal, genreVal, statusVal];
}

function validate(titleVal, pageVal, authorVal, yearVal) {
  if (titleVal === '' || pageVal === '' || authorVal === '' || yearVal === '') alert("fields can't be blank!");
}

function getLocalStorage() {
  const ls = localStorage.getItem('myLibrary');

  return JSON.parse(ls);
}

function checkStorage() {
  if (getLocalStorage() == null) {
    return false;
  }

  return true;
}

function setLocalStorage(data) {
  localStorage.setItem('myLibrary', JSON.stringify(data));
}

function refreshPage() {
  window.location.reload();
}

function saveBook(book) {
  if (checkStorage()) {
    const ls = getLocalStorage();
    ls.push(book);
    setLocalStorage(ls);
  } else {
    myLibrary.push(book);
    setLocalStorage(myLibrary);
  }

  refreshPage();
}

function addBookToLibrary() {
  const [titleVal, pageVal, authorVal, yearVal, genreVal, statusVal] = getInputValue();

  validate(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal);

  document.querySelector('.bg-modal').style.display = 'none';
  const newBook = new Book(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal);

  saveBook(newBook);
}

function updateBook(bookId) {
  const [titleVal, pageVal, authorVal, yearVal, genreVal, statusVal] = getInputValue();
  validate(titleVal, pageVal, authorVal, yearVal, genreVal, statusVal);

  const ls = getLocalStorage();
  const book = ls[bookId];
  book.title = titleVal;
  book.author = authorVal;
  book.page = pageVal;
  book.year = yearVal;
  book.genre = genreVal;
  book.status = statusVal;
  ls[bookId] = book;
  setLocalStorage(ls);
  refreshPage();
}

function deleteItem(bookId) {
  if (checkStorage()) {
    const ls = getLocalStorage();
    ls.splice(bookId, 1);
    setLocalStorage(ls);
  } else {
    alert('No data in the local stroage');
  }

  refreshPage();
}

function deleteLocalStorage() {
  localStorage.removeItem('myLibrary');
}

function getABook(bookId) {
  const ls = getLocalStorage();
  const book = ls[bookId];
  return book;
}

function render() {
  const ls = getLocalStorage();
  ls.forEach((element, index) => {
    const tr = document.createElement('TR');
    tr.setAttribute('class', `book-${index}`);
    tr.innerHTML = `  
        <td data-column="title">${element.title}</td>
        <td data-column="pageNumber">${element.page}</td>
        <td data-column="authorName">${element.author}</td>
        <td data-column="yearPublished">${element.year}</td>
        <td data-column="genre">${element.genre}</td>
        <td data-column="status">${element.status}</td>
        <td data-column="edit"><a data-id=${index} class="btn btn-primary edit-${index}">Edit</a></td>
        <td data-column="delete"><a data-id="${index}" class="btn btn-danger delete-${index}">Delete</a></td>
   `;
    document.querySelector('tbody').appendChild(tr);
    deleteBook(index);
    editBook(index);
  });
}

function deleteBook(index) {
  document.querySelector(`.delete-${index}`).addEventListener('click', function deleteButton() {
    const bookId = this.getAttribute('data-id');
    document.querySelector(`.book-${bookId}`).style.display = 'none';
    deleteItem(bookId);
  });
}

const populateEditForm = (book) => {
  document.getElementById('title').value = book.title;
  document.getElementById('pageNumber').value = book.page;
  document.getElementById('authorName').value = book.author;
  document.getElementById('yearPublished').value = book.year;
  document.getElementById('genre').value = book.genre;
  document.getElementById('status').value = book.status;
  document.querySelector('.bg-modal').style.display = 'flex';
};

function editBook(index) {
  document.querySelector(`.edit-${index}`).addEventListener('click', function editButton() {
    const bookId = this.getAttribute('data-id');
    const query = document.querySelector('.general-button');
    query.removeEventListener('click', addBookToLibrary);
    query.removeAttribute('id');
    query.setAttribute('id', 'edit');
    query.innerHTML = 'Update';
    const book = getABook(bookId);
    populateEditForm(book);

    document.getElementById('edit').addEventListener('click', () => {
      updateBook(index);
    });
  });
}

render();