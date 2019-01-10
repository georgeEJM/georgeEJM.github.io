/*eslint-env browser*/

window.onload = function() {
  window.setTimeout(fadein, 1000); //8 seconds
}

function fadein() {
  document.getElementById('blog').style.opacity = '0';
}