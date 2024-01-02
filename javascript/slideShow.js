let slideIndex = 0;
showSlides();

function showSlides() {
    // "mySlides" 클래스를 가진 모든 요소를 가져옵니다.
    const slides = document.getElementsByClassName("mySlides");

    // 모든 슬라이드를 숨깁니다.
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 현재 슬라이드 인덱스를 증가시킵니다.
    slideIndex++;

    // 만약 현재 슬라이드 인덱스가 슬라이드의 개수를 초과하면 다시 첫 번째 슬라이드로 돌아갑니다.
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 현재 슬라이드를 보여주도록 스타일을 변경합니다.
    slides[slideIndex - 1].style.display = "block";

    // 2초마다 showSlides 함수를 호출하여 이미지를 변경합니다.
    setTimeout(showSlides, 2000);
}