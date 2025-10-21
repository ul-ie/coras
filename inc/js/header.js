/**
 * This function handles all header-related behaviours.
 */
export default function header() {
  let previousScroll;
  let mainHeader = document.getElementById('main-header');
  let headerLogo = document.querySelector('header [data-logo]')
  let headerLogoText = document.querySelector('header [data-logo-text]');
  let hasFsBanner = document.querySelector('[data-is-fullscreen');
  if (mainHeader && hasFsBanner) {
    mainHeader.style.backgroundColor = 'transparent';
    mainHeader.classList.remove('shadow-lg');
  }
  window.addEventListener("scroll", () => {

    if (mainHeader) {
      let currentScroll = window.pageYOffset;
      let isScrollingDown = currentScroll - previousScroll > 0;
      let scrollThresholdReached = currentScroll > 200;

      if (isScrollingDown) {
        mainHeader.style.transform = 'translateY(-125%)';
      } else {
        mainHeader.style.transform = 'translateY(0)';
      }

      if (scrollThresholdReached) {
        mainHeader.style.backgroundColor = '';
        mainHeader.classList.add('shadow-lg');
        headerLogo.style.height = '48px';
        headerLogoText.style.opacity = '0';
      } else {
        headerLogoText.style.opacity = '1'
        headerLogo.style.height = '';
        if (hasFsBanner) {
          mainHeader.style.backgroundColor = 'transparent';
          mainHeader.classList.remove('shadow-lg');
        }
      }

      // Update the scroll position.
      previousScroll = currentScroll;
    }
  });
}