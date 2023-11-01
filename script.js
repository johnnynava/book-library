const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const table = document.querySelector("table");
const footer = document.querySelector(".footer p");

showButton.addEventListener("click", () => {
    dialog.showModal();
})

//refresh table
const deleteTable = () => {
    const tableRows = document.querySelectorAll("tr.bookRow");
    tableRows.forEach((row) => row.remove());
}

//library array
let myLibrary = [
    {
        "title": "The Flowers of Evil",
        "author": "Charles Baudelaire",
        "pages": 464,
        "read": "Read",
        "id": 1,
    },
    {
        "title": "The Bible",
        "author": "Various Authors",
        "pages": 1408,
        "read": "Not read",
        "id": 2,
    },
];

//remove book
const removeBook = function(id){
    myLibrary.splice(myLibrary.findIndex((book) => book.id === id), 1);
    deleteTable();
    pagesRead();
    myLibrary.forEach(loopBooks);
}

//toggle status
const toggleStatus = (id) => {
    let bookIndex = myLibrary.findIndex((book)=> book.id === id);
    if (myLibrary[bookIndex].read === "Read"){
        myLibrary[bookIndex].read = "Not read";
        deleteTable();
        myLibrary.forEach(loopBooks);
        statusButton = document.querySelectorAll("button.status");
    }
    else {
        myLibrary[bookIndex].read = "Read";
        deleteTable();
        myLibrary.forEach(loopBooks);
        statusButton = document.querySelectorAll("button.status");
    }
    pagesRead();
}

//display number of pages read
const pagesRead = () => {
    let pagesSum = 0;
    for(let i=0; i<myLibrary.length; i++){
        if(myLibrary[i].read === "Read"){
            pagesSum += myLibrary[i].pages;
        }
    }
    footer.textContent = `Pages read: ${pagesSum}`;
}

pagesRead();

//loops the library to add new rows to the table
const loopBooks = function(book){
    const row = table.insertRow();
    row.classList.add("bookRow");
    let newArray = Object.values(book);
    newArray.forEach((value) => {
        if(value === "Read" || value === "Not read"){
            const button = document.createElement("button");
            button.classList.add("status");
            button.textContent = value;
            let newCell = row.insertCell();
            newCell.appendChild(button);
            //toggle status for book section
            button.addEventListener("click", (e) => toggleStatus(book.id));
        }
        else if(value === newArray[4]){}
        else {
        let newCell = row.insertCell();
        newCell.textContent = value;
        } 
    });
    const remove = document.createElement("button");
    remove.addEventListener("click", () => removeBook(book.id));
    remove.classList.add("remove");
    remove.textContent = "remove";
    let removeCell = row.insertCell();
    removeCell.appendChild(remove);
};

myLibrary.forEach(loopBooks);

//toggle status for book section
let statusButton = document.querySelectorAll("button.status");

statusButton.forEach(button => button.addEventListener("click", (e) => {
    if (e.target.textContent === "Read"){
        object = myLibrary[e.target.parentElement.parentElement.rowIndex-1];
        object.read= "Not read";
        deleteTable();
        myLibrary.forEach(loopBooks);
        statusButton = document.querySelectorAll("button.status");
    }
    else {
        object = myLibrary[e.target.parentElement.parentElement.rowIndex-1];
        object.read= "Read";
        deleteTable();
        myLibrary.forEach(loopBooks);
        statusButton = document.querySelectorAll("button.status");
    }
    pagesRead();
}));

//constructor for books
function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = Math.floor(Math.random()*100000)
};

//function to add books to the library
let submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener("click", (e) => {
    e.preventDefault(); //need this to prevent the default behavior of submit (I don't have a server setup)
    let title = document.querySelector("input#book_name").value;
    let author = document.querySelector("input#author_name").value;
    let pages = +document.querySelector("input#pages").value;
    let read = document.querySelector("select#status").value;
    let form = document.querySelector("form");
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    deleteTable();
    myLibrary.forEach(loopBooks);
    removeButton = document.querySelectorAll("button.remove");
    dialog.close();
    form.reset();
    pagesRead();
});