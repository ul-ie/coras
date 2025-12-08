/**
 * The icon search feature on the Iconography page.
 */

// Get all the on-page icons (with their containers).
let icons = document.querySelectorAll('#icon-bank .well');

// Get the search input.
let searchInput = document.getElementById('icon-search');

// Attach the search handler.
searchInput.addEventListener('input', handleSearch);

/**
 * Handle the search functionality.
 */ 
function handleSearch(event) {

  // Set up an icon count.
  let iconsFound = 0;

  // Prevent the search firing too soon.
  let searchDelay = 500;

  // Set the timeout.
  setTimeout(() => {

    // Get the current search query.
    let searchQuery = event.target.value.toLowerCase();

    // Loop through all the icon containers.
    for (let i = 0; i < icons.length; i += 1) {

      // If the icon container has terms, search through them.
      if (icons[i].getElementsByClassName('terms')[0]) {
        let searchTerms = icons[i].getElementsByClassName('terms')[0].dataset.terms;

        // If there's a match, update the count and remove the hidden class.
        if (searchTerms.toLowerCase().includes(searchQuery)) {
          icons[i].classList.remove('hidden');
          iconsFound += 1;
        } else {
          icons[i].classList.add('hidden');
        }
      }
    }

    // Update the count.
    document.getElementById('total-icons').innerText = iconsFound;

  }, searchDelay);
}
