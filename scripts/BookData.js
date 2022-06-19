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
        JSON.setItem(localStorage.setItem("ALLBooks", JSON.stringify(ALLBooks)))
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

    console.log(ALLBooks)
    console.log(commonBooks)
    console.log(newBooks)
    console.log(educationalBooks)

    createCarousel(commonBooks,1)
    createCarousel(newBooks,2)
    createCarousel(educationalBooks,3)



