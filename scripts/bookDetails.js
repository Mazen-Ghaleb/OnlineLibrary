function displayBookDetails(){
    bookTitle = decodeURI(location.href.split("=")[1]);
    let AllBooks = JSON.parse(localStorage.getItem("ALLBooks"));
    var selectedBook = null;
    for (const book of AllBooks){
        if (bookTitle == book.Title){
            selectedBook = book;
            break;
        }
    } 
    if (selectedBook == null) {alert("NO BOOK CHOSEN"); return;}
    document.getElementById("cardBookCover").setAttribute("src", "../" + selectedBook.imgSrc)
    document.getElementById("cardBookTitle").innerText = " " + selectedBook.Title;
    document.getElementById("cardBookAuthor").innerText = " " + selectedBook.Author;
    document.getElementById("cardPublishDate").innerText = " " + selectedBook.Date;

    console.log(selectedBook);
}