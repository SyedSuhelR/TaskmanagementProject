import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
const routes: Routes = [
  { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'admin-login', component: AdminModuleComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'view-user/:id', component: ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
