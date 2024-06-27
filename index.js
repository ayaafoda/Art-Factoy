let ul = document.querySelector(".main");
let bars = document.querySelector(".lins");
let li = document.querySelector(".second");
let subenu = document.querySelector(".submanu");

bars.onclick = () => {
  ul.classList.toggle("open");
};

li.onclick = () => {
  subenu.classList.toggle("open");
};

// window.onscroll = () => {
//   let img = document.querySelector(".first .container .image img");
//   if (window.scrollY >= img.offsetTop) {
//     img.style.left = "0";
//     img.style.position = "relative";
//     img.style.opacity = "1";
//   } else if (window.scrollY <= img.offsetTop) {
//     // img.style.left = "-105%";
//   }
// };

window.onscroll = () => {
  if (window.scrollY >= 500) {
    document.querySelector("header").style.position = "sticky";
    document.querySelector("header").style.backgroundColor = "#fff";
    document.querySelector("header").style.boxShadow =
      "black 0px -4px 20px 0px";
    document.querySelector("h1 a").style.color = "black";
  } else if (window.scrollY <= 400) {
    document.querySelector("h1 a").style.color = "white";
    document.querySelector("header").style.boxShadow = "none";
    document.querySelector("header").style.backgroundColor =
      "rgba(255 255 255 / 0)";
    document.querySelector("header").style.position = "relative";
  }

  // loop on bars
  for (let i = 0; i < document.querySelectorAll(".span").length; i++) {
    if (window.scrollY >= 500) {
      document.querySelectorAll(".span")[i].style.backgroundColor = "black";
    } else if (window.scrollY <= 300) {
      document.querySelectorAll(".span")[i].style.backgroundColor = "white";
    }
  }

  // loop on li
  for (let i = 0; i < document.getElementsByClassName("link").length; i++) {
    if (
      document.querySelector("header").offsetWidth <= 990 ||
      window.scrollY > 400
    ) {
      document.getElementsByClassName("link")[i].style.color = "black";
    } else if (
      document.querySelector("header").offsetWidth > 900 &&
      window.scrollY < 400
    ) {
      document.getElementsByClassName("link")[i].style.color = "white";
    }
  }

  if (window.scrollY >= document.querySelector(".second ").offsetTop) {
    document.querySelector(".second .container .image img").style.right = "0";
    document.querySelector(".second .container .image img").style.position ="relative";
    document.querySelector(".second .container .image img").style.opacity =
      "1";
  }
  let img1 = document.querySelector(".first .container");
  let img = document.querySelector(".first .container .image img");
  if (window.scrollY >= img1.offsetTop) {
    img.style.left = "0";
    img.style.position = "relative";
    img.style.opacity = "1";
  }
};

// console.log(document.querySelector("header").offsetWidth);
// console.log(window.scrollY);
