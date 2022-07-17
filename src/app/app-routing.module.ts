import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderComponent } from './components/resume-builder/resume-builder.component';

const routes: Routes = [
  {path:'**', component: ResumeBuilderComponent},
  {path:'charts',loadChildren: () => import('./chart/chart.module').then(m =>m.ChartModule)},
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
