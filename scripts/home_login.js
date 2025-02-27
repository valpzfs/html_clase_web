
const username = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
const btnLogin = document.getElementById("btnLogin");


btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const userValue = username.value.trim(); // trim() quita el whitespace al principio y al fin
    const passValue = password.value.trim();

    if (userValue === "" || passValue === "") {
        alert("Por favor, llena todos los campos.");
        return;
    }

    const validUser = "A00838648@ejemplo.com";
    const validPass = "Tec1234";

    if (userValue === validUser && passValue === validPass) {
        window.location.href = "../index.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

