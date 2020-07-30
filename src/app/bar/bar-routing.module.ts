import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarPageComponent } from './bar-page/bar-page.component';

const routes: Routes = [
  { path: '', component: BarPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
