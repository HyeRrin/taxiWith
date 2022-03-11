const $btnBack = document.querySelector('.btn-header-back');

$btnBack.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Main.html';
});
