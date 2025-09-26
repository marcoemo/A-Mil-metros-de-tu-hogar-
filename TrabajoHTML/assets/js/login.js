document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  const btnAdmin = document.getElementById("btnAdmin");

  // Login normal
  formLogin.addEventListener("submit", e => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    localStorage.setItem("sesion", JSON.stringify({
      usuario,
      rol: "usuario"
    }));

    alert(`Bienvenido ${usuario} 🐾`);
    window.location.href = "../../index.html";
  });

  // Login administrador
  btnAdmin.addEventListener("click", () => {
    localStorage.setItem("sesion", JSON.stringify({
      usuario: "Administrador",
      rol: "admin"
    }));

    alert("Has iniciado sesión como Administrador 🔑");
    window.location.href = "admin.html"; // ajustar ruta según tu estructura
  });
});
