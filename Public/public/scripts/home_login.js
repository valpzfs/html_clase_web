const username = document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");
const form = document.querySelector("form"); // Selecciona el formulario

const login = async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    if (!username.value || !password.value) {
        alert("Por favor, ingresa tu usuario y contraseña.");
        return;
    }

    const user = { username: username.value, password: password.value };

    try {
        const respuesta = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");

        const data = await respuesta.json();
        console.log("Respuesta del servidor:", data);

        if (data.islogin) { 
            sessionStorage.setItem("user_id", data.user.user_id);
            sessionStorage.setItem("first_name", data.user.first_name);
            
            console.log("Redirigiendo a:", `/index.html?user_id=${data.user.user_id}`);
            window.location.href = `/index.html?user_id=${data.user.user_id}`;
        } else {
            alert("Credenciales Incorrectas");
        }
    } catch (error) {
        console.error("Error en el login:", error);
        alert("Hubo un error en el login. Revisa la consola.");
    }
};

// Asigna el evento submit al formulario en lugar del botón
form.addEventListener("submit", login);
password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        login(e);
    }
});


/*const username =document.getElementById("floatingInput");
const password = document.getElementById("floatingPassword");

const login = async() => {
    //console.log(username.value, password.value);
    const user = { username: username.value, password: password.value };
    const respuesta = await fetch("http://localhost:5000/login", {
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user),
    });

    const data= await respuesta.json();
    console.log(data);
    if (data.islogin){
        sessionStorage.setItem("user_id", data.user.user_id);
        sessionStorage.setItem("first_name", data.user.first_name);
        window.location.href = "./index.html?user_id="+ data.user.user_id;
    }else
    {
        alert("Credenciales Incorrectas");
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);
password.addEventListener("keydown", (e) => {if(e.key ==="Enter"){
    login();
}});
*/
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

