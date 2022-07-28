import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';

@NgModule({
  declarations: [
    DragDropComponent,
    FormCreatorComponent
  ],
  imports: [
    CommonModule,
    DragDropModule, // for drag and drop
  ]
})
export class DynamicFormCreatorModule { }
