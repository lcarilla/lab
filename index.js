let i = 0;
const txt = 'lsglab server overview';
const speed = 70;
const h1 = document.getElementById("bruh");
function typeWriter() {
  if (i < txt.length) {
    h1.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();