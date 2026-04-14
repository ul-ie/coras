// Global js.
import menuToggle from './menuToggle.js';
import pageNav from './pageNav.js';
import iconSearch from './iconSearch.js';

// Components.
import headerSearch from '../components/header-search/header-search.js';
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
  header();
  headerSearch();
  menuToggle();
  modeToggle();
  pageNav();
  swatch();
  iconSearch();
  hljs.highlightAll();
}, false);
