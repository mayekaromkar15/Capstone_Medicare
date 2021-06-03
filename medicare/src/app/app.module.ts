import { authInterceptorProvider } from './services/auth.intercept';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './components/user/home/home.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/user/filters/filters.component';
import { ProductListComponent } from './components/user/product-list/product-list.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CartItemComponent } from './components/user/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/user/product-list/product-item/product-item.component';
import { ImagesComponent } from './components/user/images/images.component';
import { HttpClientModule } from "@angular/common/http";
import { ImagesTrainingComponent } from './components/user/images-training/images-training.component';
import { ProductComponent } from './components/user/product/product.component';
import { UpdateProductComponent } from './components/admin/product-api/update-product/update-product.component';
import { CreateProductComponent } from './components/admin/product-api/create-product/create-product.component';
import { DeleteProductComponent } from './components/admin/product-api/delete-product/delete-product.component';
import { PortaluserregisterComponent } from './examportal/components/user/portaluserregister/portaluserregister.component';
import { PortalLoginComponent } from './examportal/components/user/portal-login/portal-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './components/admin/admin-dashboard/sidebar/sidebar.component';
import { CategoryApiComponent } from './components/admin/category-api/category-api.component';
import { DeleteCategoryComponent } from './components/admin/category-api/delete-category/delete-category.component';
import { CreateCategoryComponent } from './components/admin/category-api/create-category/create-category.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { UserCategoryComponent } from './components/user/user-category/user-category.component';
import { AllProductComponent } from './components/admin/product-api/all-product/all-product.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AllCategoriesComponent } from './components/admin/category-api/all-categories/all-categories.component';
import { UpdateCategoryComponent } from './components/admin/category-api/update-category/update-category.component'; 
import {MatSelectModule} from '@angular/material/select';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { UserRenderCategoryComponent } from './components/user/user-render-category/user-render-category.component';
import { ProfileComponent } from './components/user/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ImagesComponent,
    ImagesTrainingComponent,
    ProductComponent,
    UpdateProductComponent,
    CreateProductComponent,
    DeleteProductComponent,
    PortaluserregisterComponent,
    PortalLoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    CategoryApiComponent,
    DeleteCategoryComponent,
    CreateCategoryComponent,
    UserSidebarComponent,
    UserCategoryComponent,
    AllProductComponent,
    AdminHomeComponent,
    AllCategoriesComponent,
    UpdateCategoryComponent,
    AdminUsersComponent,
    UserRenderCategoryComponent,
    ProfileComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule, 
    MatSelectModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
