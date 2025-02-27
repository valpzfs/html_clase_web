window.onload = () =>{
    if (!sessionStorage.name){
        window.location = "../index.html"
    }
};

const h1 =document.getElementById("headerUno");
h1.innerHTML = "hola " + sessionStorage.name;

const logout = document.getElementById("logout");
logout.addEventListener("click", ()=>{
    sessionStorage.removeItem("name");
})


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