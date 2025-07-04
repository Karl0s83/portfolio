/* Esta función está dirigida al texto debajo de la foto*/

document.addEventListener("DOMContentLoaded", function () {
  const text = "Frontend Developer | UI Designer | Retro Fan";
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
