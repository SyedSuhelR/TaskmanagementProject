import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewUserComponent } from './admin/view-user/view-user.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminModuleComponent,
    AdminHomeComponent,
    HomePageComponent,
    NavbarComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
