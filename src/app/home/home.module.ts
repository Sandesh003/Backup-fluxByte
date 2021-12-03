import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IntroComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    IntroComponent,
    ServicesComponent
  ]
})
export class HomeModule {
  
 }
