let circleInterval;
let mX = 0;
let mY = 0;
let circle;
let main = document.getElementsByTagName("main")[0]
circle = document.createElement("div");
circle.className = "navBtnCircle";
circle.style.width = Math.floor(Math.random() * 30 + 20) + "px";
circle.style.backgroundColor =
  "rgba(" +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  "," +
  Math.random() * 255 +
  ", 0.5)";
main.appendChild(circle);
// setTimeout(() => {
//   circle.style.opacity = 0.5;
// }, 0);
circle.style.height = circle.offsetWidth + "px";
circleInterval = setInterval(() => {
  circle.style.left = mX + "px";
  circle.style.top = mY + "px";
}, 1);

document.body.onmousemove = (e) => {
  e.stopPropagation()
  mX = e.clientX;
    mY = e.clientY;
}

function setCircle() {
  let c = document.createElement("div");
  c.className = "circle";
  c.style.width = Math.floor(Math.random() * 1000 + 50) + "px";
  c.style.backgroundColor =
    "rgba(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ", 1)";
  document.body.appendChild(c);
  setTimeout(() => {
    c.style.opacity = 0.3;
    c.style.transform = "scale(1.1)";
  }, 0);
  c.style.height = c.offsetWidth + "px";
  c.style.left =
    Math.floor(Math.random() * window.innerWidth) - c.offsetWidth / 2 + "px";
  c.style.top =
    Math.floor(Math.random() * window.innerHeight) - c.offsetHeight / 2 + "px";
  setTimeout(() => {
    c.style.opacity = 0;
    setTimeout(() => {
      c.remove();
      setCircle();
    }, 2000);
  }, 4000);
}
setCircle();

let navBtns = document.getElementsByClassName("navBtn");
for (let b of navBtns) {
  // b.onmousemove = (e) => {
  //   mX = e.offsetX;
  //   mY = e.offsetY;
  // };
  b.onmouseleave = () => {
    circle.style.opacity = 0;
    // circle.style.width = Math.floor(Math.random() * 1000 + 50) + "px";
    setTimeout(() => {
    circle.style.backgroundColor = "rgba(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ", 0.5)";
    circle.style.transform= `translate(-50%, -50%) scale(${Math.floor(Math.random()*1.5+1)})`;
      // circle.remove();
    }, 500);
  };
  b.onmouseenter = () => {
    circle.style.opacity = 0.5;
  };
}
