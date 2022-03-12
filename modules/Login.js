import { app } from '../fbase.js';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const $btnLoginGoogle = document.querySelector('.link-google');

$btnLoginGoogle.addEventListener('click', function (e) {
  e.preventDefault();
  signInWithPopup(auth, provider).then(async (result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = './pages/Main.html';
  });
});
