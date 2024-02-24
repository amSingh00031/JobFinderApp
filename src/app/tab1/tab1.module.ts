import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SwiperSlide } from 'swiper/element/bundle';
import { Swiper, SwiperModule } from 'swiper/types';
import { ReactiveFormsModule } from '@angular/forms';








@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  
    
  ],
  declarations: [Tab1Page]

})
export class Tab1PageModule {}
