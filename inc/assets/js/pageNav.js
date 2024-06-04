/**
 * Create the dynamic sidebar containing internal page navigation links.
 */
export default function pageNav() {

  // Check if the page contains the required navigation element.
  if (document.getElementById('page-nav')) {
 
    // Create and append the list element and heading.
    const list = document.createElement('ul');
    const listHeading = document.createElement('span');
    listHeading.innerText = 'On this page';
    const pageNav = document.getElementById('page-nav');
    pageNav.appendChild(listHeading);
    pageNav.appendChild(list);
    
    // Get all the h2 and h3 headings.
    const subheadings = document.querySelectorAll('h2, h3');

    // For each heading...
    subheadings.forEach((heading, index) => {

      // Only run if data-page-nav isn't set to false.
      if (heading.dataset.pageNav != 'false') {

        // Create a list item and link.
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        // Apply ids to the headings and link to them.
        heading.id = `${heading.tagName.toLowerCase()}-${index + 1}`;
        link.href = `#${heading.id}`;

        // Get the heading text and style it appropriately.
        link.innerText = heading.innerText;
        if (heading.tagName === 'H3') listItem.classList.add('ml-3');

        // Append the elements.
        listItem.appendChild(link);
        list.appendChild(listItem);
      }
    });
  }
}

