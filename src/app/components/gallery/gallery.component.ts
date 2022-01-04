import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Zoom, Navigation, Pagination } from "swiper";

SwiperCore.use([Zoom, Navigation, Pagination]);
  
  SwiperCore.use([Navigation, Pagination]);
  
  @Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class GalleryComponent  {
  
    constructor() { }
  
  
  }
  