// Cambia el tema claro y oscuro
const root = document.documentElement;
const botonTema = document.getElementById("cambiar-tema");

function aplicarTema(tema) {
  root.setAttribute("data-theme", tema);
  if (tema === "dark") {
    botonTema.textContent = "Modo claro";
} else {
    botonTema.textContent = "Modo oscuro";
}
}
if (botonTema) {
  botonTema.addEventListener("click", function () {
    let nuevoTema;

    if (root.getAttribute("data-theme") === "dark") {
      nuevoTema = "light";
    } else {
      nuevoTema = "dark";
    }

    aplicarTema(nuevoTema);

  });
}

//Validacion del form

const formulario = document.getElementById("formulario-contacto");

if (formulario) {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const comentario = document.getElementById("comentario");
  const mensaje = document.getElementById("mensaje-formulario");

  nombre.placeholder = "Escribe tu nombre completo";
  nombre.required = true;
  nombre.minLength = 3;
  nombre.maxLength = 60;

  email.placeholder = "ejemplo@correo.com";
  email.required = true;

  telefono.placeholder = "10 digitos";
  telefono.required = true;
  telefono.maxLength = 10;
  telefono.pattern = "[0-9]{10}";

  comentario.placeholder = "Cuentanos que producto te interesa";
  comentario.required = true;
  comentario.minLength = 10;
  comentario.maxLength = 500;

  // Validacion al enviar el form
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    mensaje.textContent = "";
    mensaje.className = "";

    if (nombre.value.trim().length < 3) {
      mostrarError("El nombre debe tener al menos 3 caracteres", nombre);
      return;
    }

    if (!email.checkValidity() || email.value.trim() === "") {
      mostrarError("Ingresa un correo electronico valido", email);
      return;
    }

    if (!/^[0-9]{10}$/.test(telefono.value.trim())) {
      mostrarError("El telefono debe contener exactamente 10 digitos", telefono);
      return;
    }

    if (comentario.value.trim().length < 10) {
      mostrarError("Escribe un comentario de al menos 10 caracteres", comentario);
      return;
    }

    mensaje.textContent =
      "Formulario validado correctamente. Gracias por contactarnos";
    mensaje.className = "exito";

    formulario.reset();
  });

  function mostrarError(texto, campo) {
    mensaje.textContent = texto;
    mensaje.className = "error";
    campo.focus();
  }
}
