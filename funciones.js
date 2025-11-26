//close the menu sistem when clicking a link
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {

    const checkbox = document.querySelector("#menu-checkbox");

    checkbox.checked = false;
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });
});

// sistem tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach(panel => panel.hidden = true);
    const target = document.getElementById(tab.getAttribute("aria-controls"));
    target.hidden = false;
  });
});

//language button
function setLanguage(lang) {
  alert("Idioma cambiado a: " + lang);
}
