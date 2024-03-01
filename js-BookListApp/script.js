// Book Class: to Represent Books
  //a book can be represented with its title, author and unique id
  class Book { // just instantiation
    constructor(title, author, uid){
        this.title = title
        this.author = author
        this.uid = uid
    }
  }
  

// UI Class: Handles Tasks - Handling task like displaying, adding books, removing 
  class UI{
    // static: bcz here there is no need of instantiation

    // display books : a method
    static displayBooks(){
        // for now hardCoded details of each book stored
        // const storedBooks = [
        //     {
        //         title: 'Gulmohar',
        //         author: 'John',
        //         uid: '1221'

        //     },
        //     {
        //         title: 'Fiction For Men',
        //         author: 'Rhony Dsuza',
        //         uid: '1222'

        //     }

        // ];
        const books = BookStorage.getBooks()
        // Now I want to loop through the books : that will be done by calling the method addBookToList that will add the book in the list

        books.forEach((book) => UI.addBookToList(book))
        // basically we will create a row to be added in the tablebody
    }

    // Now give implementation to the method that is called above
    static addBookToList(book){
        // I need tableBody that can be taken from html
           const tableBody = document.querySelector('#book-list')
        // create a new element table row to insert a book
        const row = document.createElement('tr')     
        // now inside this row, I need to append my details column wise
          // you will add innerHTML
          row.innerHTML = 
                `
                <td>${book.title}</td>
                 <td>${book.author}</td>
                 <td>${book.uid}</td>
                 <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                `
                tableBody.appendChild(row)
    }    
    static clearFields(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#uid').value = ''
    } 

    // remove book from the tbody
    static removeBook(trgt){
      if(trgt.classList.contains('delete')){
        trgt.parentElement.parentElement.remove()
      }
    }
    static showAlert(message, className){
      const container = document.querySelector('.container')
      const form = document.querySelector('#book-form')
      
      const alertMsgDiv = document.createElement('div')
      // alertMsg.className = `alert alert-danger/alert-success`
      alertMsgDiv.className = `alert ${className}`
      alertMsgDiv.appendChild(document.createTextNode(message))

      // Place this div inside container before form
      container.insertBefore(alertMsgDiv, form)
      setTimeout(() => document.querySelector('.alert').remove(), 2000)
    }
  }
// Books Strorage: For Storing Books - local storage

   
   class BookStorage{
    //get books - local storage
    static getBooks(){
      let books;
      if(localStorage.getItem('books') === null){
          books = []
      }
      else{
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;

    }
    
    // add books - local storage
    static addBook(book){
      // get the books storage first
      const books = BookStorage.getBooks()
      // now 'push' book in the books
      books.push(book)
      localStorage.setItem("books", JSON.stringify(books))
    }

   // remove books - local storage
   static removeBook(uid){
    // first get the books
    const books = BookStorage.getBooks()
    // now loop through the array
    books.forEach((book, index) => {
      if(book.uid === uid){
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
   }
   }
   

   




// Event - Displaying Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks)

  // Event - Adding Books
  const bookForm = document.querySelector('#book-form')
  
  const submitForm = (e) => {
    e.preventDefault()
    // Get values from the form: title, author_name, uid
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const uid = document.querySelector('#uid').value

    //Before instantiation, It is essential to make sure that all fields are filled
    // Lets check that
    if(title === '' || author === '' || uid === ''){
      // alert('Please enter data..')
      // a method will be invoked here named "showAlert"
      UI.showAlert("Please enter data", 'alert-danger') 
    }
    else{
       // Now jus pay attention to the Book class in which we made a param constructor
    // So, obviously we have to create an object of it (instantiation)
    const bookDetails = new Book(title, author, uid)
    // console.log(bookDetails);
    // Now show the form-entered-details in the UI (table body ma)
     // method called to add book details to tbody
    UI.addBookToList(bookDetails)
    BookStorage.addBook(bookDetails)
    UI.showAlert("Book added!", 'alert-success')
    // Here success msg will be passed
    
    // Once the book is added, I want to clear the inputValues ok..
    //So create a method nmamed clearFields inside UI class and invoke the method here(a static method)
    UI.clearFields()
    }

   
  } 
  bookForm.addEventListener('submit', submitForm)
  

  // Event - Removing a book from the Table
  const tableBody = document.querySelector('#book-list').addEventListener('click', (e) =>{
    UI.removeBook(e.target);
    // console.log(e.target);
    BookStorage.removeBook(e.target.parentElement.previousElementSibling.textContent)
    UI.showAlert("Book removed", 'alert-danger') 
  })
  
  
  

  



