import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatjsComponent } from "./chatjs/chatjs.component";

const routes: Routes =[
{path:'**',component: ChatjsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChartRoutingModule {}