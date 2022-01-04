const SchemeEdit = () => {

    let container = document.querySelector('.scheme-edit');
    if (!container) return;

    container.querySelectorAll('.scheme__change').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.remove('readonly');
        });
    });

    container.querySelectorAll('.scheme__cancel').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.add('readonly');
        });
    });

    container.querySelectorAll('.scheme__switcher').forEach(switcher => {
        let inp = switcher.querySelector('input[type=checkbox]');

        inp.checked && switcher.classList.add('checked');

        inp.addEventListener('change', evt => {
            if (inp.checked) {
                switcher.classList.add('checked');
            } else {
                switcher.classList.remove('checked');
            }
        }, {passive: true});
    });
};

export default SchemeEdit;
