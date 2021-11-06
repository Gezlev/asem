const SidebarMenu = () => {
    let body = document.body;

    document.querySelectorAll('.has-child .menu__link').forEach( item => {
        item.addEventListener('click', evt => {
            evt.preventDefault();
            item.parentNode.classList.toggle('expanded');
        })
    }, {passive: true});

    let sidebarExpand = document.querySelector('.sidebar--expand');
    sidebarExpand && sidebarExpand.addEventListener('click', () => document.querySelector('.site--wrapper').classList.toggle('collapsed'));

    let theme = localStorage.getItem('theme');
    let themeSwitcher = document.querySelector('#themeSwitcher');
    if (themeSwitcher && theme && theme === 'dark') {
        body.classList.add('darktheme');
        themeSwitcher.checked = true;
    }
    themeSwitcher && themeSwitcher.addEventListener('change', () => {
        if (themeSwitcher.checked) {
            body.classList.add('darktheme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('darktheme');
            localStorage.setItem('theme', 'light');
        }
    }, {passive: true});
};

export default SidebarMenu;
