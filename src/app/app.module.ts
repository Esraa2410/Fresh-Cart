import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllordersComponent } from './allorders/allorders.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SearchPipe } from './search.pipe';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './regiter/regiter.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyComponent } from './verify/verify.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AllordersComponent,
    BrandDetailsComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    CheckoutComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MainSliderComponent,
    NavbarComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    SearchPipe,
    RegisterComponent,
    CategoryDetailsComponent,
    ForgetPasswordComponent,
    VerifyComponent,
    WishlistComponent,
    ChangePasswordComponent,
    ProfileComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatPaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,MatMenuModule,
    MatButtonModule, MatDialogModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-custom-position',
      timeOut: 2000,
      closeButton: true
    }), // ToastrModule added
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AddHeaderInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
