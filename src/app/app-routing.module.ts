import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './regiter/regiter.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'cart',canActivate:[authGuard], component:CartComponent},
  {path:'wishlist',canActivate:[authGuard], component:WishlistComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'allorders',canActivate:[authGuard],component:AllordersComponent},
  {path:'checkout/:id',canActivate:[authGuard],component:CheckoutComponent},
  {path:'product-details/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'category-details/:id',canActivate:[authGuard],component:CategoryDetailsComponent},
  {path:'brand-details/:id',canActivate:[authGuard],component:BrandDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
