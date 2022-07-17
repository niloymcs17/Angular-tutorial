import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatjsComponent } from './chatjs/chatjs.component';
import { ChartRoutingModule } from './chart-routing.module';



@NgModule({
  declarations: [
    ChatjsComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
