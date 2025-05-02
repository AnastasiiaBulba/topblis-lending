import Swiper from 'swiper';
import 'swiper/css';

const swiperSignature = new Swiper('.signatureSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});
