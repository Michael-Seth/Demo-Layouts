const hamburger = document.querySelector("#menu");

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const line = document.querySelector(".line");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
    hamburger.classList.add("opened");
    line.style.stroke = "#f8c049";
    line1.style.stroke = "#f8c049";
    line2.style.stroke = "#f8c049";
    line3.style.stroke = "#f8c049";
  } else {
    menu.style.display = "none";
    hamburger.classList.remove("opened");
    line.style.stroke = "#00923f";
    line1.style.stroke = "#00923f";
    line2.style.stroke = "#00923f";
    line3.style.stroke = "#00923f";
  }
}

hamburger.addEventListener("click", toggleMenu);
