window.onload = () => {
    if (!sessionStorage.name) {
      // window.location = "../index.html";
    } else {
      const menuGame = document.getElementById("menuGame");
      menuGame.setAttribute("href", "./game.html?id=" + sessionStorage.id);
      const h1 = document.getElementById("saludo");
      h1.innerHTML = "hola " + sessionStorage.name;
    }
  };
  
  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    sessionStorage.clear();
  });