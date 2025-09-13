document.getElementById('year').textContent = new Date().getFullYear();

let lastScrollTop = 0;
const menu = document.getElementById('menu'); // Asegúrate de que tu menú tenga id="menu"

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollThreshold = 150; // Cambia este valor según lo que necesites

  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    // Scroll hacia abajo y superó el umbral
    menu.style.top = '-100px';
  } else if (scrollTop < lastScrollTop) {
    // Scroll hacia arriba
    menu.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
}, false);


window.addEventListener('scroll', function() {
    var header = document.querySelector('.logo');
    header.classList.toggle('sticky', window.scrollY > 0);
});
