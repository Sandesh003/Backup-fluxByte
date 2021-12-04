import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutModule { }
