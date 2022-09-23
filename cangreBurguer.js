const krabbyPatty = document.querySelector("#cangreBurguerNav");
const menu = document.querySelector("#navMenu");

krabbyPatty.addEventListener("click", () => {
  krabbyPatty.classList.toggle("active");
  menu.classList.toggle("hidden");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    krabbyPatty.classList.remove("active");
    menu.classList.remove("hidden");
  })
);
