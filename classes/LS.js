class LS {
    // help functions  to get and set data at LS
    getData(name){
        let data;
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        console.log(data)
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
    addBook(book){
        let books = this.getData('books')
        books.push(book);
        this.setData('books', books)
    }

    deleteBookFromLocalStorage(bookItem){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        books.forEach(function (tasksElement, index){
            console.log(tasksElement.title);
            if(tasksElement.title === bookItem){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
/*




    deleteTasks(){
        // event.target.previousElementSibling.innerHTML = '';
        // taskList.innerHTML = '';
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        deleteAllTaskFromLocalStorage();
    }

    deleteAllTaskFromLocalStorage(){
        // localStorage.clear();
        if(localStorage.getItem('tasks') === null){
            let tasks = [];
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        localStorage.removeItem('tasks');
    }





 */
}