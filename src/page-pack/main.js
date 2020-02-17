import {setActivePage} from '../modules/active-page';
import '../modules/main';
import './page.scss';

const PageNumber = 4;

document.addEventListener('DOMContentLoaded', () => {
  setActivePage(PageNumber);
});
