// const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector("#menu");
// const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const line = document.querySelector(".line");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  if (menu.style.display === "none") {
    menu.style.display = "flex";
    line.style.stroke = "#f8c049";
    line1.style.stroke = "#f8c049";
    line2.style.stroke = "#f8c049";
    line3.style.stroke = "#f8c049";
  } else {
    menu.style.display = "none";
    line.style.stroke = "#00923f";
    line1.style.stroke = "#00923f";
    line2.style.stroke = "#00923f";
    line3.style.stroke = "#00923f";
  }
}

// if (menu.classList.contains("navMenu")) {
//   menu.classList.remove("navMenu");
// } else {
//   menu.classList.add("navMenu");
// }

hamburger.addEventListener("click", toggleMenu);

// DASHBOARD JS
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
