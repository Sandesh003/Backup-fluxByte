import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { PartnersComponent } from './partners/partners.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    AboutUsComponent,
    WorkflowComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutModule { }
