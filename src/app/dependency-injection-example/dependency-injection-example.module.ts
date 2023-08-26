import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionExampleRoutingModule } from './dependency-injection-example-routing.module';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { DependencyInjectionExampleComponent } from './dependency-injection-example.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DependencyInjectionExampleComponent,
    ServiceExampleComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionExampleRoutingModule,
    HttpClientModule
  ],
  providers:[]
})
export class DependencyInjectionExampleModule { }
