let library = [];

function addBook() {
    const book = {};
    book.author = document.getElementById('bookAuthor').value;
    book.title = document.getElementById('bookTitle').value;
    library.push(book);
    displayBooks();
    SaveLibrary();
}

function removeBook(title) {
    console.log(title);
    library = library.filter((book) => book.title !== title);
    displayBooks();
    SaveLibrary();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    library.map((book) => {
      const divBook = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = book.author;
      const p2 = document.createElement('p');
      p2.innerHTML = book.title;
      const hr = document.createElement('hr');
      const btn = document.createElement('BUTTON');
      btn.innerHTML = 'Remove';
      btn.addEventListener('click', () => {
        removeBook(book.title);
      });
      divBook.appendChild(p);
      divBook.appendChild(p2);
      divBook.appendChild(hr);
      divBook.appendChild(btn);
      libraryDiv.appendChild(divBook);
      return book;
    })
  }


window.onload = function() {
    library = JSON.parse(localStorage.getItem('library') || '[]');
    displayBooks();
}

function SaveLibrary() {
    localStorage.setItem('library', JSON.stringify(library));
}
