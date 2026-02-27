/**
 * Uses the Intersection Oberserver API to alter the header.
 */
export default function header() {
  const intersectionTarget = document.getElementById('intersection-target');
  const header = document.getElementById('main-header');

  // Exit if the default header isn't found.
  if (!header) return;

  // Get the inner elements.
  const headerLogo = document.getElementById('header-logo');
  const headerLogoText = document.querySelector('#header-logo .logo-text');
  const searchDisplay = document.getElementById('header-search-display');
  const menuDisplay = document.getElementById('header-menu-display');
  const savedCourses = document.getElementById('saved-courses');
  const headerActionButtons = [searchDisplay, menuDisplay, savedCourses];

  // Use an intersection observer to alter the header.
  const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (!element.isIntersecting) {
        header.style.height = '64px';
        headerLogo.style.height = '48px';
        headerLogoText.style.opacity = '0';
        headerActionButtons.forEach(button => { button.style.paddingBlock = '8px' });
      } else {
        header.style.removeProperty('height');
        headerLogo.style.removeProperty('height');
        headerLogoText.style.removeProperty('opacity');
        headerActionButtons.forEach(button => { button.style.removeProperty('padding-block')});
      }
    });
  });

  observer.observe(intersectionTarget);

}
  // let previousScroll;
  // let mainHeader = document.getElementById('main-header');
  // let headerLogo = document.querySelector('header [data-logo]')
  // let headerLogoText = document.querySelector('header [data-logo-text]');
  // let hasFsBanner = document.querySelector('[data-is-fullscreen]');
  // if (mainHeader && hasFsBanner) {
  //   mainHeader.style.backgroundColor = 'transparent';
  //   mainHeader.classList.remove('shadow-lg');
  // }
  // window.addEventListener("scroll", () => {

  //   if (mainHeader) {

  //     let currentScroll = window.pageYOffset;
  //     let scrollThresholdReached = currentScroll > 200;
      
      // let isScrollingDown = currentScroll - previousScroll > 0;
      // if (isScrollingDown  && scrollThresholdReached) {
      //   mainHeader.style.transform = 'translateY(-100%)';
      // } else {
      //   mainHeader.style.transform = 'translateY(0)';
      // }

      // if (scrollThresholdReached) {
      //   mainHeader.style.backgroundColor = '';
      //   mainHeader.classList.add('shadow-lg');
      //   headerLogo.style.height = '48px';
      //   headerLogoText.style.opacity = '0';
      // } else {
      //   headerLogoText.style.opacity = '1'
      //   headerLogo.style.height = '';
      //   if (hasFsBanner) {
      //     mainHeader.style.backgroundColor = 'transparent';
      //     // mainHeader.classList.remove('shadow-lg');
      //   }
      // }

      // Update the scroll position.
      // previousScroll = currentScroll;
    // }
  // });
// }