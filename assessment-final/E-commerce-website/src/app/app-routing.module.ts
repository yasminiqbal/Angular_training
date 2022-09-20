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


const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home', component:HomeDashboardComponent
  },
  {path:'electronics', component:ElectronicsComponent},
  {path:'shoppingcart', component:ShoppingCartComponent},
  {path:'user/login', component:LoginComponent},


  {path:'my/orders', component:MyOrdersComponent},// canActivate:[AuthGuardService]},
  {path:'checkout', component:CheckoutComponent},// canActivate:[AuthGuardService]},
  {path:'ordersuccess', component:OrderSuccessComponent},// canActivate:[AuthGuardService]},
  {path:'admin/orders', component:AdminOrdersComponent},// canActivate:[AuthGuardService]},
  {path:'admin/login', component:AdminLoginComponent},// canActivate:[AuthGuardService]},
  {
    path:'admin/products', component:ManageListComponent
  },
  {path:'admin/electronics', component:ManageElectronicsComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
