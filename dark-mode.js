// Busca en la página el botón cuyo id es "theme-toggle".
const button = document.getElementById("theme-toggle");

// Enciende o apaga el modo oscuro, y deja escrito qué eligió el visitante.
function toggleTheme() {
  // "toggle" pone la clase si no está, y la quita si está.
  const isDark = document.body.classList.toggle("white");

  // localStorage es una libretita que el navegador guarda para tu página.
  localStorage.setItem("theme", isDark ? "white" : "dark");

  // El botón cuenta lo que pasará si lo pulsas, no lo que ya pasó.
  button.textContent = isDark ? "🌙 Modo oscuro" : "☀️ Modo claro";
}

// Cada vez que alguien pulse el botón, llama a la función de arriba.
button.addEventListener("click", toggleTheme);

// Al abrir: si la última vez eligió oscuro, lo dejamos oscuro.
if (localStorage.getItem("theme") === "white") {
  toggleTheme();
}