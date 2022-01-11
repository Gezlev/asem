const ListMenu = (() => {

    const hideActive = menu => {
        document.querySelectorAll('.list--menu.visible').forEach(el => {
            if ( !menu || (menu && menu !== el) ) {
                el.classList.remove('visible');
            }
        });
    };

    const initMenu = item => {
        let btn = item.querySelector('.list--menu__btn');
        btn.addEventListener('click', () => {
            hideActive(item);
            if (item.classList.contains('visible')) {
                item.classList.remove('visible');
            } else {
                item.classList.add('visible');
            }
        }, {passive: true});
    }

    window.addEventListener('click', evt => {
        let target = evt.target;
        hideActive(target.closest('.list--menu'));

    }, {passive: true});

    console.log('List Menu Active!');

    return {
        init: item => initMenu(item)
    }
})();

export default ListMenu;
