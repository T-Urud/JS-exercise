const mousemove = document.querySelector(".mousemove2");
const bigCircle = document.querySelector(".bigCircle");
const littleMouse = document.querySelector(".mousemove1");
console.log(littleMouse);

window.addEventListener("mousemove", (e) => {
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  bigCircle.style.top = e.pageY + "px";
  bigCircle.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  littleMouse.style.top = e.pageY + "px";
  littleMouse.style.left = e.pageX + "px";
});
