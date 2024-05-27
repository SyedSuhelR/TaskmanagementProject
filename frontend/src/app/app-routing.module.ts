import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { ManageAccessComponent } from './admin/manage-access/manage-access.component';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LogoutComponent } from './logout/logout.component';
import { TaskFilterComponent } from './team-member/task-filter/task-filter.component';
import { TaskListComponent } from './team-member/task-list/task-list.component';
import { ProfilePageComponent } from './team-member/profile-page/profile-page.component';
import { ClientInformationComponent } from './project-manager/client-information/client-information.component';
import { ProjectDetailsComponent } from './project-manager/project-details/project-details.component';
import { TaskAssignmentComponent } from './project-manager/task-assignment/task-assignment.component';
import { MainPageComponent } from './project-manager/main-page/main-page.component';
import { EditProfileComponent } from './project-manager/edit-profile/edit-profile.component';
import { ProjectViewComponent } from './project-manager/project-view/project-view.component';
import { TeamMemberTaskAssignmentComponent } from './team-member/team-member-task-assignment/team-member-task-assignment.component';
import { TeamMemberProjectsdetailsComponent } from './team-member/team-member-projectsdetails/team-member-projectsdetails.component';


  

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
  {path:'task-list',component:TaskListComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'client-information', component: ClientInformationComponent  },
  { path: 'project-details', component: ProjectDetailsComponent},
  { path: 'task-assignment', component: TaskAssignmentComponent },
  { path: 'main-page', component: MainPageComponent,canActivate: [RoleGuard], data: { expectedRole: 'projectmanager' } },
  {path:'editprofile',component:EditProfileComponent},
  {path:'project-view',component:ProjectViewComponent},
  {path:'teammeber-task-assignment',component:TeamMemberTaskAssignmentComponent},
  {path:'teammeber-projectdetails',component:TeamMemberProjectsdetailsComponent ,canActivate: [RoleGuard], data: { expectedRole: 'teammember' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
