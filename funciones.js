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

//typing efect
document.addEventListener("DOMContentLoaded", () => {
  const typingText = "AWS Cloud · Frontend Developer · UI/UX Designer";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(type, 70);
    }
  }

  type();
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
async function setLanguage(lang) {
  try {
    const response = await fetch(`Languages/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[key]) {
        if (element.innerHTML.includes('<')) {
           element.innerHTML = translations[key];
        } else {
           element.textContent = translations[key];
        }
      }
    });

    // Update active state of buttons if needed or persist to localStorage
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang; // Accessibility: Update html lang attribute

  } catch (error) {
    console.error("Error loading language:", error);
  }
}

// Load saved language on start
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'es';
  setLanguage(savedLang);
});
// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));
