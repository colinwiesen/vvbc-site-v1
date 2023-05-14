import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateSermonPageComponent } from './create-sermon-page/create-sermon-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: AdminLoginComponent},
  {path: 'dashboard', component: DashboardPageComponent},//, canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModuleRoutingModule { }
