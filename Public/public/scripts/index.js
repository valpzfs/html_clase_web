window.addEventListener("load", () => {
    console.log("Verificando sesión...");
    const userId = sessionStorage.getItem("user_id");

    if (!userId) {
        console.log("No hay sesión activa, redirigiendo al login...");
        setTimeout(() => {
            window.location.href = "/Paginas/home.html";
        }, 2000); // Espera 2 segundos antes de redirigir
    } else {
        console.log("Sesión activa, usuario ID:", userId);
    }
});

/*
window.onload = () =>{
    if (!sessionStorage.name){
        window.location = "./Paginas/home.html"
    }
};

const h1 =document.getElementById("headerUno");
h1.innerHTML = "hola " + sessionStorage.name;

const logout = document.getElementById("logout");
logout.addEventListener("click", ()=>{
    sessionStorage.removeItem("name");
})

*/
/* SOPCION DE MENSAJES
const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = ()=> {
    chat.value += "\n" + msg.value;
    msg.value = "";
}

send.addEventListener("click", sendMsg)

msg.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){

    }
})

*/
const infobtn = document.getElementById("infobtn");
infobtn.addEventListener("click", (event) => {
    alert("Redirigiendo a Google Art & Culture");
    window.open("https://artsandculture.google.com/story/what-is-post-impressionist-art/YgVBUtbq8PnjIA?hl=en", "_blank");
});