import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { DataBindingExampleComponent } from './data-binding-example.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  {
    path: '',
      component: DataBindingExampleComponent,
      children: [
        { path: '', redirectTo: '',pathMatch:"full" },
        { path: 'Attribute', component: AttributeBindingComponent },
        { path: 'Class', component: ClassBindingComponent },
        { path: 'Event', component: EventBindingComponent },
        { path: 'Property', component: PropertyBindingComponent },
        { path: 'Style', component: StyleBindingComponent },
        { path: 'TwoWayBinding', component: TwoWayBindingComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingExampleRoutingModule { }
