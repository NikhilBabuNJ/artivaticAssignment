import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardBaseComponent } from './components/dashboard-base/dashboard-base.component';


const routes: Routes = [
  {path:'',component:DashboardBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
