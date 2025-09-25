// ===============================
// Manejo de Carrito
// ===============================

// Si no existe el carrito en localStorage, lo creamos vacío
if (!localStorage.getItem("carrito")) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

// Función para agregar producto
function agregarAlCarrito(id, nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));

  // Aseguramos que el id siempre sea número
  id = Number(id);

  // Verificar si ya existe el producto en el carrito
  let producto = carrito.find(p => Number(p.id) === id);
  if (producto) {
    producto.cantidad += 1;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${nombre} fue agregado al carrito 🛒`);
}
