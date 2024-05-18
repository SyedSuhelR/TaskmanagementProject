import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin/admin-module/admin-module.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminModuleComponent },// Assuming you have AdminDashboardComponent
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
