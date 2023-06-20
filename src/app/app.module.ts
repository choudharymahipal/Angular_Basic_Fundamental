import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { SidebarComponent } from './Shared/Components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//Translate imports
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { DataSharingExampleComponent } from './data-sharing-example/data-sharing-example.component';
import { DependencyInjectionExampleComponent } from './dependency-injection-example/dependency-injection-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { HomeComponent } from './home/home.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { AttrHighlightDirective } from './Shared/Directives/attr-highlight.directive';
import { CustomeColorDirective } from './Shared/Directives/custome-color.directive';
import { CustomeWordCountPipe } from './Shared/Pipes/custome-word-count.pipe';
import { AttributeDirectiveComponent } from './directives-example/attribute-directive/attribute-directive.component';
import { CustomeDirectiveComponent } from './directives-example/custome-directive/custome-directive.component';
import { StructuralDirectiveComponent } from './directives-example/structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DataBindingExampleComponent,
    DataSharingExampleComponent,
    DependencyInjectionExampleComponent,
    DirectiveExampleComponent,
    HomeComponent,
    PipesExampleComponent,
    AttrHighlightDirective,
    CustomeColorDirective,
    CustomeWordCountPipe,
    AttributeDirectiveComponent,
    CustomeDirectiveComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    //translation module
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:myHttpLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function myHttpLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
