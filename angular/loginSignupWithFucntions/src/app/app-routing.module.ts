import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { RegisterComponent } from './access/register/register.component';
// import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  // {path:'login', component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'', component:AppComponent},
  {path:'access', loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:'login', loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  // {path:'**', component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
