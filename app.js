let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav_bar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark")
  navbar.classList.toggle("active");

}


