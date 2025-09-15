/**
 * Alter the top menu bar and logo on scroll.
 */
export default function scroll() {

  const topBar = document.getElementById('top-bar');
  const container = document.querySelector('#top-bar .container');
  const logoText = document.querySelector('#main-logo svg #logo-text');

  window.addEventListener('scroll', () => {

    if (topBar) {
      let topBarThreshold = document.documentElement.scrollTop > 500 ? true : false;

      if (topBarThreshold) {
        topBar.classList.remove('h-28');
        topBar.classList.add('h-16');
        container.classList.remove('py-4');
        container.classList.add('py-2');
        logoText.classList.remove('opacity-100');
        logoText.classList.add('opacity-0');
      } else {
        topBar.classList.remove('h-16');
        topBar.classList.add('h-28');
        container.classList.remove('py-2');
        container.classList.add('py-4');
        logoText.classList.remove('opacity-0');
        logoText.classList.add('opacity-100');
      }
    }
  });
}