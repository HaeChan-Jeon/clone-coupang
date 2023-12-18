# clone-coupang
 
***

## 2023-12-18(월)
* 메인 header 작업 완료 및 search 작업 진행

![image](https://github.com/HaeChan-Jeon/clone-coupang/assets/146603024/ca2f1267-ba61-4548-9d9e-7126f22306f3)

* HTML 작업

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles/styles.scss">
  <title>Clone Coupang</title>
</head>

<body>

  <script src="https://kit.fontawesome.com/2f0bc1a8ee.js" crossorigin="anonymous"></script>

  <div class="phone">
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="img\logo.png">
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <div class="bell-box">
          <div class="bell">🔔</div>
          <div class="bell-dot">4</div>
        </div>
      </div>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="search__input" type="text" placeholder="쿠팡에서 검색하세요!">
      </div>
      <div class="ad"></div>
      <div class="user-component"></div>
      <div class="ad"></div>
      <div class="recommendation"></div>
    </div>
  </div>
</body>

</html>
```

* CSS 작업

```SCSS
@import url(./reset.scss);

body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.phone {
    width: 320px;
    height: 842px;
    overflow-y: scroll;
}

.container {
    display: grid;
    grid-template-rows: 50px 50px 150px 150px 325px 960px;
}

.header {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    background-color: white;
    .logo {
        grid-column: 2;
        padding: 13px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        img {
            width: 70%;
            height: 70%;
            display: flex;
        }
    }
    .bell-box {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        .bell-dot {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: #3667FB;
            color: white;
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            right: 23px;
            bottom: 23px;
        }
    }
}

.search {
    padding: 0px 16px 10px 16px;
    background-color: aqua;
    display: flex;
    .search__input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid red;
    }
}
```
