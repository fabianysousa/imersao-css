window.onload = function () {
  var txtTitulo = `'HELLO, WORLD!'`;
  var txt1 = document.getElementsByClassName('site-titulo');

  var speed = 120;
  var cont = 0;

  function typeWriter() {
    if (cont < txtTitulo.length) {
      txt1[0].innerHTML = '<ul>' + txtTitulo.substring(0, cont + 1) + '</ul>';
      cont++;
      setTimeout(typeWriter, speed);
    } else {
      cont = 0;
    }
  }

  typeWriter();
};
