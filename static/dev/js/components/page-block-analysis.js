import { DateRangePicker } from '../modules/vanillajs-datepicker';
//import JSTable from "../modules/jstable";

const BlockAnalysis = () => {
    const range = document.querySelector('.block-analysis--filters__range');
    let rangepicker = range ? new DateRangePicker(range, {
        format: 'dd/mm/yyyy'
    }) : false;

    // const AnalysisTable = () => {
    //     let aTable = document.querySelector('#analysis-table');
    //     let perPage = document.querySelector('.block-analysis--table__perpage .select');
    //     if (!perPage || !aTable) return;
    //
    //     let perPageList = [];
    //     perPage.querySelectorAll('.select__opt').forEach(el => perPageList.push(el.dataset.value));
    //
    //     let dataTable = new JSTable("#analysis-table", {
    //         searchable: false,
    //         perPageSelect: perPageList
    //     });
    //
    //     let dataTableSelect = document.querySelector('.dt-selector');
    //
    //     let perPageInp = perPage.querySelector('input');
    //     perPageInp && perPageInp.addEventListener('change', evnt => {
    //         dataTableSelect.value = perPageInp.value;
    //         dataTableSelect.dispatchEvent(new Event('change', {bubbles: true}));
    //         //dataTable.update();
    //     }, {passive: true});
    // }
    // AnalysisTable();
};

export default BlockAnalysis;
