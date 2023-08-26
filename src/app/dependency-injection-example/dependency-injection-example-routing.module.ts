import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionExampleComponent } from './dependency-injection-example.component';
import { ServiceExampleComponent } from './service-example/service-example.component';

const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionExampleComponent,
    children: [
      { path: '', redirectTo: '',pathMatch:"full" },
      { path: 'Service', component: ServiceExampleComponent },
      // { path: 'C2P', component: ChildToParentComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyInjectionExampleRoutingModule { }
