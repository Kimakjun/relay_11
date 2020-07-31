# New 아이러브스쿨 (미정)



## 기획

학교 졸업연도에 따라 게시판이 하나씩 있고, 게시판은 메인화면, 사진첩, 자유게시판으로 이루어진다.

구성원들이 게시판에 모이면서 자연스럽게 동창들을 찾고, 커뮤니티가 만들어진다.

메인화면에는 졸업사진을 올리고, 자유게시판에는 좋아하는 주제 등의 내용을 올릴 수 있다.

사진을 올리면 페이스북처럼 인물을 인식하여 라벨링을 할 수 있고,

페이지 내용에서 태그를 추출하여 스팸 글을 필터링하는 기능과 다른 페이지 추천 기능을 제공한다.



## 1주차 : 자연어 처리

글 내용에서 중요한 단어를 태그로 추출하기



## 2주차 : 비전/영상 처리

학창시절 단체사진을 올리면 사진에서 인물들을 인식하여 라벨링하기



## 3주차 : 테이블 데이터

태그로 추출된 단어들을 통해 스팸 필터링, 맞춤 광고나 게시글 추천하기



## UI 구성

### 메인 페이지
<img width="810" alt="스크린샷 2020-07-31 오후 5 08 51" src="https://user-images.githubusercontent.com/55074799/89014664-cee24080-d350-11ea-993a-5d4a4fae3feb.png">

### entry 페이지
<img width="810" alt="스크린샷 2020-07-31 오후 5 08 56" src="https://user-images.githubusercontent.com/55074799/89014757-f802d100-d350-11ea-84aa-b067f95b9e97.png">

### 자유 게시판
<img width="795" alt="스크린샷 2020-07-31 오후 5 09 00" src="https://user-images.githubusercontent.com/55074799/89014766-fafdc180-d350-11ea-9aa2-e5f13dd0b436.png">

### 사진첩 (글 작성)
<img width="768" alt="스크린샷 2020-07-31 오후 5 09 22" src="https://user-images.githubusercontent.com/55074799/89014865-1cf74400-d351-11ea-84b5-24f97ca0f9f4.png">



## 참고할 API

**비속어**
https://github.com/hjh010501/appropriate-filetering

**얼굴 인식**
https://azure.microsoft.com/ko-kr/services/cognitive-services/face/

**중요한 단어 추출(핵심어구 추출)**
https://aws.amazon.com/ko/comprehend/
