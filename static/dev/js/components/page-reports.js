import AsemTooltip from "../modules/tooltip";
const Reports = () => {

    let container = document.querySelector('.report-edit');
    if (!container) return;

    container.querySelectorAll('.tooltip').forEach(el => AsemTooltip.init(el));

    container.querySelectorAll('.report-edit__change').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.remove('readonly');
        });
    });
    container.querySelectorAll('.report-edit__cancel').forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.list__item').classList.add('readonly');
        });
    });
};

export default Reports;
