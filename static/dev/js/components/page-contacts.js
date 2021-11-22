import JSTable from "../modules/jstable";
import AsemTooltip from "../modules/tooltip";

const Contacts = () => {
    let contacts = document.querySelector('#contacts-table');
    if (!contacts) return;

    contacts.querySelectorAll('.tooltip').forEach(el => AsemTooltip.init(el));

    let contactTable = new JSTable(contacts, {
        searchable: false,
        perPage: 100
    });
    contactTable.on("init", function () {
        console.log("init");
    });

};

export default Contacts;
