
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

function deleteBook(index) {
  document.querySelector(`.delete-${index}`).addEventListener('click', function () {
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
  document.querySelector(`.edit-${index}`).addEventListener('click', function () {
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