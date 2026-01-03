// Resume button alert
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", function () {
      alert("Resume downloading...");
    });
  }
});

// Smooth scrolling for navbar links
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});
