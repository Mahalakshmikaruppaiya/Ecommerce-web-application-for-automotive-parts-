import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { Home2Component } from './home2/home2.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { GetProductComponent } from './get-product/get-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGetProfileComponent } from './admin-get-profile/admin-get-profile.component';
import { GetProductByIdComponent } from './get-product-by-id/get-product-by-id.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { About1Component } from './about1/about1.component';
import { Contact1Component } from './contact1/contact1.component';
import { MyPurchasesInfoComponent } from './my-purchases-info/my-purchases-info.component';
import { AdminGetProductByIdComponent } from './admin-get-product-by-id/admin-get-product-by-id.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Serch1Component } from './serch1/serch1.component';
import { Serch2Component } from './serch2/serch2.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { PaymentComponent } from './payment/payment.component';
import { MypurchaseEmptyComponent } from './mypurchase-empty/mypurchase-empty.component';
import { PaymetMethodComponent } from './paymet-method/paymet-method.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteInfoComponent } from './favourite-info/favourite-info.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { UserReciptComponent } from './user-recipt/user-recipt.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPassword2Component } from './forget-password2/forget-password2.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    Home2Component,
    GetProfileComponent,
    ProductInfoComponent,
    GetProductComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    RegisterOptionComponent,
    LoginOptionComponent,
    AdminProfileComponent,
    AdminGetProfileComponent,
    GetProductByIdComponent,
    UpdateProfileComponent,
    UpdateProductComponent,
    HeaderComponent,
    FooterComponent,
    MyPurchasesComponent,
    UserPurchasesComponent,
    AboutComponent,
    ContactComponent,
    DeliveryComponent,
    DeliveryInfoComponent,
    AdminAboutComponent,
    AdminContactComponent,
    About1Component,
    Contact1Component,
    MyPurchasesInfoComponent,
    AdminGetProductByIdComponent,
    PageNotFoundComponent,
    Serch1Component,
    Serch2Component,
    AdminSearchComponent,
    PaymentComponent,
    MypurchaseEmptyComponent,
    PaymetMethodComponent,
    BuyProductComponent,
    FavouriteComponent,
    FavouriteInfoComponent,
    PaymentConfirmComponent,
    BankPaymentComponent,
    GooglePayComponent,
    UserReciptComponent,
    ForgetPasswordComponent,
    ForgetPassword2Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
