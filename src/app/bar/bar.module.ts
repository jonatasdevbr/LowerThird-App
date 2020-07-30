import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarPageComponent } from './bar-page/bar-page.component';
import { BarRoutingModule } from './bar-routing.module';
import { BarService } from './bar.service';

@NgModule({
  declarations: [BarPageComponent],
  imports: [
    CommonModule,
    BarRoutingModule
  ],
  providers: [BarService]
})
export class BarModule { }
