import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { BasicContactComponent } from './contact/basic-contact/basic-contact.component';
import { ContactModule } from './contact/contact.module';
import { ExtraComponent } from './extra/extra.component';
import { BasicComponent } from './home/basic/basic.component';

const routes: Routes = [
  {path: "", component: BasicComponent},
  {path: "home", component: BasicComponent},
  {path: "about", component: AboutPageComponent},
  {path: "contact", component: BasicContactComponent},
  {path: "extra", component: ExtraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
