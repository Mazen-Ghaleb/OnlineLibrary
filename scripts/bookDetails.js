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
    document.getElementById("cardBookAuthor").innerText = "Author: " + selectedBook.Author;
    document.getElementById("cardPublishDate").innerText = "Publish Date: " + selectedBook.Date;
    
    //check if an account is logged in and if its role is admin
    if (JSON.parse(localStorage.getItem('LoggedIn')) === "True" && 
        JSON.parse(localStorage.getItem('AccLoggedIn')).role === "Admin"){
        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove Book";
        removeButton.setAttribute("class", "btn btn-danger");
        removeButton.setAttribute("onclick", "remove_book()");
        document.getElementsByClassName("cardBody")[0].appendChild(removeButton);
    }

    //make a button to remove the book from AllBooks and localStorage


    console.log(selectedBook);
}

