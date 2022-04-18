const books = JSON.parse(localStorage.getItem("books")) || [];

const bookList = document.querySelector("#book-list");
let html = ``;
books.forEach((book) => {
  html += `<li id="book-item">
<article class="article-container">
  <h3 class="title">${book.title}</h3>
  <h3 class="title">${book.author}</h3>
  <button
    class="book-remove"
    data-book-id="${book.id}"
    id="remove-button"
    onclick="removeBook(${book.id})"
  >
    Remove
  </button>
  <hr>
</article>
</li>`;
});
bookList.innerHTML = html;

document.getElementById("addbook").addEventListener("click", (e) => {

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  if (title.length > 0 && author.length > 0) {
    const id = new Date().getTime();
    const book = { id, author, title };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    location.reload();
  }
});

const removeBook = (id) => {
    const mBooks = JSON.parse(localStorage.getItem('books'));
    const remainingBooks = mBooks.filter((book) => book.id !== id);
    const removedBooks = JSON.stringify(remainingBooks);
    localStorage.setItem('books', removedBooks);
    window.location.reload();
  };
