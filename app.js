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



const myBooks = document.querySelector(".myBooks");

addBtn.addEventListener("click", (e) => {
    if (form.checkValidity()) {
        e.preventDefault();
        addBookToLibrary();
        createBookCard();
        form.reset();
        console.log(myLibrary);
    }
})

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, isRead.checked);
    myLibrary.push(newBook);
}

function createBookCard() {
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("card");
    getRandomGradientBG(newBookCard);
    myBooks.appendChild(newBookCard);

    let newBookCover = document.createElement("div");
    newBookCover.classList.add("cover");
    newBookCard.appendChild(newBookCover);

    let newBookTitle = document.createElement("p");
    newBookTitle.innerText = title.value;
    newBookTitle.classList.add("bookTitle");
    newBookCover.appendChild(newBookTitle);

    let newBookAuthor = document.createElement("p");
    newBookAuthor.innerText = author.value;
    newBookAuthor.classList.add("bookAuthor");
    newBookCover.appendChild(newBookAuthor);

    let newBookPages = document.createElement("p");
    if (pages.value == 1) {
        newBookPages.innerText = `${pages.value} page`;
    } else {
        newBookPages.innerText = `${pages.value} pages`;
    }
    newBookPages.classList.add("bookPages");
    newBookCover.appendChild(newBookPages);

    let markAsRead = document.createElement("p");
    markAsRead.innerText = "Mark as read?"
    newBookCover.appendChild(markAsRead);

    let newBookIsRead = document.createElement("input");
    newBookIsRead.type = "checkbox";
    if (isRead.checked) {
        newBookIsRead.checked = true;
    } else {
        newBookIsRead.checked = false;
    }
    // newBookIsRead.addEventListener("change", () => {
    //     myLibrary.filter(title: "")
    // })

    newBookCover.appendChild(newBookIsRead);
}

const getRandomGradientBG = (e) => {
    const randomHue = Math.floor(Math.random() * 360);
    e.style.backgroundImage = `linear-gradient(hsl(${randomHue}, 75%, 50%), hsl(${randomHue}, 75%, 30%))`;
}



