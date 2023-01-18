class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <td class="text-center">${book.title}</td>
        <td class="text-center">${book.author}</td>
        <td class="text-center">${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add class
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent (inserted to DOM)
        const container = document.querySelector('.container');
        // Get Form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);

        // Timeout after 3secs
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
function(e){

    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Validate
    if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields', 'error');
    } else {
    };

    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');

    // Clear field
    ui.clearFields();

    e.preventDefault();
});

// Event Listener for DELETE
document.getElementById('book-list').addEventListener
('click', function(e){

    // Instatiate UI
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book Removed!', 'success');


    e.preventDefault()
})