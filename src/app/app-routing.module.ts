import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'plans',component:PlanComponent},
  {path:'about',component:AboutComponent},
  {path:'joinnow',component:JoinnowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
