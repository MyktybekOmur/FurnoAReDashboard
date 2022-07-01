import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductSliderComponent implements OnInit {
  thumbsSwiper: any;
  obj_link: any =['https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/2.glb',
  'https://raw.githubusercontent.com/MyktybekOmur/arweb/master/assets/3.glb'];
  @Input() obj: any;
  @Input() img: any;

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
