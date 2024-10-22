const passwordBox = document.getElementById("password");
const length = 12;
const passwordChar = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()_+<>?:";

function generatePassword(){
    let newPassword = "";
    while(12>newPassword.length){
        newPassword += passwordChar[Math.floor(Math.random()* passwordChar.length)];
    }
    passwordBox.value = newPassword;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}