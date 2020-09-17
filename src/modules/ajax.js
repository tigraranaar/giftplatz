const url = '';

let ajaxSend = (formData) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => console.log('Сообщение отправлено')).
  catch(error => console.error(error))
};

export {ajaxSend};
