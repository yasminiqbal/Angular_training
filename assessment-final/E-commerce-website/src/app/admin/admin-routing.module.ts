import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from '../../services/admin-auth-guard.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {path:'orders', component:AdminOrdersComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'products', component:AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'products/new', component:ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'products/:id', component:ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
