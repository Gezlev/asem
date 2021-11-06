const PageOrganizations = () => {

    const OrglistView = () => {
        let viewBtns = document.querySelector('.orglist--header__view');
        let container = document.querySelector('.orglist__container');

        if (!container || !viewBtns) return;

        let listBtn = viewBtns.querySelector('.orglist--header__list');
        let gridBtn = viewBtns.querySelector('.orglist--header__grid');


        let orglistMode = localStorage.getItem('orglist');
        if (orglistMode && orglistMode === 'grid') {
            container.classList.add('gridview');
            let current = viewBtns.querySelector('.current');
            current && current.classList.remove('current');
            gridBtn.classList.add('current');
        }

        viewBtns.addEventListener('click', evt => {
            let target = evt.target;
            let current = viewBtns.querySelector('.current');
            current && current.classList.remove('current');

            if (listBtn.contains(target)) {
                container.classList.remove('gridview');
                listBtn.classList.add('current');
                localStorage.setItem('orglist', 'list');
            } else if (gridBtn.contains(target)) {
                container.classList.add('gridview');
                gridBtn.classList.add('current');
                localStorage.setItem('orglist', 'grid');
            }
        }, {passive: true});
    };
    OrglistView();
};

export default PageOrganizations;
