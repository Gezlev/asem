const Scheme = () => {
    let container = document.querySelector('.scheme');
    if (!container) return;

    let tabs = container.querySelector('.scheme__tabs');
    let tabItems = container.querySelectorAll('.scheme__tab');

    let boxes = container.querySelector('.scheme__boxes');
    let boxItems = container.querySelectorAll('.scheme__box');

    const setActive = i => {
        let currTab = tabs.querySelector('.active');
        currTab && currTab.classList.remove('active');

        let currBox = boxes.querySelector('.active');
        currBox && currBox.classList.remove('active');

        tabItems[i].classList.add('active');
        boxItems[i].classList.add('active');
    };

    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', () => setActive(i), {passive: true});
    }
};

export default Scheme;
