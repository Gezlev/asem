const Select = (() => {

    const closeAll = slct => {
        document.querySelectorAll('.select').forEach(el => {
            if (slct && slct === el) {
                slct.classList.toggle('expanded');
            } else {
                el.classList.remove('expanded');
            }
        });
    };

    const chooseOpt = opt => {
        if (!opt) return;

        let slct = opt.closest('.select');
        let slctHeader = slct.querySelector('.select__header');
        let slctInp = slct.querySelector('input');
        let current = slct.querySelector('.selected');

        current && current.classList.remove('selected');
        opt.classList.add('selected');
        slctHeader.innerHTML = opt.innerHTML;
        slctInp.value = opt.dataset.value;
        slctInp.dispatchEvent(new Event('change', {bubbles: true}));
    }

    window.addEventListener('click', evnt => {
        let target = evnt.target;
        let slctHeader = target.closest('.select__header');
        let slctOpt = target.closest('.select__opt');

        if (slctHeader) {
            closeAll(slctHeader.parentNode);
        } else if (slctOpt) {
            chooseOpt(slctOpt);
            closeAll();
        } else {
            closeAll();
        }
    }, {passive: true});

    return {
        init: el => {
            let slct  = typeof el === 'string' || el instanceof String ? document.querySelector(el) : el;
            let selected = slct.querySelector('.selected') || slct.querySelector('.select__opt');
            chooseOpt(selected);
            slct.style.width = `${ 16 + slct.querySelector('.select__opt').clientWidth }px`;
        }
    }
})();

export default Select;
