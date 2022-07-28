import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeBuilderComponent } from './components/resume-builder/resume-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCreatorComponent } from './modules/dynamic-form-creator/form-creator/form-creator.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    FormCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
