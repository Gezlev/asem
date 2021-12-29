const ColorPicker = (() => {

    const setColor = (el, inp) => el.style.color = inp.value;

    const initPicker = el => {
        let inp = el.querySelector('input');
        if (inp.value && inp.value !== '') setColor(el, inp);
        inp.addEventListener('change', () => {
            setColor(el, inp);
        }, false);
    };

    return {
        init: el => initPicker(el)
    }
})();

export default ColorPicker;
