import { UserRenderCategoryComponent } from './components/user/user-render-category/user-render-category.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { UpdateCategoryComponent } from './components/admin/category-api/update-category/update-category.component';
import { DeleteCategoryComponent } from './components/admin/category-api/delete-category/delete-category.component';
import { AllCategoriesComponent } from './components/admin/category-api/all-categories/all-categories.component';
import { AllProductComponent } from './components/admin/product-api/all-product/all-product.component';
import { UserCategoryComponent } from './components/user/user-category/user-category.component';
import { User } from './entities/user';
import { NormalGuard } from './services/normal.guard';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { PortalLoginComponent } from './examportal/components/user/portal-login/portal-login.component';
import { PortaluserregisterComponent } from './examportal/components/user/portaluserregister/portaluserregister.component';
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
import { AdminGuard } from './services/admin.guard';
import { CategoryApiComponent } from './components/admin/category-api/category-api.component';
import { CreateCategoryComponent } from './components/admin/category-api/create-category/create-category.component';
import { CartComponent } from './components/user/cart/cart.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';


const routes: Routes = [
  
{path:'register', component: RegisterComponent},
{path:'login', component: LoginComponent},
{path:'home', component: HomeComponent},
{path:'shopping-cart', component: ShoppingCartComponent},
{path:'create-product', component: CreateProductComponent},
{path:'images-practice', component: ImagesTrainingComponent},
{path:'product', component: ProductComponent},
{path:'update-product/:id', component: UpdateProductComponent},
{path:'update-category/:id', component: UpdateCategoryComponent},
{path:'delete-product/:id', component: DeleteProductComponent},
{path:'delete-category/:id', component: DeleteCategoryComponent},
{path:'portal-register', component: PortaluserregisterComponent},
{path:'portal-login', component: PortalLoginComponent },
{path:'category', component: CategoryApiComponent },
{path:'create-category', component: CreateCategoryComponent },
{path:'user-render-category/:id', component: UserRenderCategoryComponent },
{path:'admin-dashboard', component: AdminDashboardComponent, canActivate:[AdminGuard] ,
  children:[
    {
      path:'', component:AdminHomeComponent
    },
    {
      path:'admin-home', component:AdminHomeComponent
    },
    {
      path:'product', component:ProductComponent,
      children:[
        {
          path:'', component:AllProductComponent,
        },
        {
          path:'create-product', component:CreateProductComponent,
        },
      ],
    },
    {
      path:'category', component:CategoryApiComponent,
      children:[
        {
          path:'',component:AllCategoriesComponent,
        },
        {
          path:'create-category', component:CreateCategoryComponent,
        },
        {
          path:'update-category', component:UpdateCategoryComponent,
        },
      ],
    },
    {
      path:'admin-users', component:AdminUsersComponent
    },
  ]
},
// {path:'admin-dashboard', component: AdminDashboardComponent, canActivate:[AdminGuard] },
// {path:'user-dashboard', component: UserDashboardComponent , canActivate:[NormalGuard]},
{path:'user-dashboard', component: UserDashboardComponent, canActivate:[NormalGuard],
    children:[
         {
           path:'', component:HomeComponent
         },
         {
           path:'user-dashboard', component:HomeComponent
         },
        //  {
        //    path:'account', component:ProductComponent
        //  },
         {
           path:'user-category', component:UserCategoryComponent
         },
         {
           path:'user-render-category', component:UserRenderCategoryComponent
         },
         {
           path:'cart', component:CartComponent
         },
]
},
{path:'', redirectTo : 'home', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
