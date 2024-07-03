let ul = document.querySelector(".main");
let bars = document.querySelector(".lins");
let li = document.querySelector(".second");
let subenu = document.querySelector(".submanu");

let list = Array.from(document.querySelectorAll(".item-list .item"));
console.log(list)

bars.onclick = () => {
  ul.classList.toggle("open");
};

li.onclick = () => {
  subenu.classList.toggle("open");
};

window.onscroll = () => {
  header();
  let two = document.querySelector(".second");
  if (window.scrollY >= two.scrollHeight) {

    document.querySelector(".img1").style.right = "0";
    document.querySelector(".img1").style.opacity = "1";
  }
  let container1 = document.querySelector(".first .one");
  let img1 = document.querySelector(".first .container img");
  if (window.scrollY >= container1.scrollHeight) {
    console.log(container1.scrollHeight);
    img1.style.left = "0";
    img1.style.opacity = "1";
  }
};

function header() {
  if (window.scrollY >= 200) {
    document.querySelector("header").classList.add("trans-header");
    document.querySelector("h1 a").style.color = "black";
  } else if (window.scrollY <= 200) {
    document.querySelector("h1 a").style.color = "white";
    document.querySelector("header").classList.remove("trans-header");
  }
  headersElements();
}

function headersElements() {
  // loop on bars
  for (let i = 0; i < document.querySelectorAll(".span").length; i++) {
    if (window.scrollY >= 200) {
      document.querySelectorAll(".span")[i].style.backgroundColor = "black";
    } else if (window.scrollY <= 200) {
      document.querySelectorAll(".span")[i].style.backgroundColor = "white";
    }
  }

  // loop on li
  for (let i = 0; i < document.getElementsByClassName("link").length; i++) {
    if (
      document.querySelector("header").offsetWidth <= 990 ||
      window.scrollY > 200
    ) {
      document.getElementsByClassName("link")[i].style.color = "black";
    } else if (
      document.querySelector("header").offsetWidth > 900 &&
      window.scrollY < 200
    ) {
      document.getElementsByClassName("link")[i].style.color = "white";
    }
  }
}




document.querySelector(".prev-btn").onclick = () => {
  list.style.right = "25px";
}

