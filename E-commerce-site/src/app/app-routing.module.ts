import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ErrorpathComponent } from './components/errorpath/errorpath.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'product/:id', component: ProductsComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'checkout', component: CheckoutComponent
  },
  {
    path:'thankyou', component: ThankyouComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'**', pathMatch:'full', component: ErrorpathComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
