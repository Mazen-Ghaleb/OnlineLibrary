function createCarousel(arr) {
    let display_div = document.getElementById('display-div')

    display_div.innerHTML = `  <h1 style="text-align: center; margin: 1% 0% 1% 0%; color: white">Search Results</h1>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" id="CarouselBooks"></div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>`

    let Carousel = document.getElementById("CarouselBooks");
    var i;
    for (i=0;i<arr.length;i++){

        /*  let bookDetailsAnchor = document.createElement('a');
            bookDetailsAnchor.setAttribute("href", "Components/bookDetails.html/" + arr[i]);
        */
        let bookDetailsAnchor = document.createElement('a');
        bookDetailsAnchor.setAttribute("href", "bookDetails.html?book=" + arr[i].Title);
        let CarouselItem = document.createElement('div');
        let CarouselImage = document.createElement('img');
        let CarouselInnerBlock = document.createElement('div');
        let BookTitle = document.createElement('h5');
        let BookAuthor = document.createElement('p');
        let Book = arr[i];

        BookTitle.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookAuthor.style.cssText = "-webkit-text-stroke-width: 0.25px; -webkit-text-stroke-color: black;"
        BookTitle.innerText = Book.Title;
        BookAuthor.innerText = "by " + Book.Author;
        CarouselInnerBlock.append(BookTitle);
        CarouselInnerBlock.append(BookAuthor);
        CarouselInnerBlock.classList.add("carousel-caption","d-none","d-md-block");
        bookDetailsAnchor.appendChild(CarouselImage)

        CarouselImage.classList.add("d-block","w-100");
        CarouselImage.classList.add("d-block","w-100");
        CarouselImage.src = '../' + Book.imgSrc;
        
        CarouselImage.alt = Book.Title;
        // CarouselItem.append(CarouselImage);
        CarouselItem.append(bookDetailsAnchor);
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


let search_results = JSON.parse(sessionStorage.getItem(window.location.href.split("=")[1]))
console.log(search_results)
if (search_results.length != 0){
    createCarousel(search_results)
}
else{
    let display_div = document.getElementById('display-div')
    display_div.innerHTML = '<p>No Results found</p>'
}
