function display_account_data(){
    let account = localStorage.getItem('AccLoggedIn')
    let sign_in_button = document.getElementById('signIn')
    let sign_up_button = document.getElementById('signUp')
    let parent_node = sign_in_button.parentElement
    parent_node.removeChild(sign_in_button)
    parent_node.removeChild(sign_in_button)
    let test = document.CreateElement('span')
    test.innerHTML = 'test'
    parent_node.appendChild(test)

}

function generateNavBar() {
    let head = document.getElementsByTagName("head")[0];
    let alink = document.createElement("link");
    alink.rel = "stylesheet";

    if(window.location.pathname.split("/").pop() === "index.html"){
      console.log("here1")
      alink.href= "./styles/indexStyles.css";
    }
    else {
      console.log("here2")
      alink.href= "../styles/indexStyles.css";
    }

   
    alink.type="text/css";
//<link rel="stylesheet" type="text/css" href="./styles/indexStyles.css" />

    head.appendChild(alink);
    
    head.innerHTML+=(`
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />
  <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"
  ></script>
    `)
  
    let nav = document.createElement('nav');
    nav.classList.add("navbar","navbar-dark","bg-dark","justify-content-between");
    nav.innerHTML = 
    `
      <a class="navbar-brand">Navbar</a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-box" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="search_books()">Search</button>
        <button class="btn btn-outline-success my-2 my-sm-0" id="signIn"><a href="../Components/SignIn.html">Sign In</a></button>
        <button class="btn btn-outline-success my-2 my-sm-0" id="signUp"><a href="../Components/SignUp.html">Sign Up</a></button>
      </form>
    `;
    document.body.append(nav);
}

// function search_books() {
//   let search_term = document.getElementById('search-box').value.toLowerCase()
//   let search_results = []
//   for (let i = 0; i < arrCommonBooks.length; i++) {
//       if (arrCommonBooks[i].getTitle().toLowerCase().includes(search_term) ||
//           arrCommonBooks[i].getAuthor().toLowerCase().includes(search_term)) {
//           search_results.push(arrCommonBooks[i])
//       }
//   }
//   sessionStorage.setItem(`${search_term}`, JSON.stringify(search_results))
//   let path =`../Components/BrowseBooks.html?search_key=${search_term}`
//   window.open(path)
// }

if(JSON.parse(localStorage.getItem('LoggedIn')) === "True"){
    console.log('here')
    display_account_data()
}

