const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const table = document.querySelector("table");

showButton.addEventListener("click", () => {
    dialog.showModal();
})

let myLibrary = [
    {
        "title": "The Flowers of Evil",
        "author": "Charles Baudelaire",
        "pages": "464",
        "read": "Read",
    },
    {
        "title": "The Bible",
        "author": "Various Authors",
        "pages": "1408",
        "read": "Not read",
    },
];

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
        }
        else {
        let newCell = row.insertCell();
        newCell.textContent = value;
        } 
    });
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "remove";
    let removeCell = row.insertCell();
    removeCell.appendChild(remove);
};

myLibrary.forEach(loopBooks);

//refresh table
const deleteTable = () => {
    const tableRows = document.querySelectorAll("tr.bookRow");
    tableRows.forEach((row) => row.remove());
}

// const refreshTable = function)


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
}));

//remove book
let removeButton = document.querySelectorAll("button.remove");
removeButton.forEach(button => button.addEventListener("click", (e) => {
    myLibrary.splice(e.target.parentElement.parentElement.rowIndex-1, 1);
    deleteTable();
    myLibrary.forEach(loopBooks);
    removeButton = document.querySelectorAll("button.remove");
}));

//constructor for books
function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        return title+" by "+author+", "+pages+", "+read;
    };
};

//function to add books to the library
function addBookToLibrary() {

}

// const doom = new book("doombook", "doomguy", "doompages", "not read");
// console.log(doom.info());