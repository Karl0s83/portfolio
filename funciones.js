/* Esta función está dirigida al texto debajo de la foto*/

document.addEventListener("DOMContentLoaded", function () {
  const text = "AWS Cloud | UI/UX Designer ";
  const target = document.getElementById("typing");
  if (!target) return;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});


/* Esta función es para el cambio de idioma */

let currentLang = 'es';

function toggleLanguage() {
  if (currentLang === 'es') {
    currentLang = 'en';
    document.getElementById('lang-toggle').textContent = 'ES';
    // Aquí cambia a inglés
    // loadEnglishTexts();
  } else {
    currentLang = 'es';
    document.getElementById('lang-toggle').textContent = 'EN';
    // Aquí cambia a español
    // loadSpanishTexts();
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('lang-toggle').textContent = lang === 'es' ? 'EN' : 'ES';
  // Aquí cambiarías el contenido según lang
  // if (lang === 'es') { loadSpanishTexts(); }
  // else { loadEnglishTexts(); }
}