import '../css/global.css';
import '../scss/global.scss';

document.addEventListener('DOMContentLoaded', () => {
  const modalTrigger = document.querySelectorAll('.modal-trigger');
  const close = document.getElementById('close');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const anchor = document.querySelectorAll('a');

  anchor.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      console.log('this.href', this.href);
    });
  });

  modalTrigger.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const imageUrl = this.getAttribute('modal-src');
      modalImage.src = imageUrl;
      modal.style.display = 'block';
    });
  });

  close.addEventListener('click', closeModal)

  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  
});

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}