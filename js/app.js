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

document.querySelector('.delete').addEventListener('click', function () {
  let book_id = this.getAttribute('data-id')
  document.querySelector('.book-' + book_id).style.display = 'none'
  deleteItem(book_id)
})

document.querySelector('.edit').addEventListener('click', function () {
  let book_id = this.getAttribute('data-id')
  document.querySelector('.general-botton').removeAttribute('id')
  let setId = document.querySelector('.general-botton').setAttribute('id', 'edit')
  let book = getABook(book_id)
  populateEditForm(book)
})

const populateEditForm = (book) => {
  
}