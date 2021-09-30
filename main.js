function validateForm() {
    var a = document.forms["myForm"]["firstname"].value;
    var b = document.forms["myForm"]["lastname"].value;
    var c = document.forms["myForm"]["email"].value;
    var d = document.forms["myForm"]["password"].value;
    
    let response = true;
    
    if (a == "") {
        document.getElementById("empty-fn").textContent = "First Name cannot be empty";
        document.getElementById("firstname").classList.add("error");
        document.getElementById("firstname").placeholder = "";
        response = false;
    }
    else{
        document.getElementById("empty-fn").textContent = "";
        document.getElementById("firstname").classList.add("error-2");
    }
    
    if (b == "") {
        document.getElementById("empty-ln").textContent = "Last Name cannot be empty";
        document.getElementById("lastname").classList.add("error");
        document.getElementById("lastname").placeholder = "";

        response = false;
    }
    else{
        document.getElementById("empty-ln").textContent = "";
        document.getElementById("lastname").classList.add("error-2");
    }
    
    if (c == "") {
        document.getElementById("empty-email").textContent = "Looks like this is not an email";
        document.getElementById("email").classList.add("error");
        document.getElementById("email").placeholder = "email@example/com";
        response = false;
    }
    else{
        document.getElementById("empty-email").textContent = "";
        document.getElementById("email").classList.add("error-2");
    }

    if (d == "") {
        document.getElementById("empty-pass").textContent = "Password cannot be empty";
        document.getElementById("password").classList.add("error");
        document.getElementById("password").placeholder = "";
        response = false;
    }
    else{
        document.getElementById("empty-pass").textContent = "";
        document.getElementById("password").classList.add("error-2");
    }

    return response;
}