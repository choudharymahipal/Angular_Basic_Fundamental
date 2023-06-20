import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingExampleRoutingModule } from './data-binding-example-routing.module';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';


@NgModule({
  declarations: [
    AttributeBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    DataBindingExampleRoutingModule
  ]
})
export class DataBindingExampleModule { }
