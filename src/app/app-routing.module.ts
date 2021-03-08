import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewpdfComponent } from './viewpdf/viewpdf.component'

const routes: Routes = [
  { path: '', component: ViewpdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
