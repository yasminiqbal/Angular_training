import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import {HomeDashboardComponent} from './user/components/home-dashboard/home-dashboard.component';
import {ElectronicsComponent} from './user/components/dashboard/electronics/electronics.component';
import { ManageElectronicsComponent } from './admin/manage-products/manage-electronics/manage-electronics.component';
import { ManageListComponent } from './admin/manage-products/manage-list/manage-list.component';
import { ShoppingCartComponent } from './user/components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './user/components/my-orders/my-orders.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { OrderSuccessComponent } from './user/components/order-success/order-success.component';
import { LoginComponent } from './user/components/login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';



const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home', component:HomeDashboardComponent
  },
  {path:'electronics', component:ElectronicsComponent},
  {path:'user/login', component:LoginComponent},

  {path:'shoppingcart', component:ShoppingCartComponent, canActivate:[AuthGuardService]},
  {path:'my/orders', component:MyOrdersComponent, canActivate:[AuthGuardService]},
  {path:'checkout', component:CheckoutComponent, canActivate:[AuthGuardService]},
  {path:'ordersuccess', component:OrderSuccessComponent, canActivate:[AuthGuardService]},


  {path:'admin/orders', component:AdminOrdersComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products', component:AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products/new', component:ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path:'admin/products/:id', component:ProductFormComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  // {path:'admin/login', component:AdminLoginComponent, canActivate:[AuthGuardService]},
  // {path:'admin/products', component:ManageListComponent, canActivate:[AuthGuardService]},
  // {path:'admin/products/:id', component:ManageListComponent, canActivate:[AuthGuardService]},
   
  {path:'admin/electronics', component:ManageElectronicsComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
