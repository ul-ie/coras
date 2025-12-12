/**
 * The copy-to-clipboard functionality for the colour swatch component.
 */
export default function swatch() {

  // Only run if the relevant elements exist.
  if (document.querySelectorAll('[data-hex]')) {

    // Get all colour swatch components.
    const colourSwatches = document.querySelectorAll('[data-hex]');

    colourSwatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const hexCode = swatch.dataset.hex;
        const hexText = swatch.querySelector('[data-hex-text');

        try {
          // Copy to clipboard.
          navigator.clipboard.writeText(hexCode);

          // Inform the user.
          hexText.innerHTML = 'Copied!';

          // After a delay return the swatch to its initial state.
          setTimeout(() => {
            hexText.innerHTML = hexCode;
          }, 1500);

        } catch (error) {
          console.error(`Failed to copy: ${hexCode}`, error);
        }

      });
    });
  }
}
