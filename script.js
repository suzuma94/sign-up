function passMatch() {
    if(document.getElementById("u_pwd").value == document.getElementById("confirm_pwd").value) {
        document.getElementById("confirm_pwd").setCustomValidity("");
        
    }
    else {
        document.getElementById("confirm_pwd").setCustomValidity("Passwords don't match");
        
    }   
}