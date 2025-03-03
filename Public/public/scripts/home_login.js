
const username = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
const btnLogin = document.getElementById("btnLogin");


btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const userValue = username.value;
    const passValue = password.value;

    if (userValue === "" || passValue === "") {
        alert("Por favor, llena todos los campos.");
        return;
    }

    const validUser = "vale@email.com";
    const validPass = "Tec1234";

    if (userValue === validUser && passValue === validPass) {
        sessionStorage.setItem("name", "Valeria Lopez");
        window.location.href = "../index.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

//LOGIN VISTO EN CLASE

// const login = ()=>{
//     if(username.value ==="vale@email.com" && password.value === "12345"){
//         sessionStorage.setItem("name", "Vale Lopez");
//         window.location = "../index.html";
//     }else{
//         alert("credenciales incorrectas");
//     }
// };

// const btnLogin = document.getElementById("btnLogin");
// btnLogin.addEventListener("click", login);
// password.addEventListener("keydown", (e)=> {if(e.key === "Enter"){
//     login();
// }});

