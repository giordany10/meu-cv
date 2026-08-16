document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  const backToTopButton = document.querySelector('.back-to-top');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (backToTopButton) {
    const toggleBackToTopButton = () => {
      if (window.scrollY > 280) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    };

    toggleBackToTopButton();
    window.addEventListener('scroll', toggleBackToTopButton);

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
