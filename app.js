const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    addToLibrary(book) {
        myLibrary.push(book);
    }

    createBook = (book) => {
        const myBooks = document.querySelector(".myBooks");

        let newBookCard = document.createElement("div");
        newBookCard.classList.add("card");
        myBooks.appendChild(newBookCard);

        let newBookCover = document.createElement("div");
        newBookCover.classList.add("cover");
        newBookCard.appendChild(newBookCover);

        let newBookTitle = document.createElement("p");
        newBookTitle.innerText = book.title;
        newBookTitle.classList.add("bookTitle");
        newBookCover.appendChild(newBookTitle);

        let newBookAuthor = document.createElement("p");
        newBookAuthor.innerText = book.author;
        newBookAuthor.classList.add("bookAuthor");
        newBookCover.appendChild(newBookAuthor);

        let newBookPages = document.createElement("p");
        if (pages.value == 1) {
            newBookPages.innerText = `${book.pages} page`;
        } else {
            newBookPages.innerText = `${book.pages} pages`;
        }
        newBookPages.classList.add("bookPages");
        newBookCover.appendChild(newBookPages);

        let markAsRead = document.createElement("p");
        markAsRead.innerText = "Mark as read?"
        newBookCover.appendChild(markAsRead);

        let newBookIsRead = document.createElement("input");
        newBookIsRead.classList.add(".isReadToggler")
        newBookIsRead.type = "checkbox";
        if (book.isRead) {
            newBookIsRead.checked = true;
        } else {
            newBookIsRead.checked = false;
        }
        newBookIsRead.addEventListener("change", () => {
            book.isRead = newBookIsRead.checked;
        })
        newBookCover.appendChild(newBookIsRead);

        getRandomGradientBG(newBookCard);
    }

}

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
    const form = document.getElementById("book-info");
    if (form.checkValidity()) {
        e.preventDefault();
        addBook();
        form.reset();
        console.log(myLibrary);
    }
})

const addBook = () => {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    let book = new Book(title, author, pages, isRead);

    book.addToLibrary(book);
    book.createBook(book);
}



const getRandomGradientBG = (e) => {
    const randomHue = Math.floor(Math.random() * 360);
    e.style.backgroundImage = `linear-gradient(hsl(${randomHue}, 75%, 50%), hsl(${randomHue}, 75%, 30%))`;
}