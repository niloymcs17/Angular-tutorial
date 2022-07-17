import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ThemeRoutingModule } from './theme-routing.module';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MatButtonModule, // for buttons
  ]
})
export class ThemeModuleModule { }
