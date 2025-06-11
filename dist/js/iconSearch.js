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

  // Prevent the search firing too soon.
  let searchDelay = 500;

  // Set the timeout.
  setTimeout(() => {

    // Get the current search query.
    let searchQuery = event.target.value.toLowerCase();

    // Loop through all the icon containers.
    for (let i = 0; i < icons.length; i += 1) {

      // Get the search tags data attribute of the svg icon.
      let searchTags = icons[i].getElementsByTagName('svg')[0].dataset.tags;

      if (searchTags.toLowerCase().includes(searchQuery)) {
        icons[i].classList.remove('hidden');
      } else {
        icons[i].classList.add('hidden');
      }
    }
  }, searchDelay);
}
