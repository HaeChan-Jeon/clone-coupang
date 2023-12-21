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

***
