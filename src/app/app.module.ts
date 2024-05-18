import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    AdminModuleComponent,
    AdminHomeComponent,
    HomePageComponent,
    NavbarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
