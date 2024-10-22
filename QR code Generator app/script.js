let qrInput = document.getElementById("qrInput");
let qrCodeImage = document.getElementById("qrCodeImage");
let linkText = document.getElementById("linkText");


function generateQRCode() {
    document.getElementById("qr-code-conatiner").style["display"] = "flex";
    qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
    linkText.innerHTML = qrInput.value;

}