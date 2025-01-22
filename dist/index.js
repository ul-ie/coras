import pageNav from './js/pageNav.js';
import Alpine from 'alpinejs';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import twig from 'highlight.js/lib/languages/twig';
import yaml from 'highlight.js/lib/languages/yaml';

window.Alpine = Alpine;
Alpine.start();

// Languages to highlight.
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('twig', twig);
hljs.registerLanguage('yaml', yaml);

document.addEventListener('DOMContentLoaded', function () {

  // Get highlight.js started.
  hljs.highlightAll();
  
  // Create the dynamic sidebar links.
  pageNav();

  // Light switcher
  const lightSwitches = document.querySelectorAll('.light-switch');
  if (lightSwitches.length > 0) {
    lightSwitches.forEach((lightSwitch, i) => {
      if (localStorage.getItem('dark-mode') === 'true') {
        lightSwitch.checked = true;
      }
      lightSwitch.addEventListener('change', () => {
        const { checked } = lightSwitch;
        lightSwitches.forEach((el, n) => {
          if (n !== i) {
            el.checked = checked;
          }
        });
        if (lightSwitch.checked) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('dark-mode', true);
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('dark-mode', false);
        }
      });
    });
  }
}, false);
