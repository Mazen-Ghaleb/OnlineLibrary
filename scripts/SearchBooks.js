function search_books() {
    let search_term = document.getElementById('search-box').value.toLowerCase()
    let search_results = []
    let AllBooks = JSON.parse(localStorage.getItem("ALLBooks"));
    for (let i = 0; i < AllBooks.length; i++) {
        if (AllBooks[i].Title.toLowerCase().includes(search_term) ||
            AllBooks[i].Author.toLowerCase().includes(search_term)) {
            search_results.push(AllBooks[i])
        }
    }
    sessionStorage.setItem(`${search_term}`, JSON.stringify(search_results))
    let path =`../Components/BrowseBooks.html?search_key=${search_term}`
    window.location.assign(path);
    return false;
}