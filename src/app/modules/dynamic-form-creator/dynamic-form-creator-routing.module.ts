import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { FormCreatorComponent } from "./form-creator/form-creator.component";

const routes: Routes = [
    {path:'', component: DragDropComponent},
    {path:'**', redirectTo:''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DynamicFormCreatorRouting{}