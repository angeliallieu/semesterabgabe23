import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import {MatButtonModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    CreateComponent, //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
