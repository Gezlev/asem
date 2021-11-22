// STYLES
//import '../scss/style.scss';

// SCRIPTS

import Select from "./modules/select";
document.querySelectorAll('.select').forEach( el => Select.init(el));

import loginPassEye from "./modules/login-pass-eye";
loginPassEye('.loginpass__eye', '#loginpass');

import SidebarMenu from "./modules/sidebar-menu";
SidebarMenu();

import PageOrganizations from "./components/page-organizations";
PageOrganizations();

import BlockAnalysis from "./components/page-block-analysis";
BlockAnalysis();

import Contacts from "./components/page-contacts";
Contacts();
