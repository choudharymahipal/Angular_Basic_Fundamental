import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveExampleRoutingModule } from './directive-example-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomeDirectiveComponent } from './custome-directive/custome-directive.component';
import { AttrHighlightDirective } from '../Shared/Directives/attr-highlight.directive';
import { CustomeColorDirective } from '../Shared/Directives/custome-color.directive';
import { DirectiveExampleComponent } from './directive-example.component';


@NgModule({
  declarations: [
    DirectiveExampleComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    CustomeDirectiveComponent,
    AttrHighlightDirective,
    CustomeColorDirective
  ],
  imports: [
    CommonModule,
    DirectiveExampleRoutingModule
  ]
})
export class DirectiveExampleModule { }
