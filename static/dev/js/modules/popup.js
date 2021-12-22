const Popup = (() => {
    let wrapper = document.querySelector('.org-admin--popup');

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

        el.addEventListener('click', () =>  showPopup(popup), {passive: true});

        let closeBtn = popup.querySelector('.org-admin--popup__close');
        closeBtn && closeBtn.addEventListener('click', () => hidePopup(popup), {passive: true});
    };

    return {
        init: el => initPopup(el)
    }
})();

export default Popup;
