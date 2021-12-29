import AsemTooltip from "../modules/tooltip";
import {Datepicker} from "../modules/vanillajs-datepicker";

const Services = () => {

    let container = document.querySelector('.services');
    if (!container) return;

    container.querySelectorAll('.tooltip').forEach(el => AsemTooltip.init(el));

    container.querySelectorAll('.services__change').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.remove('readonly');
        });
    });
    container.querySelectorAll('.services__cancel').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.add('readonly');
        });
    });


    const inputDate = document.querySelector('input.admin-tariff-date');
    const datepicker = inputDate ? new Datepicker(inputDate, {
        format: 'dd/mm/yyyy'
    }) : false;

};

export default Services;
