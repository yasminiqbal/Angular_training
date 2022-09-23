import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { HomeDashboardComponent } from './user/components/home-dashboard/home-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElectronicsComponent } from './user/components/dashboard/electronics/electronics.component';
import { ManageElectronicsComponent } from './admin/manage-products/manage-electronics/manage-electronics.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupAddProductComponent } from './admin/manage-products/manage-list/popup-add-product/popup-add-product.component';
import {MatInputModule} from '@angular/material/input';
import { AdminDialogueComponent } from './admin/admin-login/admin-dialogue/admin-dialogue.component';
import {MatSelectModule} from '@angular/material/select';
import { ManageListComponent } from './admin/manage-products/manage-list/manage-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ShoppingCartComponent } from './user/components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { OrderSuccessComponent } from './user/components/order-success/order-success.component';
import { MyOrdersComponent } from './user/components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './user/components/login/login.component';

// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ApiService } from './services/api.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
import { ProductFilterComponent } from './user/components/dashboard/electronics/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeDashboardComponent,
    AdminLoginComponent,
    ElectronicsComponent,
    ManageElectronicsComponent,
    PopupAddProductComponent,
    AdminDialogueComponent,
    ManageListComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    LoginComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatAutocompleteModule,
    FormsModule

  ],
  
  providers: [
    ApiService,
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoriesService,
    ProductService,
    ShoppingCartService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
