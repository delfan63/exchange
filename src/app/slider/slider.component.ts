import { Component,ViewEncapsulation ,OnInit } from '@angular/core';
import SwiperCore, {SwiperOptions,Navigation, Pagination,Autoplay} from 'swiper';
SwiperCore.use([Autoplay,Navigation, Pagination])
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  slides = [
    '../../assets/slider1.jpg' ,
    '../../assets/slider2.jpg' ,
    '../../assets/slider3.jpg',
    '../../assets/slider4.jpg'
  ]
  config: SwiperOptions = {
    slidesPerView: 1,
    direction: 'horizontal',
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000, 
     disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
  }

}
