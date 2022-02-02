import { DateRangePicker } from '../modules/vanillajs-datepicker';
import JSTable from "../modules/jstable";

const BlockAnalysis = () => {
    const range = document.querySelector('.block-analysis--filters__range');
    let rangepicker = range ? new DateRangePicker(range, {
        format: 'dd/mm/yyyy'
    }) : false;
};

export default BlockAnalysis;
