let pathRoot = "..";
if (window.location.pathname.split("/").pop() === "index.html") pathRoot = ".";

function generateNavBar() {
  let head = document.getElementsByTagName("head")[0];
  let alink = document.createElement("link");
  alink.rel = "stylesheet";

  alink.href = pathRoot + "/styles/indexStyles.css";
  alink.type = "text/css";
  //<link rel="stylesheet" type="text/css" href="./styles/indexStyles.css" />

  head.appendChild(alink);

  head.innerHTML += `
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
  `;
  document.body.append(generateNav());
}

function generateNav() {
  
  let nav = document.createElement("nav");
  nav.classList.add(
    "navbar",
    "navbar-dark",
    "bg-dark",
    "justify-content-between"
  );
  //if (JSON.parse(localStorage.getItem("LoggedIn")) === "True"){
  nav.innerHTML = `
  <button class="btn btn-outline-success my-2 my-sm-0" id="browseAllBooksBtn">
    <a class="navbar-brand" href="${pathRoot}/index.html">The Online Library</a>
  </button>


    <div style="display:inline; id=profile-container">
        <button class="btn btn-outline-success my-2 my-sm-0" id="browseAllBooksBtn">
          <a href="${pathRoot}/Components/browseAllBooks.html">Books</a>
        </button>

        ${((JSON.parse(localStorage.getItem("LoggedIn")) === "True" && JSON.parse(localStorage.getItem("AccLoggedIn")).role === "Admin")?
         `<button class="btn btn-outline-success my-2 my-sm-0" id="browseAllMembersBtn">
        <a href="${pathRoot}/Components/browseAllMembers.html">Members</a>
      </button>
      <button class="btn btn-outline-success my-2 my-sm-0" id="browseAllMembersBtn">
        <a href="${pathRoot}/Components/bookAddition.html">Add Book</a>
      </button>
    ` : ``)}
    </div>
    
        

    <form class="form-inline" onsubmit="return search_books()">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-box" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      <div style="display:inline; id=profile-container">
        <button class="btn btn-outline-success my-2 my-sm-0" id="signIn">
          <a href="${pathRoot}/Components/SignIn.html">Sign In</a>
        </button>
        <button class="btn btn-outline-success my-2 my-sm-0" id="signUp">
          <a href="${pathRoot}/Components/SignUp.html">Sign Up</a>
        </button>
      </div>
    </form>
  `;
 // }
  //else {nav.innerHTML = `
  // <button class="btn btn-outline-success my-2 my-sm-0" id="browseAllBooksBtn">
  //   <a class="navbar-brand" href="${pathRoot}/index.html">The Online Library</a>
  // </button>
    

  //   <div style="display:inline; id=profile-container">
  //       <button class="btn btn-outline-success my-2 my-sm-0" id="browseAllBooksBtn">
  //         <a href="${pathRoot}/Components/browseAllBooks.html">Books</a>
  //       </button>
  //     </div>

  //   <form class="form-inline" onsubmit="return search_books()">
  //     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-box" />
  //     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //     <div style="display:inline; id=profile-container">
  //       <button class="btn btn-outline-success my-2 my-sm-0" id="signIn">
  //         <a href="${pathRoot}/Components/SignIn.html">Sign In</a>
  //       </button>
  //       <button class="btn btn-outline-success my-2 my-sm-0" id="signUp">
  //         <a href="${pathRoot}/Components/SignUp.html">Sign Up</a>
  //       </button>
  //     </div>
  //   </form>
  // `;}
  return nav;
}


function display_account_data(goBack) {
  if (JSON.parse(localStorage.getItem("LoggedIn")) !== "True") return;

  let account = JSON.parse(localStorage.getItem("AccLoggedIn"));
  let sign_in_button = document.getElementById("signIn");
  let sign_up_button = document.getElementById("signUp");
  let parent_node = sign_in_button.parentElement;
  console.log(parent_node);
  parent_node.removeChild(sign_in_button);
  parent_node.removeChild(sign_up_button);
  let container = document.createElement("div");
  container.id = "profile-container";
  container.innerHTML = `
  <img src='../media/profile.png' style='height:50px;width:50px; padding:10px;'
       onclick="window.open('${pathRoot}/Components/Profile.html?accountEmail=${account.userMail}')">
  <button class="btn btn-outline-success my-2 my-sm-0" id="signOut" onclick="sign_out(${goBack})">Sign Out</button>
  `;

  container.style.display = "inline"; 
  parent_node.appendChild(container);

}

function sign_out(goBack) {
  localStorage.setItem("LoggedIn", JSON.stringify("False"));
  localStorage.setItem("AccLoggedIn", JSON.stringify(""));
  document.getElementsByTagName("nav")[0].remove();

  // let nav = document.createElement("nav");
  // nav.classList.add(
  //   "navbar",
  //   "navbar-light",
  //   "bg-light",
  //   "justify-content-between"
  // );
  // nav.innerHTML = `
  // <a class="navbar-brand">The Online Library</a>
  // <form class="form-inline" onsubmit="return search_books()">
  //   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-box" />
  //   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //   <div style="display:inline; id=profile-container">
  //     <button class="btn btn-outline-success my-2 my-sm-0" id="signIn">
  //       <a href="${pathRoot}/Components/SignIn.html">Sign In</a>
  //     </button>
  //     <button class="btn btn-outline-success my-2 my-sm-0" id="signUp">
  //       <a href="${pathRoot}/Components/SignUp.html">Sign Up</a>
  //     </button>
  //   </div>
  // </form>
  // `;
  document.body.prepend(generateNav());

  if(goBack) goBack();//window.history.back();
}

function goToPage (path){
  alink = document.createElement("a");
  alink.href=path;
  alink.click();
}