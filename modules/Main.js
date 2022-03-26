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
  const $newIconMore = document.createElement('img');
  const $newDiv = document.createElement('div');
  const $newSecCont = document.createElement('dl');
  const $newWrapDesc = document.createElement('div');
  const $newWrapDescPt1 = document.createElement('div');
  const $newTitDepart = document.createElement('dt');
  const $newDescDepart = document.createElement('dd');
  const $newTitStart = document.createElement('dt');
  const $newDescStart = document.createElement('dd');
  const $newWrapDescPt2 = document.createElement('div');
  const $newTitPeople = document.createElement('dt');
  const $newDesPeople = document.createElement('dd');
  const $newTitDestin = document.createElement('dt');
  const $newDescDestin = document.createElement('dd');
  const $newWrapPlace = document.createElement('div');
  const $newTitPlace = document.createElement('dt');
  const $newDescPlace = document.createElement('dd');

  $newBoxCont.setAttribute('class', 'box-cont');
  $newWrapCont.setAttribute('class', 'wrap-cont');
  $newTitCont.setAttribute('class', 'tit-cont');
  $newIconMore.setAttribute('class', 'icon-more');
  $newSecCont.setAttribute('class', 'section-cont');
  $newWrapDesc.setAttribute('class', 'wrap-desc');
  $newWrapDescPt1.setAttribute('class', 'wrap-desc-part1');
  $newTitDepart.setAttribute('class', 'tit-depart');
  $newDescDepart.setAttribute('class', 'desc-depart');
  $newTitStart.setAttribute('class', 'tit-start');
  $newDescStart.setAttribute('class', 'desc-start');
  $newWrapDescPt2.setAttribute('class', 'wrap-desc-part2');
  $newTitPeople.setAttribute('class', 'tit-people');
  $newDesPeople.setAttribute('class', 'des-people');
  $newTitDestin.setAttribute('class', 'tit-destin');
  $newDescDestin.setAttribute('class', 'desc-destin');
  $newWrapPlace.setAttribute('class', 'wrap-place');
  $newTitPlace.setAttribute('class', 'tit-place');
  $newDescPlace.setAttribute('class', 'desc-place');

  $main.appendChild($newBoxCont);
  $newBoxCont.appendChild($newWrapCont);
  $newWrapCont.appendChild($newTitCont);
  $newWrapCont.appendChild($newIconMore);
  $newWrapCont.appendChild($newDiv);
  $newDiv.appendChild($newSecCont);
  $newSecCont.appendChild($newWrapDesc);
  $newWrapDesc.appendChild($newWrapDescPt1);
  $newWrapDescPt1.appendChild($newTitDepart);
  $newWrapDescPt1.appendChild($newDescDepart);
  $newWrapDescPt1.appendChild($newTitStart);
  $newWrapDescPt1.appendChild($newDescStart);
  $newWrapDesc.appendChild($newWrapDescPt2);
  $newWrapDescPt2.appendChild($newTitPeople);
  $newWrapDescPt2.appendChild($newDesPeople);
  $newWrapDescPt2.appendChild($newTitDestin);
  $newWrapDescPt2.appendChild($newDescDestin);
  $newSecCont.appendChild($newWrapPlace);
  $newWrapPlace.appendChild($newTitPlace);
  $newWrapPlace.appendChild($newDescPlace);

  $newTitDepart.innerText = '출발시간';
  $newTitStart.innerText = '출발지';
  $newTitPeople.innerText = '모집인원';
  $newTitDestin.innerText = '목적지';
  $newTitPlace.innerText = '약속장소';

  $newTitCont.innerText = obj.title;
  $newDescDepart.innerText = obj.time;
  $newDescStart.innerText = obj.start;
  $newDesPeople.innerText = obj.many;
  $newDescDestin.innerText = obj.end;
  $newDescPlace.innerText = obj.place;
}
