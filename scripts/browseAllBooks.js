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