import { app } from '../fbase.js';
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();

const $main = document.querySelector('#main');
const $btnWrite = document.querySelector('.icon-write');
const $btnProfile = document.querySelector('.icon-profile');

const querySnapshot = await getDocs(collection(db, 'notice'));
querySnapshot.forEach((doc) => {
  createTag(doc.data());
});

$btnWrite.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Post.html';
});

$btnProfile.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Profile.html';
});

function createTag(obj) {
  const $newBoxCont = document.createElement('article');
  const $newWrapCont = document.createElement('div');
  const $newTitCont = document.createElement('h2');
  const $newDiv = document.createElement('div');
  const $newSecCont = document.createElement('dl');
  const $newWrapDepart = document.createElement('div');
  const $newTitDepart = document.createElement('dt');
  const $newDescDepart = document.createElement('dd');
  const $newWrapStart = document.createElement('div');
  const $newTitStart = document.createElement('dt');
  const $newDescStart = document.createElement('dd');
  const $newWrapDestin = document.createElement('div');
  const $newTitDestin = document.createElement('dt');
  const $newDescDestin = document.createElement('dd');

  $newBoxCont.setAttribute('class', 'box-cont');
  $newWrapCont.setAttribute('class', 'wrap-cont');
  $newTitCont.setAttribute('class', 'tit-cont');
  $newSecCont.setAttribute('class', 'section-cont');
  $newWrapDepart.setAttribute('class', 'wrap-depart');
  $newTitDepart.setAttribute('class', 'tit-depart');
  $newDescDepart.setAttribute('class', 'desc-depart');
  $newWrapStart.setAttribute('class', 'wrap-start');
  $newTitStart.setAttribute('class', 'tit-start');
  $newDescStart.setAttribute('class', 'desc-start');
  $newWrapDestin.setAttribute('class', 'wrap-destin');
  $newTitDestin.setAttribute('class', 'tit-destin');
  $newDescDestin.setAttribute('class', 'desc-destin');

  $main.appendChild($newBoxCont);
  $newBoxCont.appendChild($newWrapCont);
  $newWrapCont.appendChild($newTitCont);
  $newWrapCont.appendChild($newDiv);
  $newDiv.appendChild($newSecCont);
  $newSecCont.appendChild($newWrapDepart);
  $newWrapDepart.appendChild($newTitDepart);
  $newWrapDepart.appendChild($newDescDepart);
  $newSecCont.appendChild($newWrapStart);
  $newWrapStart.appendChild($newTitStart);
  $newWrapStart.appendChild($newDescStart);
  $newSecCont.appendChild($newWrapDestin);
  $newWrapDestin.appendChild($newTitDestin);
  $newWrapDestin.appendChild($newDescDestin);

  $newTitDepart.innerText = '출발시간';
  $newTitStart.innerText = '출발지';
  $newTitDestin.innerText = '목적지';

  $newTitCont.innerText = obj.title;
  $newDescDepart.innerText = obj.time;
  $newDescStart.innerText = obj.start;
  $newDescDestin.innerText = obj.end;
}
