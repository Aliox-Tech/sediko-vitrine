'use strict';
const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('.copy-status');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hello@sediko.app');
      copyStatus.textContent = 'Adresse copiée.';
    } catch {
      copyStatus.textContent = 'Vous pouvez sélectionner et copier l’adresse ci-dessus.';
    }
  });
}
