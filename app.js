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

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href='#'>X</a></td>
        `;

        table.appendChild(row);

    }

    showAlert() {

    }

    deleteBook() {

    }

    clearFields() {
        const title = document.getElementById("title").value = '';
        const author = document.getElementById("author").value = '';
    };
}

// Event Listeners
document.getElementById("form-book").addEventListener("submit", function (e) {

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    // Validate
    if (title === '' || author === '') {

        // Edit.......................
        const newDiv = document.createElement('div');
        const newDivContent = document.createTextNode("We need text bro");
        newDiv.appendChild(newDivContent);

        const currentDiv = document.getElementById("form-book");
        document.body.insertBefore(newDiv, currentDiv);

    } else {

        // Instantiate book
        const book = new Book(title, author);

        // Intantiate UI
        const ui = new UI();

        // Add book to list
        ui.addBookToList(book);

        // Clear fields
        ui.clearFields();

        e.preventDefault();
    }
})