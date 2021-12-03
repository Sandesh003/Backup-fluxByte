import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IntroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    IntroComponent
  ]
})
export class HomeModule { }
