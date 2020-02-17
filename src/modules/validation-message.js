let toggleValidMessage = (isValidate, invalidLabel) => {
  isValidate ? hideValidMessage(invalidLabel) : showValidMessage(invalidLabel);
};

let hideValidMessage = (validMessage) => {
  validMessage.classList.remove('visible');
  validMessage.classList.add('invisible');
};

let showValidMessage = (validMessage) => {
  validMessage.classList.add('visible');
  validMessage.classList.remove('invisible');
};

export {toggleValidMessage, hideValidMessage, showValidMessage};
