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

  // Check for a fullscreen hero banner. If found, remove the shadow.
  const hasHeroBanner = document.getElementById('hero-banner') ? true : false;
  if (hasHeroBanner) header.classList.remove('shadow-lg');

  // Use an intersection observer to alter the header.
  const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (!element.isIntersecting) {
        header.style.height = '64px';
        header.style.backgroundColor = 'var(--color-heritage)';
        headerLogo.style.height = '48px';
        headerLogoText.style.opacity = '0';
        headerActionButtons.forEach(button => { button.style.paddingBlock = '8px' });
        if (hasHeroBanner) header.classList.add('shadow-lg');
      } else {
        header.style.removeProperty('height');
        header.style.removeProperty('background-color');
        headerLogo.style.removeProperty('height');
        headerLogoText.style.removeProperty('opacity');
        headerActionButtons.forEach(button => { button.style.removeProperty('padding-block')});
        if (hasHeroBanner) header.classList.remove('shadow-lg');
      }
    });
  });

  observer.observe(intersectionTarget);

}
