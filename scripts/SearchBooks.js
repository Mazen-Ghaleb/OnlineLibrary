function search_books() {
    let search_term = document.getElementById('search-box').value.toLowerCase()
    let search_results = []
    for (let i = 0; i < arrCommonBooks.length; i++) {
        if (arrCommonBooks[i].getTitle().toLowerCase().includes(search_term) ||
            arrCommonBooks[i].getAuthor().toLowerCase().includes(search_term)) {
            search_results.push(arrCommonBooks[i])
        }
    }
    sessionStorage.setItem(`${search_term}`, JSON.stringify(search_results))
    let path =`../Components/BrowseBooks.html?search_key=${search_term}`
    window.open(path)
}