let bodyelement = document.querySelector("body");
// console.log(bodyelement);
bodyelement.addEventListener("mousemove", function (event) {
  //   console.log("helli");
  let xpost = event.offsetX;
  let ypost = event.offsetY;
  let spanele = document.createElement("span");
  spanele.style.left = xpost + "px";
  spanele.style.top = ypost + "px";
  let ran = Math.floor(Math.random() * 100 + 1);
  spanele.style.width = ran + "px";
  spanele.style.height = ran + "px";
  bodyelement.appendChild(spanele);
  setTimeout(() => {
    spanele.remove();
  }, 3000);
});
console.log(bodyelement);
