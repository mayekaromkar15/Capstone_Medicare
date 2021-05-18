import { DeleteProductComponent } from './components/admin/product-api/delete-product/delete-product.component';
import { CreateProductComponent } from './components/admin/product-api/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin/product-api/update-product/update-product.component';
import { ProductComponent } from './components/user/product/product.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/user/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ImagesTrainingComponent } from './components/user/images-training/images-training.component';

const routes: Routes = [
  
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'shopping-cart', component: ShoppingCartComponent},
{path:'create-product', component: CreateProductComponent},
{path:'images-practice', component: ImagesTrainingComponent},
{path:'product', component: ProductComponent},
{path:'update-product/:id', component: UpdateProductComponent},
{path:'delete-product/:id', component: DeleteProductComponent},
{path:'', redirectTo : 'home', pathMatch : 'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
