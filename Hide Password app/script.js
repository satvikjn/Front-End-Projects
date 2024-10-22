let eyeButton = document.getElementById("eye-button");
let passwordinput = document.getElementById("password");

eyeButton.onclick = function togglePasswordToseenUnseen() {
    if(passwordinput.type=="password"){
        passwordinput.type = "text";
        eyeButton.src = "eye-open.png";
    }
    else{
        passwordinput.type = "password";
        eyeButton.src = "eye-close.png";
    }
}

