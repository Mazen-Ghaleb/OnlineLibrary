function Book(Title, Author, Category,imgSrc, Date) {
    this.Title = Title;
    this.Author = Author;
    this.imgSrc = imgSrc;
    this.Date = Date;
    this.Category = Category;

    this.getTitle = function() {
        return this.Title;
    }

    this.getAuthor = function() {
        return this.Author;
    }

    this.getImgSrc = function() {
        return this.imgSrc;
    }
    
    this.getDate = function() {
        return this.Date;
    }

    this.getCategory = function(){
        return this.getCategory();
    }

    this.setTitle = function(title) {
         this.Title = title;
    }

    this.setAuthor = function(Author) {
         this.Author = Author;
    }

    this.setImgSrc = function(imgSrc) {
        this.imgSrc = imgSrc;
    }
    
    this.setDate = function(Date) {
        this.Date = Date;
    }
    this.setCategory = function(category){
       this.category = category;
    }
}

function getBookLength(arr){
    return arr.length;
}

function getBook(arr,i) {
    if (i => 0 && i < arr.length){
        return arr[i];
    }
}

function createCarousel(arr,k) {
    Carousel = document.getElementById("CarouselBooks"+k);
    var i;
    for (i=0;i< arr.length;i++){

        let bookDetailsAnchor = document.createElement('a');
        bookDetailsAnchor.setAttribute("href", "Components/bookDetails.html?book=" + arr[i].Title);
        
        
        let CarouselItem = document.createElement('div');
        let CarouselImage = document.createElement('img');
        let CarouselInnerBlock = document.createElement('div');
        let BookTitle = document.createElement('h5');
        let BookAuthor = document.createElement('p');
        let Book = getBook(arr,i);

        BookTitle.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookAuthor.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookTitle.innerText = Book.Title;
        BookAuthor.innerText = "by " + Book.Author;
        CarouselInnerBlock.append(BookTitle);
        CarouselInnerBlock.append(BookAuthor);
        CarouselInnerBlock.classList.add("carousel-caption");
        CarouselInnerBlock.classList.add("d-none","d-md-block","carousel-caption");
        CarouselItem.append(CarouselInnerBlock);
        
        bookDetailsAnchor.appendChild(CarouselImage)
        CarouselImage.classList.add("d-block","w-100");
        CarouselImage.src = Book.imgSrc;
        CarouselImage.alt = Book.Title;
        //CarouselItem.append(CarouselImage);
        CarouselItem.append(bookDetailsAnchor);
       

        if (i == 0){
            CarouselItem.classList.add("carousel-item","active")
        }
        else{
            CarouselItem.classList.add("carousel-item")
        }
        Carousel.append(CarouselItem);
    }
}

// function createCarousel2(arr) {
//     let display_div = document.getElementById('display-div')

//     display_div.innerHTML = `  <h1 style="text-align: center; margin: 1% 0% 1% 0%; color: white">Search Results</h1>
//     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//       <div class="carousel-inner" id="CarouselBooks"></div>
//       <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="sr-only">Previous</span>
//       </a>
//       <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="sr-only">Next</span>
//       </a>`

//     let Carousel = document.getElementById("CarouselBooks");
//     var i;
//     for (i=0;i<arr.length;i++){

//         /*  let bookDetailsAnchor = document.createElement('a');
//             bookDetailsAnchor.setAttribute("href", "Components/bookDetails.html/" + arr[i]);
//         */
//         let bookDetailsAnchor = document.createElement('a');
//         bookDetailsAnchor.setAttribute("href", "bookDetails.html?book=" + arr[i].Title);
//         let CarouselItem = document.createElement('div');
//         let CarouselImage = document.createElement('img');
//         let CarouselInnerBlock = document.createElement('div');
//         let BookTitle = document.createElement('h5');
//         let BookAuthor = document.createElement('p');
//         let Book = arr[i];

//         BookTitle.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
//         BookAuthor.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
//         BookTitle.innerText = Book.Title;
//         BookAuthor.innerText = "by " + Book.Author;
//         CarouselInnerBlock.append(BookTitle);
//         CarouselInnerBlock.append(BookAuthor);
//         CarouselInnerBlock.classList.add("carousel-caption","d-none","d-md-block");
//         bookDetailsAnchor.appendChild(CarouselImage)

//         CarouselImage.classList.add("d-block","w-100");
//         CarouselImage.classList.add("d-block","w-100");
//         CarouselImage.src = (Book.imgSrc.includes("media/")? ("../" + Book.imgSrc) : Book.imgSrc);
        
//         CarouselImage.alt = Book.Title;
//         // CarouselItem.append(CarouselImage);
//         CarouselItem.append(bookDetailsAnchor);
//         CarouselItem.append(CarouselInnerBlock);

//         if (i == 0){
//             CarouselItem.classList.add("carousel-item","active");
//         }
//         else{
//             CarouselItem.classList.add("carousel-item");
//         }
//         Carousel.append(CarouselItem);
//     }
// }

// function browseSearchResults(){
//     let search_results = JSON.parse(sessionStorage.getItem(window.location.href.split("=")[1]));
//     if (search_results.length != 0){
//         createCarousel2(search_results);
//     }
//     else{
//         let display_div = document.getElementById('display-div');
//         display_div.innerHTML = '<p>No Results found</p>';
//     }
// }

function loadBooks(){
    if (localStorage.getItem("ALLBooks") === null)
    {
        var Book1 = new Book("DEEP LEARNING","Ian Goodfellow, Yousha Bengio, and Aaron Courville","Educational",
        "media/Deep Learning by Ian ,Yousha,& Aaron.jpg","")

        var Book2 = new Book("DEEP LEARNING","Douwe Osinga", "Educational",
        "media/Deep Learning Cookbook.png","")

        var Book3 = new Book("HARRY POTTER and the CHAMBER of SECRETS","J.K. ROWLING", "Common",
        "media/Harry Potter and the Chamber of Secrets.jpg","")

        var Book4 = new Book("HARRY POTTER and the PHILOSPHER'S STONE","J.K. ROWLING", "Common",
        "media/Harry Potter and the Philsopher's Stone.jpg","")
        
        var Book5 = new Book("HARRY POTTER and the PRISONER of AZAKBAN","J.K. ROWLING", "Common",
        "media/Harry Potter and the Prisoner of Azakaban.jpg","")

        var Book6 = new Book ("HOW TO RAISE AN ANTIRACIST","IBRAM X. KENDI", "New",
        "media/HOW TO RAISE AN ANTIRACIST.jpg","")

        var Book7 = new Book ("Building a Second Brain","TIAGO FORTE", "New",
        "media/Building a Second Brain.jpg","")

        var ALLBooks = [Book1, Book2, Book3, Book4, Book5, Book6, Book7] 
        localStorage.setItem("ALLBooks", JSON.stringify(ALLBooks))
    }else{
        var ALLBooks = JSON.parse(localStorage.getItem("ALLBooks"))
    }

    var commonBooks = []
    var educationalBooks = []
    var newBooks = []
    for(let i = 0; i < ALLBooks.length; i++){
        if (ALLBooks[i].Category === "Common"){
            commonBooks.push(ALLBooks[i]);
        }else if (ALLBooks[i].Category === "New"){
            newBooks.push(ALLBooks[i]);

        }else if (ALLBooks[i].Category === "Educational"){
            educationalBooks.push(ALLBooks[i]);

        }
    }
    createCarousel(commonBooks,1)
    createCarousel(newBooks,2)
    createCarousel(educationalBooks,3)
}

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
            localStorage.setItem("ALLBooks", JSON.stringify(AllBooks));
            break;
        }
    } 
    window.location.assign('../index.html')
}

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
    document.getElementById("cardBookCover").setAttribute("src",  (selectedBook.imgSrc.includes("media/")?
     ("../" + selectedBook.imgSrc) : selectedBook.imgSrc))
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
}

function generateCardsForAllBooks(){
    //get div with id cardsDiv
    let cardsDiv = document.getElementById("cardsDiv");
    //get all books from local storage
    let AllBooks = JSON.parse(localStorage.getItem("ALLBooks"));
    //loop through all books
    for (const book of AllBooks){
        cardsDiv.innerHTML += `
        <div class="card" style="width:16em; height: 32em; margin-top:10px;margin-bottom: 10px;">
        <img id="cardBookCover" class="card-img-top" alt="Card image cap" src="${(book.imgSrc.includes("media/")? ("../" + book.imgSrc) : book.imgSrc)}">
        <div class="card-body">
          <h5 id="cardBookTitle" style="width:12em; height: 4em;" class="card-title">${book.Title}</h5>
          <h6 id="cardBookAuthor" style="width:12em; height: 4em;" class="card-subtitle mb-2 text-muted">Author: ${book.Author}</h6>
          <p id="cardPublishDate" style="width:12em; height: 4em;" class="card-text">Publish Date: ${book.Date}</p>
          <a href="../Components/bookDetails.html?book=${book.Title}" class="card-link">Book link</a>
        </div>
      </div>
      `
    }
}

