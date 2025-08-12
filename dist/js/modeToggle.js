/*
 * Dark/light mode toggle functionality.
*/

export default function modeToggle() {
  const modeToggles = document.getElementsByName('mode-toggle');
  console.log('Mode toggles found: ' + modeToggles.length)

  modeToggles.forEach( toggle => {
    if (localStorage.getItem('dark-mode') === 'true') toggle.checked = true;

    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      };
    });

  });
}