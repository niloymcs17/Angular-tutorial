import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderComponent } from './components/resume-builder/resume-builder.component';

const routes: Routes = [
  {path:'resume-builder', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule)},
  {path:'dragdrop', loadChildren: () => import('./modules/dynamic-form-creator/dynamic-form-creator.module').then(m =>m.DynamicFormCreatorModule)},
  {path:'themes', loadChildren: () => import('./modules/theme/theme.module').then(m => m.ThemeModule)},
  {path:'charts',loadChildren: () => import('./chart/chart.module').then(m =>m.ChartModule)},
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
