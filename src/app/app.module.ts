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
import { ManageAccessComponent } from './admin/manage-access/manage-access.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { TestComponentsComponent } from './test-components/test-components.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



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
    ManageAccessComponent,
    ProjectManagerComponent,
    UnauthorizedComponent,
    TestComponentsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
