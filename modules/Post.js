import { app } from '../fbase.js';
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const db = getFirestore();

const $btnBack = document.querySelector('.btn-header-back');
const $btnSave = document.querySelector('.btn-header-save');
const $inpTitle = document.querySelector('.text-title');
const $inpTime = document.querySelector('.time-depart input');
const $inpPlaceStart = document.querySelector('.place-start input');
const $inpPlaceEnd = document.querySelector('.place-end input');
const $inpNumMax = document.querySelector('.num-maximum input');
const $inpPlaceAssem = document.querySelector('.place-assemble input');

$btnBack.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './Main.html';
});

$btnSave.addEventListener('click', async function (e) {
  e.preventDefault();
  await addDoc(collection(db, 'notice'), {
    title: $inpTitle.value,
    time: $inpTime.value,
    start: $inpPlaceStart.value,
    end: $inpPlaceEnd.value,
    many: $inpNumMax.value,
    place: $inpPlaceAssem.value,
  });
  window.location.href = './Main.html';
});
