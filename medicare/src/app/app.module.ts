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
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
