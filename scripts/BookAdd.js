function add_book(){
    let author = document.getElementById('book-author').value
    let title = document.getElementById('book-title').value
    let date = new Date().getDate()
    let cover_image = document.querySelectorAll('input[type=file]')[0].files[0]
    var url = window.URL.createObjectURL(cover_image);
    var anchor = document.createElement("a");
    anchor.href = url;
    console.log(url)
    anchor.download = `../media/${title}.jpg`
    anchor.click()
    return false;

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