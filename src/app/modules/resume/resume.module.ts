import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ResumeBuilderComponent } from "./resume-builder/resume-builder.component";
import { ResumeRouting } from "./resume.module-routing";
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
    declarations: [
        ResumeBuilderComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        SkillsComponent
    ],
    imports: [
      MatIconModule,
      ResumeRouting,
    ]
  })
  export class ResumeModule { }
  