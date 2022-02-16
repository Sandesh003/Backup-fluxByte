import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicContactComponent } from './basic-contact/basic-contact.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BasicContactComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule
  ],
  exports: [
    BasicContactComponent
  ]
})
export class ContactModule { }
