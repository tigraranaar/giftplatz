const menuCloseButton = document.getElementById('phoneMenuClose');

window.addEventListener(`resize`, () => {
  menuCloseButton.click();
}, false);
