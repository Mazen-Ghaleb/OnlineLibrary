function generateCardsForAllMembers(){
    //get div with id cardsDiv
    let cardsDiv = document.getElementById("cardsDiv");
    //get all books from local storage
    let allAccounts = JSON.parse(localStorage.getItem("accounts"));
    //loop through all books
    for (const account of allAccounts){
        let acc = UserFromJson(account);
        cardsDiv.innerHTML += `
        <div class="card" style="width:14em; height: 32em; margin-top: 10px; margin-bottom: 10px;">
        <img id="cardMemeberProfile" width:10em; class="card-img-top" alt="Card member cap" src="../media/profile.png">
        <div class="card-body">
          <h5 id="card" class="card-title">${acc.getUserName()}</h5>
          <h6 id="cardUserMail" class="card-subtitle mb-2 text-muted">${acc.getUserMail()}</h6>
          <p id="cardUserCreateDate" class="card-text">Created at: ${acc.getcreateDate()}</p>
          <p id="cardUserRole" class="card-text">Role: ${acc.getRole()}</p>
          <a href="../Components/Profile.html?accountEmail=${acc.getUserMail()}" class="card-link">Profile Link</a>
        </div>
      </div>
      `
    }
}