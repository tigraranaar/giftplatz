import {setActivePage} from '../modules/active-page';
import {lightboxInit} from '../modules/lightbox';
import '../modules/main';
import './page.scss';

const PageNumber = 2;

document.addEventListener('DOMContentLoaded', () => {
  setActivePage(PageNumber);
  lightboxInit();
});
