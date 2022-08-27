import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeBuilderComponent } from "./resume-builder/resume-builder.component";

const routes: Routes = [
    {path:'', component: ResumeBuilderComponent},
    {path:'**', redirectTo:''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ResumeRouting{}