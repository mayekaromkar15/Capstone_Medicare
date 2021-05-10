import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/user/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'shopping-cart', component: ShoppingCartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
