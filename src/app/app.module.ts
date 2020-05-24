import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common'; 


@NgModule({
  declarations: [
    AppComponent,
   CategoryListingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/youtube'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
