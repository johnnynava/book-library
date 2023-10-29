//library
let myLibrary = [];

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

myLibrary.forEach()

const displayBook = () => {
    
} 

// const doom = new book("doombook", "doomguy", "doompages", "not read");
// console.log(doom.info());