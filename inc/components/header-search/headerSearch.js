/**
 * Show, focus and dismiss the header search input.
 */
export default function headerSearch() {
  // Only run if the relevant search input is found.
  if (document.getElementById('header-search')) {

    // Get the necessary elements.
    const searchDisplay = document.getElementById('header-search-display');
    const searchDismiss = document.getElementById('header-search-dismiss');
    const searchDismissIcon = document.getElementById('search-dismiss-icon');
    const searchElement = document.getElementById('header-search');
    const searchInput = document.getElementById('header-search-input');
    const searchTrigger = document.getElementById('header-search-trigger');
    const headerActions = document.getElementById('header-actions');

    // Disable tabbing until visible, to prevent layout shift.
    searchInput.tabIndex = '-1';
    searchDismiss.tabIndex = '-1';
    searchTrigger.tabIndex = '-1';

    // Run the rotate transform while invisible to avoid sluggishness on first trigger.
    searchDismissIcon.style.transform = 'rotate(360deg)';

    // Show and focus the header search input.
    function handleSearchDisplay() {
      headerActions.classList.add('opacity-0');
      searchElement.classList.remove('translate-x-full');
      searchElement.classList.remove('opacity-0');
      searchDismissIcon.style.transform = 'rotate(-360deg)';

      // Allow relevant elements to receive focus.
      searchInput.removeAttribute('tabindex');
      searchDismiss.removeAttribute('tabindex');
      searchTrigger.removeAttribute('tabindex');

      // Set the focus to the search input.
      searchInput.focus({ preventScroll: true });
    }

    // Dismiss the search element.
    function handleSearchDismiss() {
      searchDismissIcon.style.transform = 'rotate(360deg)';
      setTimeout(()=> {
        headerActions.classList.remove('opacity-0');
        searchElement.classList.add('translate-x-full');
        searchElement.classList.add('opacity-0');
        searchInput.value = '';

        // Prevent focus when dismissed.
        searchInput.tabIndex = '-1';
        searchDismiss.tabIndex = '-1';
        searchTrigger.tabIndex = '-1';
      }, 200);
    }

    // Attach the event handlers to both click and keyboard events.
    searchDisplay.addEventListener('click', handleSearchDisplay);
    searchDismiss.addEventListener('click', handleSearchDismiss);
    searchDisplay.addEventListener('keydown', (event) => { if (event.key === 'Enter') handleSearchDisplay() });
    searchDismiss.addEventListener('keydown', (event) => { if (event.key === 'Enter') handleSearchDismiss() });
  }
}