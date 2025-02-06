let container = document.getElementById("color");

function getRandomHexColor() {
  color = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${color.padStart(6, "0")}`;
}

container.addEventListener("click", () => {
  color = getRandomHexColor();
  container.style.backgroundColor = color;
});
