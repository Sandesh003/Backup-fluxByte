import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicContactComponent } from './basic-contact/basic-contact.component';



@NgModule({
  declarations: [
    BasicContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasicContactComponent
  ]
})
export class ContactModule { }
