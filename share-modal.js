(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('shareModal');
    const openBtn = document.getElementById('openShareModal');
    const closeBtn = document.getElementById('closeShareModal');
    const copyBtn = document.getElementById('copyShareLink');
    const linkInput = document.getElementById('shareLink');

    if (!modal || !openBtn || !closeBtn || !copyBtn || !linkInput) {
      return;
    }

    const openModal = () => {
      linkInput.value = window.location.href;
      modal.classList.add('open');
      linkInput.focus();
      linkInput.select();
    };

    const closeModal = () => {
      modal.classList.remove('open');
    };

    const copyLink = () => {
      linkInput.select();
      try {
        document.execCommand('copy');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy link'; }, 1000);
      } catch (err) {
        console.warn('Copy failed', err);
      }
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    copyBtn.addEventListener('click', copyLink);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
})();
