/**
 * Create the dynamic sidebar containing internal page navigation links.
 */
export default function pageNav() {

  // Check if the page contains the required navigation element.
  if (document.getElementById('page-nav')) {

    // Get the main page heading and page nav area.
    const pageHeading = document.querySelector('h1');
    const pageNav = document.getElementById('page-nav');

    // Create the required elements.
    const list = document.createElement('ul');
    const listHeading = document.createElement('h4');
    const listHeadingLink = document.createElement('a');

    // Create a link to the main page heading.
    pageHeading.id = pageHeading.innerText.toLowerCase();
    listHeadingLink.href = `#${pageHeading.id}`;

    // Add styling and text.
    pageNav.classList.add('text-granite-d3', 'dark:text-granite-l2');
    list.classList.add('ml-1', 'my-0', 'px-0', 'list-none', 'leading-none');
    listHeading.classList.add('text-base', 'mb-1');
    listHeadingLink.classList.add('font-bold', 'no-underline', 'text-green', 'dark:text-modern-l1', 'visited:text-green', 'dark:visited:text-modern-l1');
    listHeadingLink.innerText = 'On this page';
    
    // Append the elements.
    listHeading.appendChild(listHeadingLink);
    pageNav.appendChild(listHeading);
    pageNav.appendChild(list);
    
    // Get all the h2 and h3 headings.
    const subheadings = document.querySelectorAll('h2, h3');

    // For each heading...
    subheadings.forEach((heading) => {

      // Run for all the h2 and h3 headings that haven't opted out.
      if (heading.dataset.pageNav != 'false') {

        // Create a list item and link.
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        // Apply an id to the heading if one doesn't already exist.
        if (!heading.hasAttribute('id')) {
          heading.id = heading.innerText.replace(/\s+/g, '-').toLowerCase();
        }

        // Create the internal link to the heading and style it.
        link.href = `#${heading.id}`;
        link.classList.add('no-underline', 'font-normal', 'text-inherit', 'visited:text-inherit')

        // Get the heading text and style it appropriately.
        link.innerText = heading.innerText;
        listItem.classList.add('my-0', 'pb-1', 'text-sm', 'border-l', 'border-granite-l3', 'dark:border-granite-d1');
        if (heading.tagName.toLowerCase() === 'h2') {
          listItem.classList.add('pl-3');
        } else {
          listItem.classList.add('pl-5', 'text-xs', 'text-granite-d1', 'dark:text-granite-l1');
        }

        // Append the elements.
        listItem.appendChild(link);
        list.appendChild(listItem);
      }
    });
  }
}

