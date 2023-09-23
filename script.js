// Zmienne do przechowywania elementów sekcji
const aboutSection = document.querySelector('#about');
const tipsSection = document.querySelector('#tips');
const projectsSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');

// Funkcja do przesuwania zawartości sekcji w bok
function moveSectionContent(section, scrollPosition) {
  if (!section) {
    return;
  }

  const sectionTop = section.getBoundingClientRect().top;
  const sectionHeight = section.clientHeight;
  const scrollOffset = scrollPosition - sectionTop;

  // Ustalamy, jak daleko przesunąć zawartość sekcji w bok
  const translateX = scrollOffset * 0.5;

  // Ograniczamy przesunięcie, aby tekst nie znikał za sekcją
  const maxTranslateX = section.clientWidth;
  const translatedX = Math.min(translateX, maxTranslateX);

  section.style.transform = `translateX(${translatedX}px)`;
}

// Funkcja do przesuwania zawartości wszystkich sekcji w bok
function moveAllSectionContent(scrollPosition) {
  moveSectionContent(aboutSection, scrollPosition);
  moveSectionContent(tipsSection, scrollPosition);
  moveSectionContent(projectsSection, scrollPosition);
  moveSectionContent(contactSection, scrollPosition);
}

// Wywołujemy funkcje przy załadowaniu strony i przy zmianie rozmiaru okna.
window.addEventListener('load', () => {
  moveAllSectionContent(window.pageYOffset);
});

window.addEventListener('resize', () => {
  moveAllSectionContent(window.pageYOffset);
});

// Dodajemy nasłuchiwanie na scroll, aby aktywować efekt przesuwania zawartości sekcji
window.addEventListener('scroll', () => {
  moveAllSectionContent(window.pageYOffset);
});
