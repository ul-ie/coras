// Global js.
import menuToggle from './menuToggle.js';
import pageNav from './page-nav.js';

// Components.
import globalSearch from '../components/global-search/globalSearch.js';
import header from '../components/header/header.js';
import modeToggle from '../components/mode-toggle/mode-toggle.js';
import swatch from '../components/swatch/swatch.js';

// External dependencies.
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import twig from 'highlight.js/lib/languages/twig';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

// Languages to highlight.
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('twig', twig);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

/**
 * Execute only on page load.
 */
document.addEventListener('DOMContentLoaded', () => {

  // Enable header-related behaviour.
  header();

  // Enable the menu toggle animations.
  menuToggle();

  // Enable the dark/light mode toggle functionality.
  modeToggle();

  // Create the page navigation links.
  pageNav();

  // Enable global search interactivity.
  globalSearch();

  // Add the colour swatch event listeners.
  swatch();

  // Get highlight.js started.
  hljs.highlightAll();

}, false);
