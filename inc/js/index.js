import globalSearch from './globalSearch.js';
import header from './header.js';
import menuToggle from './menuToggle.js';
import modeToggle from './modeToggle.js';
import pageNav from './pageNav.js';
import intersection from './intersection.js';
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/core.min.js  ';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/xml.min.js';
import twig from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/twig.min.js';
import yaml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/yaml.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/javascript.min.js';

/**
 * Execute only on page load.
 */
document.addEventListener('DOMContentLoaded', () => {

  // Enable header-related behaviour.
  header();

  // Create the page navigation links.
  pageNav();

  // Start the Observer API for any elements in viewport.
  intersection();

  // Enable the menu toggle animations.
  menuToggle();

  // Enable the dark/light mode toggle functionality.
  modeToggle();

  // Enable global search interactivity.
  globalSearch();

  // Languages to highlight.
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('twig', twig);
  hljs.registerLanguage('yaml', yaml);
  hljs.registerLanguage('js', javascript);

  // Get highlight.js started.
  hljs.highlightAll();

}, false);
