// add new books
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

// takes care of ui changes
class UI {
    // display books function
   static displayBooks() {
    const storedBooks = [
        {
            title: "Things Fall Apart",
            author: "Chinua Achibe",
            isbn: 4556653,
        },
        {
            title: "Blakee is a Black Cat",
            author: "Peggy Oppong",
            isbn: 8894532,
        }
    ];
    const books = storedBooks;
    
    // books array loop
    books.forEach((book)=> UI.addBooksToList(book));
    // end books array loop

   }
   // end display books function

   // add books to list method
   static addBooksToList(book) {
    let table_body = document.getElementById('table-body');
        let new_row = document.createElement('tr');
        new_row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" id="delete-button" class="btn btn-danger delete">x</a></td>
        `;
    
        table_body.appendChild(new_row);
   }
   // end add books to list method

   // remove book
   static removeBook(element) {
       if(element.classList.contains('delete')) {
           element.parentElement.parentElement.remove();
       }
   }

   // clear fields method
   static clearFields() {
       document.getElementById('title').value = '';
       document.getElementById('author').value = '';
       document.getElementById('isbn').value = '';
   }

}


// events to load in, add, remove books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// add new books
let button = document.getElementById('book-form');

button.addEventListener('submit', (e)=> {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;


    let new_book = new Book(title, author, isbn);
    UI.addBooksToList(new_book);
    UI.clearFields();
});

document.getElementById('delete-button').addEventListener('click', (e)=> {
    e.preventDefault();
    UI.removeBook(e.target);
});