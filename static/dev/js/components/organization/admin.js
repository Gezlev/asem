import AsemTooltip from "../../modules/tooltip";
import { Datepicker } from "../../modules/vanillajs-datepicker";
import tr from "vanillajs-datepicker/js/i18n/locales/tr";

const AdminServices = () => {

    let container = document.querySelector('.org-admin--services');
    if (!container) return;

    container.querySelectorAll('.tooltip').forEach(el => AsemTooltip.init(el));

    container.querySelectorAll('.org-admin--services__change').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.remove('readonly');
        });
    });
    container.querySelectorAll('.org-admin--services__cancel').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.add('readonly');
        });
    });


    const inputDate = document.querySelector('input.admin-tariff-date');
    const datepicker = inputDate ? new Datepicker(inputDate, {
        format: 'dd/mm/yyyy'
    }) : false;

};
const AdminScheme = () => {
    let container = document.querySelector('.org-admin--scheme');
    if (!container) return;

    let tabs = container.querySelector('.org-admin--scheme__tabs');
    let tabItems = container.querySelectorAll('.org-admin--scheme__tab');

    let boxes = container.querySelector('.org-admin--scheme__boxes');
    let boxItems = container.querySelectorAll('.org-admin--scheme__box');

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

export {AdminServices, AdminScheme};
