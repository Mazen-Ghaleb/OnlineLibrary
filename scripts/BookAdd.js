function add_book(){
    let author = document.getElementById('book-author').value
    let title = document.getElementById('book-title').value
    let date = new Date()
    date = date.toDateString();
    let imgSrc = document.getElementById('cover-link').value
    let category = document.getElementById('book-category').value
    let book = {Title:title, Author:author, Date:date, imgSrc:imgSrc, Category:category}
    let AllBooks = JSON.parse(localStorage.getItem("ALLBooks"))
    AllBooks.push(book)
    localStorage.setItem("ALLBooks", JSON.stringify(AllBooks));
}


function remove_book(){
    let bookTitle = decodeURI(location.href.split("=")[1]);
    let AllBooks = JSON.parse(localStorage.getItem("ALLBooks"));
    for (let i = 0; i < AllBooks.length; i++){
        if (AllBooks[i].Title === bookTitle){
            AllBooks.splice(i, 1);
            console.log(AllBooks)
            localStorage.setItem("ALLBooks", JSON.stringify(AllBooks));
            break;
        }
    } 
    window.location.assign('../index.html')
}