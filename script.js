function generateQRCode() {
    var textInput = document.getElementById("text-input").value;
    var qrcodeContainer = document.getElementById("qrcode");

    // Certifique-se de que o contêiner do QR Code está vazio antes de gerar um novo
    qrcodeContainer.innerHTML = "";

    if (textInput !== "") {
        // Use a biblioteca qrcode.js para gerar o QR Code
        var qrcode = new QRCode(qrcodeContainer, {
            text: textInput,
            width: 200,
            height: 200
        });
    } else {
        alert("Por favor, insira um texto antes de gerar o QR Code.");
    }
}
