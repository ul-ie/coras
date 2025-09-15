import menuToggle from './menuToggle.js';
import modeToggle from './modeToggle.js';
import pageNav from './pageNav.js';
import scroll from './scroll.js';
import intersection from './intersection.js';
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/core.min.js  ';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/xml.min.js';
import twig from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/twig.min.js';
import yaml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/yaml.min.js';

/**
 * Execute only on page load.
 */
document.addEventListener('DOMContentLoaded', () => {

  // Languages to highlight.
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('twig', twig);
  hljs.registerLanguage('yaml', yaml);

  // Get highlight.js started.
  hljs.highlightAll();

  // Enable the menu toggle animations.
  menuToggle();

  // Enable the dark/light mode toggle functionality.
  modeToggle();

  // Create the page navigation links.
  pageNav();

  // Enable scroll-related behaviour.
  scroll();

  // Start the Observer API for any elements in viewport.
  intersection();

}, false);
