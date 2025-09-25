document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAdopcion");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {
      nombre: document.getElementById("nombre").value.trim(),
      correo: document.getElementById("correo").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      animal: document.getElementById("animal").value,
      motivo: document.getElementById("motivo").value.trim(),
    };

    // Reglas de validación
    const reglas = [
      { valido: !!data.nombre, msg: "⚠️ El nombre es obligatorio." },
      { valido: !!data.correo, msg: "⚠️ El correo es obligatorio." },
      { valido: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo), msg: "📧 Ingresa un correo válido." },
      { valido: !!data.telefono, msg: "⚠️ El teléfono es obligatorio." },
      { valido: /^\+56\s9\s\d{4}\s\d{4}$/.test(data.telefono), msg: "📱 El teléfono debe tener el formato: +56 9 1234 5678" },
      { valido: !!data.animal, msg: "⚠️ Debes elegir un animal." },
      { valido: !!data.motivo, msg: "⚠️ Indica tu motivo de adopción." },
    ];

    // Busca el primer error
    const error = reglas.find(r => !r.valido);
    if (error) {
      alert(error.msg);
      return;
    }

    alert(`✅ ¡Gracias ${data.nombre}! Tu solicitud para adoptar un ${data.animal} fue enviada con éxito.`);
    form.reset();
  });
});
