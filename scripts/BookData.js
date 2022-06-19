function Book(Title, Author, imgSrc, Date) {
    this.Title = Title;
    this.Author = Author;
    this.imgSrc = imgSrc;
    this.Date= Date;

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

        /*  let bookDetailsAnchor = document.createElement('a');
            bookDetailsAnchor.setAttribute("href", "Components/bookDetails.html/" + arr[i]);
        */
        let CarouselItem = document.createElement('div');
        let CarouselImage = document.createElement('img');
        let CarouselInnerBlock = document.createElement('div');
        let BookTitle = document.createElement('h5');
        let BookAuthor = document.createElement('p');
        let Book = getBook(arr,i);

        BookTitle.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookAuthor.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookTitle.innerText = Book.getTitle();
        BookAuthor.innerText = "by " + Book.getAuthor();
        CarouselInnerBlock.append(BookTitle);
        CarouselInnerBlock.append(BookAuthor);
        CarouselInnerBlock.classList.add("carousel-caption","d-none","d-md-block");

        CarouselImage.classList.add("d-block","w-100");
        CarouselImage.classList.add("d-block","w-100");
        CarouselImage.src = Book.getImgSrc();
        CarouselImage.alt = Book.getTitle();
        CarouselItem.append(CarouselImage);
        CarouselItem.append(CarouselInnerBlock);

        if (i == 0){
            CarouselItem.classList.add("carousel-item","active")
        }
        else{
            CarouselItem.classList.add("carousel-item")
        }
        Carousel.append(CarouselItem);
    }
}

    var Book1 = new Book("DEEP LEARNING","Ian Goodfellow, Yousha Bengio, and Aaron Courville", "media/Deep Learning by Ian ,Yousha,& Aaron.jpg","")
    var Book2 = new Book("DEEP LEARNING","Douwe Osinga","./media/Deep Learning Cookbook.png","")
    var Book3 = new Book("HARRY POTTER and the CHAMBER of SECRETS","J.K. ROWLING","media/Harry Potter and the Chamber of Secrets.jpg","")
    var Book4 = new Book("HARRY POTTER and the PHILOSPHER'S STONE","J.K. ROWLING","media/Harry Potter and the Philsopher's Stone.jpg","")

    var arrCommonBooks = [Book1,Book2,Book3,Book4]

    createCarousel(arrCommonBooks,1)
    createCarousel(arrCommonBooks,2)
    createCarousel(arrCommonBooks,3)

