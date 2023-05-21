const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {
      
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal3',
  btnOpen: '.section__button3',
  btnClose: '.modal__close',
});

modalController({
  modal: '.modal2',
  btnOpen: '.section__button2',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal4',
  btnOpen: '.section__button4',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal5',
  btnOpen: '.section__button5',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal7',
  btnOpen: '.section__button7',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal8',
  btnOpen: '.section__button8',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal9',
  btnOpen: '.section__button9',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal10',
  btnOpen: '.section__button10',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal11',
  btnOpen: '.section__button11',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal12',
  btnOpen: '.section__button12',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal13',
  btnOpen: '.section__button13',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal14',
  btnOpen: '.section__button14',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal15',
  btnOpen: '.section__button15',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal16',
  btnOpen: '.section__button16',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal17',
  btnOpen: '.section__button17',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal18',
  btnOpen: '.section__button18',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal19',
  btnOpen: '.section__button19',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal20',
  btnOpen: '.section__button20',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal21',
  btnOpen: '.section__button21',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal22',
  btnOpen: '.section__button22',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal23',
  btnOpen: '.section__button23',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal24',
  btnOpen: '.section__button24',
  btnClose: '.modal__close'
});
modalController({
  modal: '.modal25',
  btnOpen: '.section__button25',
  btnClose: '.modal__close'
});