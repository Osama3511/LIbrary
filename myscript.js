const myLibrary = [];
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const cardContainer = document.querySelector(".books-container");
function addBookToLibrary(){
    let index = myLibrary.length - 1;
    const book = myLibrary[index];


    const card = document.createElement('div');
    card.setAttribute("data",`${index}`);

    const bookName = document.createElement('p');
    const authorName = document.createElement('p');
    const pagesNum = document.createElement('p');
    const checkRead = document.createElement('p');
    const changeStatus = document.createElement("button");
    const deleteCard = document.createElement("button");

    changeStatus.classList.add("change-status-btn");
    deleteCard.classList.add("delete-card-btn");

    changeStatus.textContent = "Change Status";
    deleteCard.textContent = "Delete Card";
    

    bookName.textContent = "Book: " + book.title;
    authorName.textContent = "Author: " + book.author;
    pagesNum.textContent = "Pages: " + book.pages;
    checkRead.textContent = "Status: " + book.read;

    changeStatus.addEventListener('click',() => {
        if(checkRead.textContent === "Status: read"){
            book.read = "haven't read";
            checkRead.textContent = "Status: " + book.read;
        }
        else{
            book.read = "read";
            checkRead.textContent = "Status:" + book.read;
        }
    });

    deleteCard.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        card.remove();
    });

    card.appendChild(bookName);
    card.appendChild(authorName);
    card.appendChild(pagesNum);
    card.appendChild(checkRead);
    card.appendChild(changeStatus);
    card.appendChild(deleteCard);
    card.classList.add("card");
    cardContainer.appendChild(card);
}



function createBook() {
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");
    resetForm();
    overlay.style.display = "flex";
    form.style.display = "flex";
    
}

function resetForm() {
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#read").checked = false;
}

const createBookBtn = document.querySelector(".create-book");
createBookBtn.addEventListener('click', createBook);

const submitBtn = document.querySelector(".submit-book");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none"
    form.style.display = "none";
    const title = document.querySelector("#title").value; 
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked ? "read": "haven't read";
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addBookToLibrary();
})



document.querySelector(".close-btn").addEventListener('click',() => {
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none"
    form.style.display = "none";
});