// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
    // list books function
    static listBooks() {
        const book_list = JSON.parse(localStorage.getItem('books_list'));
        if(book_list) {
        book_list.forEach(book => {
            UI.addToDom(book);
        });
        }
    }
    // end list books function
    
    // add book function
    static addBook(book) {
        // update existing book list in local storage
        let books_list = JSON.parse(localStorage.getItem('books_list'));
        if(books_list) {
        books_list.push(book);
        localStorage.setItem('books_list', JSON.stringify(books_list));

        // add to dom
        UI.addToDom(book);

        // show alert
        UI.showAlert('success', 'Book Added Successfully!');
        } else {
        let books = [];
        books.push(book);
        localStorage.setItem('books_list', JSON.stringify(books));

        // add to dom
        UI.addToDom(book);

        // show alert
        UI.showAlert('success', 'Book Added Successfully!');
        }

    }
    // end add book function

    static removeBook(event) {
        let isbn = event.target.parentElement.previousElementSibling.textContent;
        // remove from storage
        Store.removeBookFromStore(isbn);
        
        // remove from dom
        UI.removeFromDom(event);

        // show alert
        UI.showAlert('success', 'Book Deleted!');
    }
}
// end Book class


// UI class
class UI {
    // add to dom function
    static addToDom(book) {
        let table_body = document.getElementById('table-body');

        let table_row = document.createElement('tr');
        table_row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>
        <a href="#" class="btn btn-danger btn-sm delete" id="delete-button" onclick="Store.removeBookFromStore(${book.isbn})">X</a>
        </td>
        `;

        table_body.appendChild(table_row);

    }
    // end add to dom function
    
    // remove from dom function
    static removeFromDom(event) {
        let element = event.target;
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }
    // end remove from dom function

    // clear fields function
    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    // end clear fields function

    // show alert
    static showAlert(alert_class, message) {
        let div = document.createElement('div');
        div.className = `alert alert-${alert_class}`;
        div.innerHTML = message;

        let alert_section = document.getElementById('alert-section');
        alert_section.appendChild(div);

        // remove alert after 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

}
// end UI class



// STORE CLASS
class Store {
    static removeBookFromStore(isbn) {
        let books_list = JSON.parse(localStorage.getItem('books_list'));
        books_list.forEach((book, index)=> {
            if(book.isbn === isbn) {
                books_list.splice(index, 1);
            }
        });

        localStorage.setItem('books_list', JSON.stringify(books_list));
    }
}

            /* EVENTS */
// display books
document.addEventListener('DOMContentLoaded', Book.listBooks());

// add book to list
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form fields
  let book_title = document.getElementById('title').value;
  let book_author = document.getElementById('author').value;
  let book_isbn = document.getElementById('isbn').value;
  
  // create a new book object
  let new_book = new Book(book_title, book_author, book_isbn);
  // add new book to list
  Book.addBook(new_book);

  // clear fields
  UI.clearFields();

});

// remove book from list
document.getElementById('table-body').addEventListener('click', (e) => {
    Book.removeBook(e);
});

// onclick="UI.removeFromDom(${book.isbn})"