# clone-coupang
 
***

## 2023-12-18(월)
* 메인 header 작업 완료 및 search 작업 진행

![image](https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/ca2f1267-ba61-4548-9d9e-7126f22306f3)

## 2023-12-19(화)

![image](https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/3d257fbf-1055-4fa2-8e36-1a7efc62e012)

* 메인 광고 및 user-items 작업 진행

* 새로 배운 내용 정리

  * **폰트 사이즈 설정:** 폰트 사이즈는 주로 너비를 기준으로 설정된다.

  * **그리드와 고정된 포지션:** 화면의 특정 영역이 `display: fixed`로 설정되면 그리드 레이아웃이 망가질 수 있다. 이를 방지하기 위해 상위 요소에 `div`를 추가하는 것이 좋다.

  * **자동 완성 텍스트의 색 변환 방지:**
   ```css
   input:-webkit-autofill,
   input:-webkit-autofill:hover,
   input:-webkit-autofill:focus,
   input:-webkit-autofill:active {
       -webkit-box-shadow: 0 0 0 1000px white inset;
   }
   ```
   이 코드는 웹킷 기반 브라우저에서 자동 완성된 입력 필드의 배경 색상 변화를 방지한다.

  * **검색 창의 취소(X) 버튼 제거:**
   ```css
   input::-webkit-search-decoration,
   input::-webkit-search-cancel-button,
   input::-webkit-search-results-button,
   input::-webkit-search-results-decoration {
       display: none;
   }
   ```
   이 CSS는 웹킷 기반 브라우저에서 검색 입력 필드의 기본 취소 버튼을 숨긴다.

  * **스크롤바 숨기기:**
   ```css
   .phone::-webkit-scrollbar {
       display: none;
   }
   ```
   이 코드는 클래스가 `.phone`인 요소의 스크롤바를 숨기는 데 사용된다.

* 내일 중점적으로 찾아볼 내용
  * user-component는 스크롤바가 있어야 한다. 스크롤 바를 디자인하는 방법.

***
