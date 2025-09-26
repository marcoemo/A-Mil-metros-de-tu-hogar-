document.addEventListener("DOMContentLoaded", () => {
  const sesion = JSON.parse(localStorage.getItem("sesion"));
  const adminContent = document.getElementById("adminContent");
  const btnLogout = document.getElementById("btnLogout");

  // Verificar si hay sesión y si es admin
  if (!sesion || sesion.rol !== "admin") {
    alert("No tienes permiso para acceder a esta página.");
    window.location.href = "login.html";
    return;
  }

  // Contenido dinámico para administrador
  adminContent.innerHTML = `
    <h1 class="mb-4">Bienvenido, ${sesion.usuario} 🔑</h1>
    <p class="lead">Has iniciado sesión como <strong>Administrador</strong>.</p>
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Usuarios registrados</h5>
            <p class="card-text">Consulta y administra las cuentas de los usuarios.</p>
            <button class="btn btn-primary w-100">Ver usuarios</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Pedidos</h5>
            <p class="card-text">Revisa las compras realizadas en la tienda.</p>
            <button class="btn btn-primary w-100">Ver pedidos</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Mascotas en adopción</h5>
            <p class="card-text">Agrega, edita o elimina mascotas publicadas.</p>
            <button class="btn btn-primary w-100">Gestionar mascotas</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Cerrar sesión
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("sesion");
    alert("Sesión cerrada.");
    window.location.href = "../../index.html";
  });
});
