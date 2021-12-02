// UI and LS objects
const ui = new UI();
const ls = new LS();
const taskList = document.querySelector('.collection');

// event elements
const form = document.querySelector('form');

// events
form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooks);
taskList.addEventListener('click', deleteBook);

function getBooks(){
    let books = ls.getData('books')
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn)
    // add book value to visual by UI object
    ui.addBook(book)
    // add book to LS
    ls.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}

function deleteBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this task?')){
            //event.target.parentElement.remove();
            let Xtarget = event.target.parentElement;
            Xtarget.parentElement.remove();
            let bookItem = Xtarget.parentElement.firstElementChild.textContent;
            //console.log(Xtarget.parentElement.firstElementChild.textContent);
            ls.deleteBookFromLocalStorage(bookItem);
        }
    }
}