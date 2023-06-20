import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionExampleRoutingModule } from './dependency-injection-example-routing.module';
import { ServiceExampleComponent } from './service-example/service-example.component';


@NgModule({
  declarations: [
    ServiceExampleComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionExampleRoutingModule
  ]
})
export class DependencyInjectionExampleModule { }
