import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ResumeBuilderComponent } from "./resume-builder/resume-builder.component";
import { ResumeRouting } from "./resume.module-routing";

@NgModule({
    declarations: [
        ResumeBuilderComponent
    ],
    imports: [
      MatIconModule,
      ResumeRouting
    ]
  })
  export class ResumeModule { }
  