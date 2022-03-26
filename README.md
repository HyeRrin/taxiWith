# 택함(taxiWith) 프로젝트(제작 중)

## 소개

---

함께 택시를 동승하길 희망하는 이용자들끼리 연결시켜주는 서비스 플랫폼 입니다.

[배포 사이트 이동하기](https://cranky-mccarthy-6acf50.netlify.app)

### 동기

학생들끼리 특정 장소에서 학교까지 함께 택시를 타고 이동할 인원을 구하는 게시물을 학교 온라인 커뮤니티에서 매일 평균적으로 2~3건씩 올라오고 있음을 발견했습니다. 게시물 작성뿐만 아니라 매칭 서비스까지 모여있는 플랫폼을 기획하게 되었습니다.

#### 활용 기술

- Vanilla JS, Firebase
- 협업 도구 : Git, Github, Figma
- 배포 : Netlify

## 계획

---

### 회원 정보 관리

- 구글 계정 로그인
- 회원정보 수정
- 계정 탈퇴

### 게시물 관리

- 신청글 확인
- 신청글 작성
- 신청글 삭제
- 신청글 수정

## 진행상황

---

### 프로토타입 제작

<p align=center><img src="https://user-images.githubusercontent.com/77602071/160245498-001cb249-4449-43d7-9ca5-6db33d68b8e5.gif" width=600/></p>

**제작 페이지**

- 로그인
- 게시물 확인 페이지
- 게시물 작성 페이지
- 사용자 정보 페이지

### 구글 계정 로그인

- Firebase Google 계정 인증 기능 활용

### 신청글 확인

- ‘main.html’ 페이지를 불러오면 Firebase database의 ‘notice’ 컬렉션 데이터를 ‘querySnapshot’ 변수에 배열 형태로 저장
- forEach 반복문으로 ‘querySnapshot’에 저장되어 있는 값들을 HTML Tag 조작하는 메서드를 실행하여 화면에 출력

### 신청글 작성

<p align=center><img src="https://user-images.githubusercontent.com/77602071/160245496-c15b0cc8-0d9f-452d-bcbf-8ea5b362a861.gif" width=600/></p>

- ‘post.html’ 페이지 내 ‘완료’ 버튼을 누르면 Firebase database의 ‘notice’ 컬렉션에 문서로 저장
- 저장 정보
  | KEY | 종류 | 설명 |
  | ------ | ------ | ----------- |
  | title | String | 게시물 제목 |
  | time | String | 출발시간 |
  | start | String | 출발지 |
  | end | String | 도착지 |
  | many | String | 탑승인원 |
  | place | String | 약속장소 |
