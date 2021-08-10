let library = [];

function addBook(){
    const book = {};
    book.title = document.getElementById('bookTitle').value;
    book.author = document.getElementById('bookAuthor').value;
    library.push(book);
    displayBooks();
}

function removeBook(title){
    console.log(title);
    library = library.filter((book) => book.title !== title);
    displayBooks();
}

function displayBooks(){
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    library.map((book) => {
        const bookDiv = document.createElement('div');
        const p = document.createElement('p');
        p.innerHTML = book.author;
        const p2 = document.createElement('p');
        p2.innerHTML = book.title;
        const hr = document.createElement('hr');
        const btn = document.createElement('button');
        btn.innerHTML = 'Remove';
        btn.addEventListener('click', () => {
            removeBook(book.title);
        });
        bookDiv.appendChild(p);
        bookDiv.appendChild(p2);
        bookDiv.appendChild(hr);
        bookDiv.appendChild(btn);
        libraryDiv.appendChild(bookDiv);
        return book;

    });
}

window.onload = () => {
    library = JSON.parse(localStorage.getItem('library'));
    displayBooks();
}

function saveLibrary(){
    localStorage.setItem('library', JSON.stringify(library));
}