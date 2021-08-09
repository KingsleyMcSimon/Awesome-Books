library = [];

function addBook(){
    const book = {};
    book.title = document.getElementById('bookTitle').value;
    book.author = document.getElementById('bookAuthor').value;
    library.push(book);
}

function removeBook(title){
    library = library.filter(function(book){
        return book.title !== title;
    });
}