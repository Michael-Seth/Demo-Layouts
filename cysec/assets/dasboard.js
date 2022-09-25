// DASHBOARD JS
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const menu = document.getElementById("dashboardMenu");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
      menu.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      menu.style.display = "none";
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

//=============================================
//=============================================

const hamburger = document.querySelector("#menu");

function toggleMenu() {
  const menu = document.getElementById("dashboardMenu");
  const line = document.querySelector(".line");

  if (menu.style.display === "none") {
    menu.style.display = "block";
    line.style.stroke = "#0cbc8b";
  } else {
    menu.style.display = "none";
    line.style.stroke = "#00923f";
  }
}

hamburger.addEventListener("click", toggleMenu);
