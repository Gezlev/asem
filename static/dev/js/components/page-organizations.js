const PageOrganizations = () => {

    const OrglistView = () => {
        let viewBtns = document.querySelector('.list--header__view');
        let container = document.querySelector('.list__container');

        if (!container || !viewBtns) return;

        let listBtn = viewBtns.querySelector('.list--header__list');
        let gridBtn = viewBtns.querySelector('.list--header__grid');


        let orglistMode = localStorage.getItem('orglist');
        if (orglistMode && orglistMode === 'grid') {
            container.classList.add('gridview');
            let current = viewBtns.querySelector('.active');
            current && current.classList.remove('active');
            gridBtn.classList.add('active');
        }

        viewBtns.addEventListener('click', evt => {
            let target = evt.target;
            let current = viewBtns.querySelector('.active');
            current && current.classList.remove('active');

            if (listBtn.contains(target)) {
                container.classList.remove('gridview');
                listBtn.classList.add('active');
                localStorage.setItem('orglist', 'list');
            } else if (gridBtn.contains(target)) {
                container.classList.add('gridview');
                gridBtn.classList.add('active');
                localStorage.setItem('orglist', 'grid');
            }
        }, {passive: true});
    };
    OrglistView();
};

export default PageOrganizations;
