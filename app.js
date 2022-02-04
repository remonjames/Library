let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


const form = document.getElementById("book-info");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isRead = document.getElementById("isRead");
const addBtn = document.getElementById("addBtn");

let newBook = document.createElement("div");

const myBooks = document.querySelector(".myBooks");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    console.log(myLibrary);
})

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(newBook);
}