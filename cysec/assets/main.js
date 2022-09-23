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

// CHART JS
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
