function encrypt(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-z]/i)) {
            let charCode = text.charCodeAt(i);
            let baseCharCode = text[i] === text[i].toLowerCase() ? 97 : 65;
            result += String.fromCharCode(((charCode - baseCharCode + shift) % 26) + baseCharCode);
        } else {
            result += text[i];
        }
    }

    return result;
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

function encryptText() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);

    let result = encrypt(text, shift);
    document.getElementById("result").value = result;
}

function decryptText() {
    let text = document.getElementById("result").value; // Get the encrypted text from the result textarea
    let shift = parseInt(document.getElementById("shift").value);

    let result = decrypt(text, shift);
    document.getElementById("result").value = result;

    if (result) {
        alert("Decryption successful. Try a new decryption.");
    }
}

