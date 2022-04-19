/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    if (title.length > 0 && author.length > 0) {
      const id = new Date().getTime();
      const book = { id, title, author };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      location.reload();
    }
  }

  removeBook(id) {
    const mBooks = JSON.parse(localStorage.getItem('books'));
    const remainingBooks = mBooks.filter((book) => book.id !== id);
    const removedBooks = JSON.stringify(remainingBooks);
    localStorage.setItem('books', removedBooks);
    window.location.reload();
  }

  listAllBooks() {
    const bookList = document.querySelector('#book-list');
    this.books.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('id', 'book-item');
      listItem.classList.add('article');
      const bookData = document.createElement('h3');
      bookData.classList.add('title');
      bookData.innerHTML = `${book.title} by ${book.author}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerHTML = 'Remove book';
      btnRemove.classList.add('book-remove');
      btnRemove.addEventListener('click', () => {
        this.removeBook(book.id);
      });
      listItem.appendChild(bookData);
      listItem.appendChild(btnRemove);
      bookList.appendChild(listItem);
    });
  }
}

document.getElementById('addbook').addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Books();
  book.addBook(title, author);
});

new Books().listAllBooks();
