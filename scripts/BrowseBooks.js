// function Book(title, image_url, author){
//     this.title = title;
//     this.image_url = image_url;
//     this.author = author;
// }


// var g_books = [
//     new Book("Harry Potter and the Philsopher's Stone", "./media/HarryPotterandthePhilsopher'sStone.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Chamber of Secrets", "./media/HarryPotterandtheChamberofSecrets.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Prisoner of Azakaban", "./media/HarryPotterandthePrisonerofAzakaban.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Philsopher's Stone", "./media/HarryPotterandthePhilsopher'sStone.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Chamber of Secrets", "./media/HarryPotterandtheChamberofSecrets.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Prisoner of Azakaban", "./media/HarryPotterandthePrisonerofAzakaban.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Philsopher's Stone", "./media/HarryPotterandthePhilsopher'sStone.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Chamber of Secrets", "./media/HarryPotterandtheChamberofSecrets.jpg", "J.K.Rowling"),
//     new Book("Harry Potter and the Prisoner of Azakaban", "./media/HarryPotterandthePrisonerofAzakaban.jpg", "J.K.Rowling"),
// ]

function display_books(){
    console.log('here')
    let search_results = JSON.parse(localStorage.getItem("search_results"))
    console.log(search_results)
    let table = document.getElementById('books-table')
    let no_of_rows = Math.floor(search_results.length / 3)
    no_of_rows += (search_results.length % 3)
    let book_index = 0;
    table.innerHTML = ''
    for (let row = 0; row < no_of_rows; row++){
        let table_row = document.createElement('tr')
        for (let col = 0; col < 3; col++){
            let book = search_results[book_index]
            let cell = document.createElement('td')
            cell.innerHTML = `
                "<img src=\"../${book.imgSrc}\" alt=\"${book.Title}\" width="500" height="500">
                <br>
                <span>\"${book.Title}"</span>
                <br>
                <span>Author: \"${book.Author}\"</span>
            `
            table_row.appendChild(cell)
            book_index++
        }
        table.appendChild(table_row)
        
    }
}

display_books()