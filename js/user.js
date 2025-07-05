    const userName = localStorage.getItem("currentUser");

    if (userName) {
        document.getElementById("userName").innerHTML = `Welcome ${userName}`;
    }
    
    
    function logOut() {
        localStorage.removeItem("currentUser")
    }