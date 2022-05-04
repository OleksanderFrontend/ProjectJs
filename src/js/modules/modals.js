function closeModal(selector) {
  const modal = document.querySelector(selector);
   modal.style.display = 'none';
   document.body.style.overflow = '';
   document.body.style.marginRight = '0px';
}
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      calcModal = calcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        document.body.style.marginRight = `${calcModal}px`;
      })
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });

      closeModal(modalSelector);
    })

    modal.addEventListener('click', (e) => {
      if (e.target == modal && closeClickOverlay) {
       
        windows.forEach(item => {
          item.style.display = 'none';
        });
      
        modal.style.display = 'none';
        document.body.style.overflow = '';

        document.body.style.marginRight = '0px';
      }
    });
  }

  function calcScroll() {
    let element = document.createElement('div');

   

    document.body.appendChild(element);

    let scrollWidth = element.offsetWidth - element.clientWidth;
    element.remove();

    return scrollWidth;
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  // showModalByTime('.popup', 6000);

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

}

export default modals;
export {closeModal};