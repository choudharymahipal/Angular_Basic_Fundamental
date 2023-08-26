import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { DirectiveExampleComponent } from './directive-example.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

const routes: Routes = [
  {
    path: '',
    component: DirectiveExampleComponent,
    children: [
      { path: '', redirectTo: '',pathMatch:"full" },
      { path: 'Attribute', component: AttributeDirectiveComponent },
      { path: 'Structural', component: StructuralDirectiveComponent },
      { path: 'Custom', component: CustomeDirectiveComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveExampleRoutingModule { }
