import {ajaxSend} from './ajax.js';
import {openModal} from './open-modal.js';
import {correctEmail} from './check-email.js';
import {toggleValidMessage, hideValidMessage} from './validation-message.js';

const ContactDom = {
  touchName       : document.getElementById('touch__name'),
  contactForm     : document.getElementById('contactform'),
  touchPhone      : document.getElementById('touch__phone'),
  touchEmail      : document.getElementById('touch__mail'),
  touchText       : document.getElementById('textarea'),
  modalOpenButton : document.getElementById('modalopenbutton'),
  invalidFeedback : document.getElementsByClassName('invalid-feedback')
}

let phoneMask = IMask(
  ContactDom.touchPhone, {
    mask: '+{7}(000)000-00-00'
});

let isEmailValidate = () => correctEmail(ContactDom.touchEmail.value);
let isPhoneValidate = () => ContactDom.touchPhone.value.length === 16;
let isNameValidate  = () => ContactDom.touchName.value;
let isTextValidate  = () => ContactDom.touchText.value;

let validationInit = () => {
  toggleValidMessage(isEmailValidate(), ContactDom.touchEmail.nextSibling.nextSibling);
  toggleValidMessage(isPhoneValidate(), ContactDom.touchPhone.nextSibling.nextSibling);
  toggleValidMessage(isNameValidate(),  ContactDom.touchName.nextSibling.nextSibling);
  toggleValidMessage(isTextValidate(),  ContactDom.touchText.nextSibling.nextSibling);
}

let formCheck = () => ((isEmailValidate()) && (isPhoneValidate()) && (isNameValidate()) && (isTextValidate()));

ContactDom.contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  validationInit();

  if (!formCheck()) return;

  let formData = new FormData(this);
  ajaxSend(formData);
  this.reset();

  openModal(ContactDom.modalOpenButton);
});

ContactDom.contactForm.addEventListener("blur", () => {
  for (let item of ContactDom.invalidFeedback) {
    hideValidMessage(item);
  }
}, true);
