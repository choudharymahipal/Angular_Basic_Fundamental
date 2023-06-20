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
import { HomeComponent } from './home/home.component';
import { FakeDataService } from './Shared/Services/fake-data.service';
import { DataStoreService } from './Shared/Services/data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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
  providers: [
    FakeDataService,
    DataStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function myHttpLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
