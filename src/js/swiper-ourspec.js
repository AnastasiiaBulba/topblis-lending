import Swiper from 'swiper';
import 'swiper/css';

const swiperClient = new Swiper('.ourspecSwiper', {
  slidesPerView: 1.1,
  spaceBetween: 8,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      slidesPerView: 3.1,
      spaceBetween: 24,
    },
  },
});
