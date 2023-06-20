import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { CustomePipesComponent } from './custome-pipes/custome-pipes.component';
import { PreDefinePipesComponent } from './pre-define-pipes/pre-define-pipes.component';


@NgModule({
  declarations: [
    CustomePipesComponent,
    PreDefinePipesComponent
  ],
  imports: [
    CommonModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
