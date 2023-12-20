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

## 2023-12-20(수)

![clone-coupang_20231221](https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/2d741fe3-7e67-480b-ab2e-31c5758c389a)

* 새로 배운 내용 정리

1. 이 코드는 CSS (Cascading Style Sheets)의 일부이며, 텍스트에 그라디언트 배경 효과를 적용하는 데 사용됩니다. 각 줄의 의미는 다음과 같습니다:

```css
background: linear-gradient();
background-clip: text;
-webkit-text-fill-color: transparent;
```

1. `background: linear-gradient();`:
   - 이 속성은 선형 그라디언트 배경을 설정합니다. `linear-gradient()` 함수는 그라디언트의 방향과 색상 정지점을 정의합니다. 여기서는 구체적인 값이 제공되지 않았으므로 기본값 또는 다른 곳에서 정의된 값을 사용하게 됩니다.

2. `background-clip: text;`:
   - 이 속성은 배경의 그라디언트가 텍스트의 형태로 자르도록 지정합니다. 즉, 배경은 텍스트 내부에서만 보이며, 텍스트 외부의 배경은 보이지 않습니다.

3. `-webkit-text-fill-color: transparent;`:
   - 이것은 웹킷 기반 브라우저(예: Chrome, Safari)용 비표준 CSS 속성입니다. 이 속성은 텍스트의 채우기 색상을 투명하게 설정하여, 그라디언트 배경이 텍스트를 통해 보이도록 합니다.

* 종합하면, 이 코드는 텍스트에 그라디언트 효과를 적용하여, 텍스트 자체는 투명하게 보이고 그라디언트 배경만 텍스트의 형태로 나타나게 하는 시각적 효과를 만듭니다. 이러한 스타일은 주로 웹 페이지에서 멋진 시각적 효과를 위해 사용됩니다.

2. 아래는 주어진 CSS 코드를 정리한 내용입니다. 이 코드는 웹 페이지의 특정 요소 (`.user-component` 클래스를 가진 요소) 내의 스크롤바에 스타일을 적용하는 데 사용됩니다.

```css
.user-component::-webkit-scrollbar {
    height: 4px; /* 스크롤바의 높이를 4픽셀로 설정 */
}

.user-component::-webkit-scrollbar-thumb {
    background-color: #272B2F; /* 스크롤바의 '엄지' 부분(움직이는 부분)의 배경색을 어두운 회색으로 설정 */
    border-radius: 2px; /* 스크롤바 엄지의 모서리를 약간 둥글게 만듦 */
}

.user-component::-webkit-scrollbar-track {
    background-color: #E1E2E4; /* 스크롤바의 '트랙' 부분(배경)의 색상을 밝은 회색으로 설정 */
    border-radius: 2px; /* 스크롤바 트랙의 모서리를 약간 둥글게 만듦 */
}
```

* 이 코드는 웹킷 기반 브라우저(예: Chrome, Safari)에서만 작동합니다. `-webkit-` 접두사는 웹킷 엔진을 사용하는 브라우저의 특정 기능을 나타냅니다. 이 코드를 사용하여 스크롤바의 높이, 엄지와 트랙의 배경색, 그리고 둥근 모서리를 설정할 수 있습니다. 이를 통해 기본 스크롤바보다 더 세련되고 사용자 정의된 스크롤바를 제공할 수 있습니다.

* 내일 중점적으로 찾아볼 내용
  * home 화면에서 터치 기반의 움직임과 스크롤바의 커스텀을 위해서는 js가 필요하다. 이는 후반부에 한 번에 적용하자.
  * 내일은 휴무를 사용했으니깐, 모든 스크린을 다 만들자(스스로의 기한은 이틀 내).

***
