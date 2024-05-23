import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { ManageAccessComponent } from './admin/manage-access/manage-access.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LogoutComponent } from './logout/logout.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';


  

const routes: Routes = [
  { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'admin-login', component: AdminModuleComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'view-user/:id', component: ViewUserComponent },
  { path: 'manage-access', component: ManageAccessComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'logout', component: LogoutComponent },
  {path:'task-list',component:TaskListComponent,canActivate: [RoleGuard], data: { expectedRole: 'teammember' }},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'client-information', component: ClientInformationComponent ,canActivate: [RoleGuard], data: { expectedRole: 'projectmanager' } },
  { path: 'project-details', component: ProjectDetailsComponent},
  
  { path: 'task-assignment', component: TaskAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
