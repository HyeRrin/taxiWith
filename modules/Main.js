const $btnWrite = document.querySelector('.icon-write');
const $btnProfile = document.querySelector('.icon-profile');

$btnWrite.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Post.html';
});

$btnProfile.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Profile.html';
});
