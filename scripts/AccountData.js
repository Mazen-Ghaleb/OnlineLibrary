function User(userName,userMail,userPassword, createDate, role="Member"){
    this.userName = userName;
    this.userPassword = userPassword;
    this.userMail = userMail;
    this.createDate = createDate;
    this.role = role;

    this.getUserName = function () {
        return this.userName;
    }
    this.getUserMail = function () {
        return this.userMail;
    }
    this.getcreateDate = function () {
        return this.createDate;
    }
    this.getRole = function () {
        return this.createDate;
    }

    this.setUserName = function (userName) {
        this.userName = userName;
    }
    this.setUserMail = function (userMail) {
        this.userName = userMail;
    }
}

if (localStorage.getItem("accounts") === null)
{
    var adminAccount = new User("Admin","admin@admin.com","admin","","Admin");
    var Account1 = new User("Youssef","ymaher@912.com","YMAHER99_DOTa2@su","19-06-2022");
    var Account2 = new User("Mazen","mazen@mazen.com","Mazeeeeeen","19-06-2022");
    var Account3 = new User("Lotfy","lotfy@lotfy.com","LOTFYYYYY","19-06-2022");
    var arrAccounts = [adminAccount,Account1,Account2,Account3]

    localStorage.setItem("accounts", JSON.stringify(arrAccounts))
}

// var arrAccounts = JSON.parse(localStorage.getItem("accounts"));
// for (let i = 0; i < arrAccounts.length; i++)
//     arrAccounts[i] = User(arrAccounts[i].userName,arrAccounts[i].userMail,arrAccounts[i].userPassword, arrAccounts[i].createDate, arrAccounts[i].role);
// console.log(arrAccounts)

var arrAccounts = JSON.parse(localStorage.getItem("accounts"));
console.log(arrAccounts)
for (let i = 0; i < arrAccounts.length; i++)
    arrAccounts[i] = new User(arrAccounts[i].userName,
        arrAccounts[i].userMail,
        arrAccounts[i].userPassword,
        arrAccounts[i].createDate,
        arrAccounts[i].role);
console.log(arrAccounts)

if (localStorage.getItem("LoggedIn") === null)
    localStorage.setItem("LoggedIn",JSON.stringify("False"));

   if (localStorage.getItem("AccLoggIn") === null){
    localStorage.setItem("AccLoggedIn",JSON.stringify(""))

}

function createAccount() {
    accountCreated = true;

    let email = document.getElementById("email").value;
    for(var i = 0 ; i < arrAccounts.length; i++){
        if (email === arrAccounts[i].getUserMail()){
            document.getElementById('CheckMail').style.color = 'red';
            document.getElementById('CheckMail').innerHTML = 'An account with this email already exists';
            accountCreated = false;
        }
    }

    if (accountCreated){

        if (document.getElementById("psw").value == document.getElementById("psw-repeat").value) {
            
            let name = document.getElementById("name").value;
            let password = document.getElementById("psw").value;
            let createDate = new Date();
            createDate = createDate.toDateString();
            let account = new User(name,email,password,createDate)
            arrAccounts.push(account)
            localStorage.setItem("accounts", JSON.stringify(arrAccounts))
            accountCreated = true;
        }
        else{
            document.getElementById('CheckPass').style.color = 'red';
            document.getElementById('CheckPass').innerHTML = 'Password is not matching';
            accountCreated = false;
        }
    }
    if(accountCreated){
        window.location.replace("./SignIn.html");
        }
    return accountCreated;
}

function login(email,password) {    
    // var arrAccounts = JSON.parse(localStorage.getItem("accounts"));
    // console.log(arrAccounts)
    // for (let i = 0; i < arrAccounts.length; i++)
    //     arrAccounts[i] = new User(arrAccounts[i].userName,
    //         arrAccounts[i].userMail,
    //         arrAccounts[i].userPassword,
    //         arrAccounts[i].createDate,
    //         arrAccounts[i].role);
    // console.log(arrAccounts)

    found = false;
    logged = false;

    for(var i = 0; i<arrAccounts.length; i++){
        if (email === arrAccounts[i].getUserMail()){
            if (password === arrAccounts[i].userPassword) {
                localStorage.setItem("LoggedIn",JSON.stringify("True"));
                localStorage.setItem("AccLoggedIn",JSON.stringify(arrAccounts[i]))
                logged = true;
            }
            else {
                document.getElementById('CheckPassword').classList.add("notCorrect");
                document.getElementById('CheckMail').classList.remove("notCorrect");
                document.getElementById('CheckPassword').innerHTML = 'Password is not matching';
            }
            found = true;
            break;
        }
    }

    if (found === false){
        document.getElementById('CheckMail').classList.add("notCorrect");
        document.getElementById('CheckPassword').classList.remove("notCorrect");
        document.getElementById('CheckMail').innerHTML = 'Email is not matching';
    }

    if(logged){
        window.location.replace("../index.html");
    }

    return logged;
}