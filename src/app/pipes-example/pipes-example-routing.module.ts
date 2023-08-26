import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomePipesComponent } from './custome-pipes/custome-pipes.component';
import { PipesExampleComponent } from './pipes-example.component';
import { PreDefinePipesComponent } from './pre-define-pipes/pre-define-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: PipesExampleComponent,
    children: [
      { path: '', redirectTo: '',pathMatch:"full" },
      { path: 'PreDefine', component: PreDefinePipesComponent },
      { path: 'Custom', component: CustomePipesComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesExampleRoutingModule { }
