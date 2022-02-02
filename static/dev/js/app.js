// STYLES
//import '../scss/style.scss';

// SCRIPTS

import Select from "./modules/select";
document.querySelectorAll('.select').forEach( el => Select.init(el));

import ColorPicker from "./modules/color-picker";
document.querySelectorAll('.input-color').forEach( el => ColorPicker.init(el));

import Popup from "./modules/popup";
document.querySelectorAll('.popup-btn').forEach( el => Popup.init(el));

import ListMenu from "./modules/list-menu";
document.querySelectorAll('.list--menu').forEach( el => ListMenu.init(el));

import vNotify from "./modules/notify";
window.vNotify = vNotify;

import loginPassEye from "./modules/login-pass-eye";
loginPassEye('.loginpass__eye', '#password');

import SidebarMenu from "./modules/sidebar-menu";
SidebarMenu();

import OrgList from "./components/organization/list";
OrgList();

import OrgMain from "./components/organization/main";
OrgMain();

import BlockAnalysis from "./components/page-block-analysis";
BlockAnalysis();

import Contacts from "./components/page-contacts";
Contacts();

import Landing from "./components/page-landing";
Landing();

import Scheme from "./components/scheme/energo";
Scheme();

import SchemeEdit from "./components/scheme/edit";
SchemeEdit();

import Services from "./components/page-services";
Services();

import Reports from "./components/page-reports";
Reports();
