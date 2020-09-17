const lightboxInit = () => {
  let itemclicks = document.getElementsByClassName('itemclick');
  let mainimg = document.getElementById('imagebox__main');

  Array.prototype.forEach.call(itemclicks, element => {
      element.addEventListener ("click", function(element) {
          let src = element.target.src;
          mainimg.setAttribute('src', src);

          let lightboximg = document.getElementById('lightboximg');
          let imagebox__main = document.getElementById('imagebox__main');
          lightboximg.src = imagebox__main.src;
      }, false);
  });   
}

export {lightboxInit};
