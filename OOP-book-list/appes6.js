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
        // create TR eement
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = 
        `<td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X</a></td>`;
    
         list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // to insert the alert
        container.insertBefore(div, form);
    
        // timeout 3 secs
        setTimeout(function() {
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
document.getElementById('book-form').addEventListener('submit', function(e) { 
    // get form values
    const title = document.getElementById('title').value, 
          author = document.getElementById('author').value, 
          isbn = document.getElementById('isbn').value
    
    // instantiate book
    const book = new Book(title, author, isbn);

    // instantiate UI
    const ui = new UI();

    // validate
    if(title === '' || author === '' || isbn ==='') {
        ui.showAlert('please fill in all fields', 'error')
    } else {
        // add book to list
        ui.addBookToList(book);
        // show success
        ui.showAlert('book added', 'success')
        //clear fields 
        ui.clearFields();
    }
    e.preventDefault(); 
})

// event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

       // instantiate UI
       const ui = new UI();
       ui.deleteBook(e.target)

       //show message
       ui.showAlert('book removed', 'success')

    e.preventDefault();
})