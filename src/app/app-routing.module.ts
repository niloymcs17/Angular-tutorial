import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './modules/drag-drop/drag-drop/drag-drop.component';
import { ResumeBuilderComponent } from './components/resume-builder/resume-builder.component';

const routes: Routes = [
  {path:'resume-builder', component: ResumeBuilderComponent},
  {path:'dragdrop', component: DragDropComponent},
  {path:'themes', loadChildren: () => import('./modules/theme/theme-module.module').then(m => m.ThemeModuleModule)},
  {path:'charts',loadChildren: () => import('./chart/chart.module').then(m =>m.ChartModule)},
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
