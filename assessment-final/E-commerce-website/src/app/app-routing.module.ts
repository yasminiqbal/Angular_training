import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import {HomeDashboardComponent} from './user/components/home-dashboard/home-dashboard.component';
import {ElectronicsComponent} from './user/components/dashboard/electronics/electronics.component';
import { ManageElectronicsComponent } from './admin/manage-products/manage-electronics/manage-electronics.component';
import { ManageListComponent } from './admin/manage-products/manage-list/manage-list.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home', component:HomeDashboardComponent
  },
  {
    path:'admin/login', component:AdminLoginComponent
  },
  {
    path:'admin', component:ManageListComponent
  },
  {path:'electronics', component:ElectronicsComponent},
  {path:'admin/electronics', component:ManageElectronicsComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
