import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeDashboardComponent} from './user/components/home-dashboard/home-dashboard.component';
import { ShoppingCartComponent } from './user/components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './user/components/my-orders/my-orders.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { OrderSuccessComponent } from './user/components/order-success/order-success.component';
import { LoginComponent } from './user/components/login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { AdminAuthGuardService } from '../services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './user/components/products/products.component';
import { ProductDetailComponent } from './user/components/products/product-detail/product-detail.component';



const routes: Routes = [
  {
    path:'', redirectTo:'/products', pathMatch:'full'
  },
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component:ProductDetailComponent},
  {path:'home', component:HomeDashboardComponent },
  {path:'user/login', component:LoginComponent},

  {path:'shoppingcart', component:ShoppingCartComponent, canActivate:[AuthGuardService]},
  {path:'my/orders', component:MyOrdersComponent, canActivate:[AuthGuardService]},
  {path:'check-out', component:CheckoutComponent, canActivate:[AuthGuardService]},
  {path:'order-success/:id', component:OrderSuccessComponent, canActivate:[AuthGuardService]},

  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(x=>x.AdminModule)}
 
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
