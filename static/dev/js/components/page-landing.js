import Splide from '../modules/slider';

const Landing = () => {

    if (document.querySelector('.landing--reviews .splide')) {
        const slider = new Splide('.landing--reviews .splide', {
            type: 'loop',
            easing: 'cubic-bezier(.52,.01,.38,.99)',
            rewindSpeed: 1000,
            gap: '25%',
            pagination: false,
            arrowPath: 'M39.9,20.6c0.2-0.4,0.2-0.9,0-1.3c-0.1-0.2-0.2-0.4-0.4-0.5l-8.3-8.3c-0.7-0.7-1.7-0.7-2.4,0c-0.7,0.7-0.7,1.7,0,2.4 l5.5,5.5H1.7C0.7,18.3,0,19.1,0,20s0.7,1.7,1.7,1.7h32.6l-5.5,5.5c-0.7,0.7-0.7,1.7,0,2.4c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5 l8.3-8.3C39.7,21,39.8,20.8,39.9,20.6z',
        });
        slider.mount();
    }

    document.querySelectorAll('.landing--faq__item').forEach( item => {
        item.querySelector('h4').addEventListener('click', () => {
            let expanded = document.querySelector('.landing--faq__item.expanded');
            expanded && expanded !== item  && expanded.classList.remove('expanded');
            item.classList.toggle('expanded');
        });
    });
}

export default Landing;
