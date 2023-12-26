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

* `background: linear-gradient();`:
   - 이 속성은 선형 그라디언트 배경을 설정합니다. `linear-gradient()` 함수는 그라디언트의 방향과 색상 정지점을 정의합니다. 여기서는 구체적인 값이 제공되지 않았으므로 기본값 또는 다른 곳에서 정의된 값을 사용하게 됩니다.

* `background-clip: text;`:
   - 이 속성은 배경의 그라디언트가 텍스트의 형태로 자르도록 지정합니다. 즉, 배경은 텍스트 내부에서만 보이며, 텍스트 외부의 배경은 보이지 않습니다.

* `-webkit-text-fill-color: transparent;`:
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

4. 아래에 제시된 CSS 코드는 텍스트를 특정 라인 수로 제한하고, 초과하는 부분을 숨기는데 사용됩니다. 각 속성에 대해 설명하겠습니다:

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
```

* `display: -webkit-box;`
   - `-webkit-box`는 구형의 플렉스박스 모델을 사용하는데, 이는 주로 웹킷 기반의 브라우저에서 사용됩니다 (예: 구 버전의 Chrome, Safari).
   - 이 속성은 `-webkit-line-clamp` 속성과 함께 사용되어야 합니다.

* `-webkit-box-orient: vertical;`
   - 이 속성은 `-webkit-box`의 방향을 정의합니다. `vertical` 값은 아이템들이 수직 방향으로 쌓이게 합니다.

* `-webkit-line-clamp: 2;`
   - 이 속성은 텍스트를 최대 몇 줄까지 보여줄 것인지 정의합니다. 여기서는 2줄로 설정되어 있습니다.
   - 텍스트가 2줄을 초과하면, 나머지 텍스트는 숨겨집니다.
   - 이 속성은 `-webkit-box`와 함께 사용되어야 하며, 오직 웹킷 기반 브라우저에서만 작동합니다.

* `overflow: hidden;`
   - 이 속성은 콘텐츠가 요소의 상자를 넘어갈 경우, 넘어가는 부분을 숨깁니다.
   - 여기서는 `-webkit-line-clamp`에 의해 초과하는 텍스트를 숨기는데 사용됩니다.

* `text-overflow: ellipsis;`
   - 텍스트가 오버플로우(overflow)될 때, 넘치는 텍스트 대신에 말줄임표(`...`)를 표시합니다.
   - 이 속성은 일반적으로 `overflow: hidden;`과 함께 사용됩니다.

* 위 코드는 주로 웹킷 기반의 브라우저에서 멀티라인의 텍스트 오버플로우를 처리할 때 사용되며, 주로 제품 이름, 설명 등 긴 텍스트를 제한된 공간 내에 표시할 때 유용합니다. 그러나 이 방식은 모든 브라우저에서 지원되지 않으므로, 교차 브라우저 호환성을 고려할 필요가 있습니다.

* 내일 중점적으로 찾아볼 내용
  * home 화면에서 터치 기반의 움직임과 스크롤바의 커스텀을 위해서는 js가 필요하다. 이는 후반부에 한 번에 적용하자.
  * 내일은 휴무를 사용했으니깐, 모든 스크린을 다 만들자(스스로의 기한은 이틀 내).

## 2023-12-21(목)

<img src="https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/009a57ea-bca3-4d0f-bbca-973c1f38d4fd">

* 새로 배운 내용 정리

1. Search screen에서 옆으로 넘기는 화면을 그리드 없이 구현을 해봐야 할 필요가 있었음. 따라서, 아래 속성을 사용하였음

* `flex-shrink` 속성은 CSS Flexbox 레이아웃에서 사용되며, 플렉스 아이템의 축소 가능성을 정의합니다. 이 속성은 플렉스 컨테이너 내부의 공간이 부족할 때 각 플렉스 아이템이 어떻게 축소될지를 결정합니다. `flex-shrink`의 값은 숫자이며, 기본값은 1입니다. 

- **0**: 플렉스 아이템은 축소되지 않습니다.
- **양의 숫자**: 이 값은 축소 비율을 나타냅니다. 예를 들어, 한 아이템의 `flex-shrink` 값이 다른 아이템보다 두 배 높으면, 공간이 부족할 때 두 배 더 많이 축소됩니다.

```css
.flex-item {
  flex-shrink: 2; /* 이 아이템은 다른 아이템보다 두 배 더 많이 축소될 수 있음 */
}
```

* 내일 중점적으로 찾아볼 내용
  * category의 하단에서 애니메이션과 js를 함께 주는 부분은 23일, 24일에 구현할 예정
  * 내일은 나머지 2개 스크린인 마이쿠팡과 장바구니를 구현할 계획

## 2023-12-22(금)

<img src="https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/e7ee2283-817f-4130-bcb0-de6d2bf9d066">
<img src="https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/523f8d7b-78b0-4a8d-9e0d-80504b52e6eb">


* 마이쿠팡 부분을 구현하였음. 광고 영상 같은 경우, 우선 이미지로 하였음
* 상단의 그래픽은 일러스트레이터를 통해 직접 디자인하였으며, 이 과정에서 백그라운드 이미지를 사용하는 것에 대한 효율성을 확인하였음
  * 백그라운드로 이미지를 넣는 경우에는, div를 통해 absolution으로 넣는 것보다 css에서 직접 삽입하는 것이 관리하기에 수월

```SCSS
.my-information {
    background-image: url(/img/mypoupang_title.jpg);
    background-size: cover;
...
}
```

* `background-image: url(/img/mypoupang_title.jpg);`: 이 속성은 요소의 배경으로 사용할 이미지를 지정합니다.
* 여기서는 웹 서버의 `/img` 디렉토리에 있는 `mypoupang_title.jpg`라는 이미지 파일을 배경으로 설정합니다.
* 심)

## 2023-12-26(화)

![20231226](https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/eb74589d-3a04-4f67-8813-5c1832f82e5f)

1. 드디어 일부분을 제외한 모든 HTML과 CSS를 작성 완료하였음
2. 앞으로의 작업은 JavaScript를 적용하는 것에 있음
3. 예상되는 인터렉션 효과는 아래와 같음
4. 1월 2일까지 지속적으로 작업하고 한 가지를 완료할 때 마다 본 문서를 업데이트할 계획임
   * 스크롤이 마지막에 다다를 때 해당 스크롤 뷰를 늘리는 효과 (효과명을 찾는데 오래 걸림.. 이 효과가 무엇인지 확실하게 파악할 필요가 있음)
   * 카테고리 스크린에서 테마관에 해당하는 이미지를 스크롤 hidden 형태로 넘기면서 계속 반복되도록 해야 하고 이미지의 투명도가 페이드인 페이드아웃해야 함
   * 페이지 간 대기 시간을 0.5초 줘야 함(가능하다면 0.5초 동안 스핀이 도는 효과도 넣을 것)
   * 스크린 초기 화면에서 시작 화면(로고)를 보여주는 효과
   * 장바구니 스크린에서 스크롤 시기에 따라 서브 헤더의 fixed를 해제하는 효과
   * 메인 홈 스크린에서 광고 이미지를 스크롤하여 변환하도록 해야 함(이미지가 계속 반복되어야 하며, 이미지에 따라 광고 내 하단 div(인덱스 시각화 용도) 5개의 백그라운드 컬러가 변경되어야 함

* 지금부터 5일 내 위 효과들을 무조건 구현해야 함

***
