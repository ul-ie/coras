/**
 * Show, focus and dismiss the global search input.
 */
export default function globalSearch() {
  // Only run if the relevant search input is found.
  if (document.getElementById('global-search')) {

    // Get the necessary elements.
    const searchTrigger = document.getElementById('global-search-trigger');
    const searchDismiss = document.getElementById('global-search-dismiss');
    const searchDismissIcon = document.querySelector('[title="xmark"]');
    const searchElement = document.getElementById('global-search');
    const searchInput = document.getElementById('global-search-input');
    const searchGo = document.getElementById('global-search-go');

    // Run the rotate transform while invisible to avoid sluggishness on first trigger.
    searchDismissIcon.style.transform = 'rotate(360deg)';

    // Show and focus the global search input.
    searchTrigger.addEventListener('click', ()=> {
      searchElement.classList.remove('translate-x-full');
      searchElement.classList.remove('opacity-0');
      searchDismissIcon.style.transform = 'rotate(-360deg)';

      // Allow relevant elements to receive focus.
      searchInput.removeAttribute('tabindex');
      searchDismiss.removeAttribute('tabindex');
      searchGo.removeAttribute('tabindex');

      // Set the focus to the search input.
      searchInput.focus({ preventScroll: true });
    });

    // Dismiss the search element.
    searchDismiss.addEventListener('pointerdown', ()=> {
      searchDismissIcon.style.transform = 'rotate(360deg)';
      setTimeout(()=> {
        searchElement.classList.add('translate-x-full');
        searchElement.classList.add('opacity-0');
        searchInput.value = '';

        // Prevent focus when dismissed.
        searchInput.tabIndex = '-1';
        searchDismiss.tabIndex = '-1';
        searchGo.tabIndex = '-1';
      }, 200);
    });
  }
}