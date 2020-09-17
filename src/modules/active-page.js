const setActivePage = (pageNumber, dPageNumber) => {
  const activeItem = document.getElementsByClassName('nav-item')[pageNumber - 1];
  const activeListPhone = document.getElementsByClassName('modal__link')[pageNumber - 1];
  const activeItemDDPhone = document.getElementsByClassName('dropdown-item')[dPageNumber - 1];

  activeItem.classList.add("active");
  activeListPhone.classList.add("activePhone");

  if (!activeItemDDPhone) return;

  activeItemDDPhone.classList.add("activePhone");
}

export {setActivePage};
