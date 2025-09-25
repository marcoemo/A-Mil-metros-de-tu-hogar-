 // ===============================
// Renderizado del Carrito
// ===============================

function renderizarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let contenedor = document.getElementById("carrito-contenido");

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center'>Tu carrito está vacío 🐾</p>";
    return;
  }

  let html = `
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
  `;

  let total = 0;
  carrito.forEach((p) => {
    let subtotal = p.precio * p.cantidad;
    total += subtotal;
    html += `
      <tr>
        <td>${p.nombre}</td>
        <td>$${p.precio.toLocaleString()}</td>
        <td>${p.cantidad}</td>
        <td>$${subtotal.toLocaleString()}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
    <h4 class="text-end">Total: $${total.toLocaleString()}</h4>
    <div class="text-end mt-3">
      <button class="btn btn-warning" onclick="vaciarCarrito()">Vaciar carrito</button>
    </div>
  `;

  contenedor.innerHTML = html;
}

// Eliminar producto
function eliminarProducto(id) {
  id = Number(id); // aseguramos número
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = carrito.filter(p => Number(p.id) !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
  localStorage.setItem("carrito", JSON.stringify([]));
  renderizarCarrito();
}

// Renderizar al cargar
document.addEventListener("DOMContentLoaded", renderizarCarrito);
