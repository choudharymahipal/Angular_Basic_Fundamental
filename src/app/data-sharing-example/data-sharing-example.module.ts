import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingExampleRoutingModule } from './data-sharing-example-routing.module';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { UsingServiceComponent } from './using-service/using-service.component';
import { UsingSessionComponent } from './using-session/using-session.component';
import { Child2Component } from './child-to-parent/child2/child2.component';
import { ChildComponent } from './parent-to-child/child/child.component';


@NgModule({
  declarations: [
    ChildToParentComponent,
    ParentToChildComponent,
    UsingServiceComponent,
    UsingSessionComponent,
    Child2Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DataSharingExampleRoutingModule
  ]
})
export class DataSharingExampleModule { }
