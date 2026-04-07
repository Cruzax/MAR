// Navbar transparente → fond blanc au scroll
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function update() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
