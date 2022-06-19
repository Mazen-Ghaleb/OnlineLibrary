function display_Profile_details(){
    accountEmail = decodeURI(location.href.split("=")[1]);
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    var selectedAccount = null;
    for (const account of accounts){
        if (accountEmail == account.userMail){
            selectedAccount = account;
            break;
        }
    } 
    if (selectedAccount == null) {alert("NO BOOK CHOSEN"); return;}
    document.getElementById("profilePicture").setAttribute("src", `../media/profile.png`)
    document.getElementById("cardName").innerText = `${selectedAccount.userName}`;

    document.getElementById("cardEmail").innerText = `${selectedAccount.userMail}`;
    document.getElementById("cardPublishDate").innerText = `since: ${selectedAccount.createDate}`;
    document.getElementById("cardRole").innerText = `Role: ${selectedAccount.role}`;

    console.log(selectedBook);
}