import AsemTooltip from "../../modules/tooltip";

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
};

export default AdminServices;
