const SidebarMenu = () => {
    let body = document.body;

    //document.querySelectorAll('.has-child .menu__link').forEach( item => {
    document.querySelectorAll('.has-child').forEach( item => {
        item.addEventListener('click', evt => {
            //evt.preventDefault();
            let expanded = document.querySelector('.sidebar .menu__item.expanded');
            expanded && item !== expanded && expanded.classList.remove('expanded');
            //item.parentNode.classList.toggle('expanded');
            item.classList.toggle('expanded');
        })
    }, {passive: true});

    let sidebar = localStorage.getItem('sidebar');
    let siteWrapper = document.querySelector('.site--wrapper');
    let sidebarExpand = document.querySelector('.sidebar--expand');
    let sidebarShow = document.querySelector('.site--header__menu');
    if (siteWrapper && sidebar && sidebar === 'collapsed' && window.innerWidth > 1024) {
        siteWrapper.classList.add('collapsed');
    }
    sidebarExpand && sidebarExpand.addEventListener('click', () => {
        if (siteWrapper.classList.contains('collapsed')) {
            siteWrapper.classList.remove('collapsed');
            localStorage.setItem('sidebar', 'expanded');
        } else {
            siteWrapper.classList.add('collapsed');
            localStorage.setItem('sidebar', 'collapsed');
        }
    });
    sidebarShow && sidebarShow.addEventListener('click', () => {
        siteWrapper.classList.remove('collapsed');
    });

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
