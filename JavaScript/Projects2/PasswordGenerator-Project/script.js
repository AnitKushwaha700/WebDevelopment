function generatePassword() {
    let length = document.getElementById("length").value;
    let passwordBox = document.getElementById("password");

    let chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    if (length <= 0) {
        alert("Enter valid length");
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordBox.value = password;
}