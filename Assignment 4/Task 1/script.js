const toggleBtn = document.getElementById("toggleBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.checked = true;
}

// Toggle theme
toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});