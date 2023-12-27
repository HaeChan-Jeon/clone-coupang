const phone = document.querySelector('.phone');
const headerCartBar = document.querySelector('.header-cart-bar');
const cartSubHeader = document.querySelector('.cart-sub-header');
const giftRequest = document.querySelector('.gift-request');
const giftRocketMain = document.querySelector('.gift-rocket-main');
const cartScreen = document.querySelector('.cart-screen');
const myCart = document.querySelector('.my-cart');
const myCash = document.querySelector('.my-cash');

const cartScreenStyles = window.getComputedStyle(cartScreen);
const cartScreenValue = parseInt(cartScreenStyles.gap);

// Calculate the top position of giftRocketMain
const giftRocketTop = cartSubHeader.clientHeight + giftRequest.clientHeight;
let myCashTop = phone.getBoundingClientRect().top +
    headerCartBar.clientHeight +
    cartSubHeader.clientHeight +
    giftRequest.clientHeight +
    giftRocketMain.clientHeight +
    myCart.clientHeight +
    cartScreenValue;
let headerCartBarBottom = headerCartBar.getBoundingClientRect().bottom;

// Function to handle scroll events
phone.addEventListener('scroll', function() {  
   if (phone.scrollTop <= giftRocketTop) {
    giftRocketMain.style.position = 'static';
    giftRocketMain.style.color = 'blue';
    
  } else if (phone.scrollTop >= giftRocketTop && phone.scrollTop <= myCashTop) {
    giftRocketMain.style.position = 'fixed';
    giftRocketMain.style.top = headerCartBarBottom + 'px';
    giftRocketMain.style.color = 'red';

  } else if (phone.scrollTop >= myCashTop) {
    // If false, set the position of giftRocketMain to its default value
    giftRocketMain.style.color = 'yellow';
  } 
});

window.addEventListener('resize', function() {
  headerCartBarBottom = headerCartBar.getBoundingClientRect().bottom;
  myCashTop = phone.getBoundingClientRect().top +
    headerCartBar.clientHeight +
    cartSubHeader.clientHeight +
    giftRequest.clientHeight +
    giftRocketMain.clientHeight +
    myCart.clientHeight +
    cartScreenValue;
});