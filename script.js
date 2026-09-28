var root = document.documentElement;
var saved = localStorage.getItem('theme');
if (saved) { root.setAttribute('data-theme', saved); }

document.getElementById('theme').addEventListener('click', function () {
  var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});