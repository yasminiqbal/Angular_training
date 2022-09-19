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
    ManageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
