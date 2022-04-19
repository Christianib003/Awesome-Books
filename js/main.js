/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}
const books = JSON.parse(localStorage.getItem('books')) || [];

const removeBook = (id) => {
  const mBooks = JSON.parse(localStorage.getItem('books'));
  const remainingBooks = mBooks.filter((book) => book.id !== id);
  const removedBooks = JSON.stringify(remainingBooks);
  localStorage.setItem('books', removedBooks);
  window.location.reload();
};

const bookList = document.querySelector('#book-list');
let html = '';
books.forEach((book) => {
  html += `<li id="book-item" class="article">
  <h3 class="title">${book.title} by ${book.author}</h3>
  <button
    class="book-remove"
    data-book-id="${book.id}"
    id="remove-button"
    onClick="removeBook(${book.id})"
  >
    Remove
  </button>
</li>`;
});
bookList.innerHTML = html;

document.getElementById('addbook').addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title.length > 0 && author.length > 0) {
    const id = new Date().getTime();
    const book = new Book(id, title, author);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    location.reload();
  }
});
