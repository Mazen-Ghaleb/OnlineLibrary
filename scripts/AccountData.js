function User(userName, userPassword, userMail, createDate, role="Member"){
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

var adminAccount = new User("Admin","admin","admin@admin.com","","Admin");
Account1 = new User("Youssef","YMAHER99_DOTa2@su","ymaher@912.com","19-06-2022");
Account2 = new User("Mazen","Mazeeeeeen","mazen@mazen.com","19-06-2022");
Account3 = new User("Lotfy","LOTFYYYYY","lotfy@lotfy.com","19-06-2022");

var arrAccounts = [adminAccount,Account1,Account2,Account3]

function createAccount() {
    console.log(arrAccounts)
    if (document.getElementById("psw").value == document.getElementById("psw-repeat").value) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("psw").value;
        let createDate = new Date();
        createDate = createDate.toDateString();
        let account = new User(name,email,password,createDate)
        arrAccounts.push(account)
    }
    else{
        document.getElementById('CheckPass').style.color = 'red';
        document.getElementById('CheckPass').innerHTML = 'Password is not matching';
    }
    console.log(arrAccounts)
}

