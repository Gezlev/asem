const Popup = (() => {
    let wrapper = document.querySelector('.popup');

    const showPopup = popup => {
        wrapper && wrapper.classList.add('visible');
        popup.classList.add('visible');
    };

    const hidePopup = popup => {
        popup.classList.remove('visible');
        wrapper && wrapper.classList.remove('visible');
    };

    const initPopup = el => {
        let popup = document.getElementById(el.dataset.popup);
        if (!popup) return;

        el.addEventListener('click', evt =>  {
            showPopup(popup);
            return false
        }, {passive: true});

        let closeBtn = popup.querySelector('.popup__close');
        closeBtn && closeBtn.addEventListener('click', () => hidePopup(popup), {passive: true});
    };

    return {
        init: el => initPopup(el)
    }
})();

export default Popup;
