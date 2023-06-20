import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'Data_Binding',
    loadChildren: () => import('./data-binding-example/data-binding-example.module').then((m) => m.DataBindingExampleModule)
  },
  {
    path: 'Data_Sharing',
    loadChildren: () => import('./data-sharing-example/data-sharing-example.module').then((m) => m.DataSharingExampleModule)
  },
  {
    path: 'DependencyInjection',
    loadChildren: () => import('./dependency-injection-example/dependency-injection-example.module').then((m) => m.DependencyInjectionExampleModule)
  },
  {
    path: 'Directives',
    loadChildren: () => import('./directive-example/directive-example.module').then((m) => m.DirectiveExampleModule)
  },
  {
    path: 'Pipes',
    loadChildren: () => import('./pipes-example/pipes-example-routing.module').then((m) => m.PipesExampleRoutingModule)
  },
  { path: "", component: HomeComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "", pathMatch: "full" }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
