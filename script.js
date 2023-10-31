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
myLibrary.forEach((book) => {
    const row = table.insertRow();
    let newArray = Object.values(book);
    newArray.forEach((value) => {
        if(value === "Read" || value === "Not read"){
            const button = document.createElement("button");
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
});



//constructor for books
function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        return title+" by "+author+", "+pages+", "+read;
    };
}

//function to add books to the library
function addBookToLibrary() {

}

const displayBook = () => {
    
} 

// const doom = new book("doombook", "doomguy", "doompages", "not read");
// console.log(doom.info());