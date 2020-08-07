// Book Constructor
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// UI Constructor
class UI {
    // Add book to list
    addBookToList(book) {
        const table = document.getElementById("table");

        // Create tr element
        const row = document.createElement('tr');
        // Row HTML
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href='#' class='delete'>X</a></td>
        `;
        // Append row to table
        table.appendChild(row);

    };

    showAlert(msg, className) {
        // Create div
        const div = document.createElement('div');
        // Add class
        div.className = `alert ${className}`
        // Create text
        const divNode = document.createTextNode(msg);
        // Add text
        div.appendChild(divNode);
        // UI container
        const container = document.querySelector(".container");
        // UI form book
        const form = document.getElementById("form-book");
        // Insert div
        container.insertBefore(div, form);
        // 3 second timer
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    };

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    };

    clearFields() {
        const title = document.getElementById("title").value = '';
        const author = document.getElementById("author").value = '';
    };
};

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book)

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook() {

    }
};

// DOM Load Event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listener for add book
document.getElementById("form-book").addEventListener("submit", function (e) {

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    // Instantiate book
    const book = new Book(title, author);

    // Intantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {

        // Add book to list
        ui.addBookToList(book);

        // Add to local storage
        Store.addBook(book);

        // Success alert
        ui.showAlert('Successfully submitted book', 'success');

        // Clear fields
        ui.clearFields();
        // Prevent Default
        e.preventDefault();
    }
});

// Event Listener for delete book
document.getElementById("table").addEventListener("click", function(e) {
    
    // Instantiate UI
    const ui = new UI();
    
    // Delete book
    ui.deleteBook(e.target);

    // Success alert
    ui.showAlert("Successfully deleted book", "success")

    e.preventDefault();
})