import pageNav from './pageNav.js';
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/core.min.js  ';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/xml.min.js';
import twig from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/twig.min.js';
import yaml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/yaml.min.js';

/**
 * Execute only on page load.
 */
document.addEventListener('DOMContentLoaded', function () {

  // Languages to highlight.
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('twig', twig);
  hljs.registerLanguage('yaml', yaml);

  // Get highlight.js started.
  hljs.highlightAll();

  // Create the dynamic sidebar links.
  pageNav();

  // Dark mode toggle functionality.
  const darkSwitch = document.getElementById('dark-switch');
  if (localStorage.getItem('dark-mode') === 'true') darkSwitch.checked = true;

  darkSwitch.addEventListener('change', () => {
    if (darkSwitch.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', false);
    }
  });
}, false);
