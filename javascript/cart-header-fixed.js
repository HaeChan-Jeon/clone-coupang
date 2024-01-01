const phone = document.querySelector('.phone');
const headerCartBar = document.querySelector('.header-cart-bar');
const cartSubHeader = document.querySelector('.cart-sub-header');
const giftRequest = document.querySelector('.gift-request');
const giftRocketMain = document.querySelector('.gift-rocket-main');
const cartScreen = document.querySelector('.cart-screen');
const myCart = document.querySelector('.my-cart');

const cartScreenStyles = window.getComputedStyle(cartScreen);
const cartScreenGap = parseInt(cartScreenStyles.gap);

const giftRocketTop = cartSubHeader.clientHeight + giftRequest.clientHeight;
let myCashTop = cartSubHeader.clientHeight +
    giftRequest.clientHeight + 
    myCart.clientHeight + 
    cartScreenGap;
let headerCartBarBottom = headerCartBar.getBoundingClientRect().bottom;

phone.addEventListener('scroll', function() {  
   if (phone.scrollTop <= giftRocketTop) {
    giftRocketMain.style.position = 'static';
      
  } else if (phone.scrollTop >= giftRocketTop && phone.scrollTop <= myCashTop) {
    giftRocketMain.style.position = 'fixed';
    giftRocketMain.style.top = headerCartBarBottom + 'px';

  } else if (phone.scrollTop >= myCashTop) {
    giftRocketMain.style.top = myCashTop + headerCartBar.clientHeight +  'px';
    giftRocketMain.style.position = 'absolute';
  } 
});

window.addEventListener('resize', function() {
  giftRocketTop = cartSubHeader.clientHeight + giftRequest.clientHeight;
  headerCartBarBottom = headerCartBar.getBoundingClientRect().bottom;
  myCashTop = cartSubHeader.clientHeight +
    giftRequest.clientHeight + 
    myCart.clientHeight + 
    cartScreenGap;
});