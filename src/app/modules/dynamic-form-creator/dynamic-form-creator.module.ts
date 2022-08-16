import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { DynamicFormCreatorRouting } from './dynamic-form-creator-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DragDropComponent,
    FormCreatorComponent
  ],
  imports: [
    CommonModule,
    DragDropModule, // for drag and drop
    DynamicFormCreatorRouting,
    ReactiveFormsModule
  ]
})
export class DynamicFormCreatorModule { }
