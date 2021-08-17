export default function Modal() {
  const modal = document.querySelector('.modal');
  const btn = document.querySelector('.video-btn');

  const closeModal = ({ target }) => {
    target.classList.remove('ative');
  };

  const addModal = () => {
    modal.classList.add('ative');
    if (modal.classList.contains('ative')) {
      modal.addEventListener('click', closeModal);
    }
  };

  btn.addEventListener('click', addModal);

  return { addModal, closeModal };
}
