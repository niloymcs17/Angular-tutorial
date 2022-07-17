import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ThemeRoutingModule } from './theme-routing.module';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MatButtonModule, // for buttons
    MatIconModule, // for mat icon
  ]
})
export class ThemeModuleModule { }
