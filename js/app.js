'use strict';

document.getElementById('button').addEventListener('click',
  () => {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

document.querySelector('.close').addEventListener('click',
  () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addBookToLibrary);
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.delete').addEventListener('click', function () {
    let book_id = this.getAttribute('data-id')
    document.querySelector('.book-' + book_id).style.display = 'none'
    deleteItem(book_id)
  })
})



document.querySelector('.edit').addEventListener('click', function () {
  let book_id = this.getAttribute('data-id')
  let query = document.querySelector('.general-button')
  query.removeAttribute('id')
  query.setAttribute('id', 'edit')
  query.innerHTML = 'Update'
  let book = getABook(book_id)
  populateEditForm(book)
})

const populateEditForm = (book) => {
  document.getElementById('title').value = book.title;
  document.getElementById('pageNumber').value = book.page;
  document.getElementById('authorName').value = book.author;
  document.getElementById('yearPublished').value = book.year;
  document.getElementById('genre').value = book.genre;
  document.getElementById('status').value = book.status;
  document.querySelector('.bg-modal').style.display = 'flex';

}

