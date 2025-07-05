var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passInput = document.querySelector("#passInput");
var loginEmail = document.querySelector("#loginEmail"); 
var loginPass = document.querySelector("#loginPass"); 

var usersList = JSON.parse(localStorage.getItem("users")) || [];

function isEmpty () {
    if ( nameInput.value == "" || emailInput.value == "" || passInput.value == "" ) {
        return false
    } else {
        return true
    }
}

function isEmailExist () {

    for (let i=0; i<usersList.length; i++) {
        if (usersList[i].email == emailInput.value){
            return false
        }
    }
}

function signUp () {

    if (isEmpty() == false){
        document.querySelector("#verify").innerHTML = `<span class="text-danger">All Inputs Are Required</span>`
    }
    
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    } 

    if (usersList.length == 0){
        usersList.push(user);
        localStorage.setItem("users" , JSON.stringify(usersList))
        document.querySelector("#verify").innerHTML = `<span class="text-success ">success</span>`
    }

    if (isEmailExist() == false){
        document.querySelector("#verify").innerHTML = `<span class="text-danger ">Email Exists</span>`
    } else {
            usersList.push(user);
            localStorage.setItem("users" , JSON.stringify(usersList));
            document.querySelector("#verify").innerHTML = `<span class="text-success ">success</span>`
    }

}

function isLoginEmpty () {
    if (loginEmail.value == "" || loginPass.value == "") {
        return false
    }
}

function login () {

    for (let i=0; i<usersList.length; i++ ) {
        if (usersList[i].email == loginEmail.value && usersList[i].pass == loginPass.value){
            document.querySelector("#check").innerHTML = `<span class="text-success">success</span>`
            localStorage.setItem("currentUser" , usersList[i].name);
            location.replace("html/home.html")
        } else {
            document.querySelector("#check").innerHTML = `<span class="text-danger">incorrect email or password</span>`
        }       
    }  
    if (isLoginEmpty() == false){
        document.querySelector("#check").innerHTML = `<span class="text-danger">All Inputs Are Required</span>`
    }
    
}







