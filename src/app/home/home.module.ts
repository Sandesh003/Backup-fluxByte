import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './basic/basic.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent,
    IntroComponent,
    ServicesComponent,
    CarouselComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    IntroComponent,
    ServicesComponent,
    CarouselComponent,
    BasicComponent
  ]
})
export class HomeModule {
  
 }
