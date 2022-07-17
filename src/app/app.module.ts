import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeBuilderComponent } from './components/resume-builder/resume-builder.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
