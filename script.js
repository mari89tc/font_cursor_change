const root = document.documentElement;

function updateCursor(e) {
  x = e.clientX / window.innerWidth;
  y = e.clientY / window.innerHeight;
  document.documentElement.style.setProperty("--x", x.toFixed(5));
  document.documentElement.style.setProperty("--y", y.toFixed(5));
}
document.body.addEventListener("pointermove", updateCursor);
