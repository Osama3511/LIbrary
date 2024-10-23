const myLibrary = [];

function Book(author, pages, read){
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){
    
}



function createBook() {
    const form = document.querySelector("form");
    resetForm();
    form.style.display = "flex";
    
}

function resetForm() {
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
    form.style.display = "none";
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked ? true: false;
    const book = new Book(author, pages, read);
    myLibrary.push(book);
})

