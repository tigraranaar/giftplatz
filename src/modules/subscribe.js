import {ajaxSend} from './ajax.js';
import {openModal} from './open-modal.js';
import {correctEmail} from './check-email';
import {toggleValidMessage, hideValidMessage} from './validation-message';

const SubscribeDom = {
  form            : document.getElementById('subscribeform'),
  emailInput      : document.getElementById("subscribeinput"),
  modalButton     : document.getElementById('subscribe__openmodal'),
  invalidFeedback : document.getElementById('invalid-feedback')
}

let isValidate = () => correctEmail(SubscribeDom.emailInput.value);

SubscribeDom.form.addEventListener("blur", () => {
  hideValidMessage(SubscribeDom.invalidFeedback);
}, true);

SubscribeDom.form.addEventListener('submit', function(e) {
  e.preventDefault();

  toggleValidMessage(isValidate(), SubscribeDom.invalidFeedback);

  if (!isValidate()) return;

  let formData = new FormData(this);
  ajaxSend(formData);
  this.reset();

  openModal(SubscribeDom.modalButton);
});
