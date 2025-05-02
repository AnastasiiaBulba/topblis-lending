import Swiper from 'swiper';
import 'swiper/css';

const swiperClient = new Swiper('.clientSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 8,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    },
  },
});
