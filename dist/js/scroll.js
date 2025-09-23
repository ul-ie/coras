/**
 * This function handles all scroll-related behaviours.
 */
export default function scroll() {
  let previousScroll;
  let mainHeader = document.getElementById('main-header');
  let headerLogo = document.querySelector('header [data-logo]')
  let headerLogoText = document.querySelector('header [data-logo-text]');
  window.addEventListener("scroll", () => {

    if (mainHeader) {
      let currentScroll = window.pageYOffset;
      let isScrollingDown = currentScroll - previousScroll > 0;
      let scrollThresholdReached = currentScroll > 200;

      if (isScrollingDown) {
        mainHeader.style.transform = 'translateY(-110%)';
      } else {
        mainHeader.style.transform = 'translateY(0)';
      }

      if (scrollThresholdReached) {
        headerLogo.style.height = '48px';
        headerLogoText.style.opacity = '0'
      } else {
        headerLogoText.style.opacity = '1'
        headerLogo.style.height = '';
      }

      // Update the scroll position.
      previousScroll = currentScroll;
    }
  });
}