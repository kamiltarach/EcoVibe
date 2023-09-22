// Funkcja do sprawdzania, czy tekst zawija się na sekcję "About"
function checkTextWrap() {
  const hero = document.querySelector('#hero');
  const about = document.querySelector('#about');
  const parallax = document.querySelector('#hero');
  const textToHide = document.querySelector('.hero-text'); // Załóżmy, że element z tekstem ma klasę 'hero-text'

  if (!hero || !about || !textToHide) {
    // Upewnij się, że wszystkie elementy zostały znalezione przed wykonaniem dalszych operacji
    return;
  }

  const heroBottom = hero.getBoundingClientRect().bottom;
  const aboutTop = about.getBoundingClientRect().top;

  if (heroBottom > aboutTop) {
    console.log("Tekst zawija się na sekcję 'About'.");
    // Ukrywamy element z tekstem
    textToHide.style.display = 'none';
  }
}



// Efekt paralaksy w hero sekcji
function parallaxEffect() {
  const parallax = document.querySelector('#hero');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
}

// Wywołujemy funkcje sprawdzającą przy załadowaniu strony i przy zmianie rozmiaru okna.
window.addEventListener('load', checkTextWrap);
window.addEventListener('resize', checkTextWrap);

// Dodajemy nasłuchiwanie na scroll, aby aktywować efekt paralaksy
window.addEventListener('scroll', parallaxEffect);

// Animacja nawigacji po kliknięciu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Wyłączamy efekt paralaksy podczas animacji nawigacji
    window.removeEventListener('scroll', parallaxEffect);

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Uwzględnienie wysokości nagłówka
      behavior: 'smooth'
    });

    // Po zakończeniu animacji, przywracamy efekt paralaksy
    setTimeout(function () {
      window.addEventListener('scroll', parallaxEffect);
    }, 1000); // Dostosuj czas do długości animacji
  });
});
