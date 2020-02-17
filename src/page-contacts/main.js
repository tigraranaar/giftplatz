import {setActivePage} from '../modules/active-page';
import IMask from 'imask';
import '../modules/contact-form';
import '../modules/main';
import './page.scss';

const PageNumber = 5;

document.addEventListener('DOMContentLoaded', () => {
  setActivePage(PageNumber);
});
