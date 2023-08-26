import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { CustomePipesComponent } from './custome-pipes/custome-pipes.component';
import { PreDefinePipesComponent } from './pre-define-pipes/pre-define-pipes.component';
import { PipesExampleComponent } from './pipes-example.component';
import { CustomeWordCountPipe } from '../Shared/Pipes/custome-word-count.pipe';


@NgModule({
  declarations: [
    PipesExampleComponent,
    PreDefinePipesComponent,
    CustomePipesComponent,
    CustomeWordCountPipe, //custom pipe
  ],
  imports: [
    CommonModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
