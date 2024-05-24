import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { ProjectManagerNavbarComponent } from './project-manager/projectmanager-navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { ManageAccessComponent } from './admin/manage-access/manage-access.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LogoutComponent } from './logout/logout.component';
import { ProfileIconComponent } from './team-member/profile-icon/profile-icon.component';
import { TaskFilterComponent } from './team-member/task-filter/task-filter.component';
import { TaskListComponent } from './team-member/task-list/task-list.component';
import { ProfilePageComponent } from './team-member/profile-page/profile-page.component';
import { TaskAssignmentComponent } from './project-manager/task-assignment/task-assignment.component';
import { ProjectDetailsComponent } from './project-manager/project-details/project-details.component';
import { ClientInformationComponent } from './project-manager/client-information/client-information.component';
import { NavbarComponent } from './admin/admin-navbar/navbar.component';



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
    UnauthorizedComponent,
    LogoutComponent,
    TaskFilterComponent,
    TaskListComponent,
    ProfileIconComponent,
    ProfilePageComponent,
    TaskAssignmentComponent,
    ProjectDetailsComponent,
    ClientInformationComponent,
    ProjectManagerNavbarComponent

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
