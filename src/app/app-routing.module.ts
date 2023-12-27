import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGetProfileComponent } from './admin-get-profile/admin-get-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { GetProductByIdComponent } from './get-product-by-id/get-product-by-id.component';
import { GetProductComponent } from './get-product/get-product.component';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { LoginComponent } from './login/login.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterOptionComponent } from './register-option/register-option.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { MyPurchasesInfoComponent } from './my-purchases-info/my-purchases-info.component';
import { AdminGetProductByIdComponent } from './admin-get-product-by-id/admin-get-product-by-id.component';
import { About1Component } from './about1/about1.component';
import { Contact1Component } from './contact1/contact1.component';
import { UpdateProductComponent } from './update-product/update-product.component';
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

const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'register',component:RegistrationComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'home2',component:Home2Component},
{path:'profile',component:ProfileComponent},
{path:'getProfile',component:GetProfileComponent},
{path:'product',component:ProductInfoComponent},
{path:'getProduct',component:GetProductComponent},
{path:'adminHome',component:AdminHomeComponent},
{path:'adminLogin',component:AdminLoginComponent},
{path:'adminRegister',component:AdminRegisterComponent},
{path:'registerOption',component:RegisterOptionComponent},
{path:'loginOption',component:LoginOptionComponent},
{path:'adminProfile/:id',component:AdminProfileComponent},
{path:'adminGetProfile',component:AdminGetProfileComponent},
{path:'getProductById/:id',component:GetProductByIdComponent},
{path:'myPurchases',component:MyPurchasesComponent},
{path:'myPurchaseEmpty',component:MypurchaseEmptyComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'updateProfile/:id',component:UpdateProfileComponent},
{path:'deliveries',component:DeliveryComponent},
{path:'deliveryInfo/:id',component:DeliveryInfoComponent},
{path:'adminContact',component:AdminContactComponent},
{path:'adminAbout',component:AdminAboutComponent},
{path:'myPurchasesInfo/:id',component:MyPurchasesInfoComponent},
{path:'adminGetProductById/:id',component:AdminGetProductByIdComponent},
{path:'about1',component:About1Component},
{path:'contact1',component:Contact1Component},
{path:'updateProduct/:id',component:UpdateProductComponent},
{path:'search1/:name',component:Serch1Component},
{path:'search2/:name',component:Serch2Component},
{path:'adminSearch/:name',component:AdminSearchComponent},
{path:'payment/:id',component:PaymentComponent},
{path:'paymentMethod/:id',component:PaymetMethodComponent},
{path:'buyProduct/:id',component:BuyProductComponent},
{path:'favourite',component:FavouriteComponent},
{path:'favouriteInfo/:id',component:FavouriteInfoComponent},
{path:'paymentConfirm',component:PaymentConfirmComponent},
{path:'bankPayment/:id',component:BankPaymentComponent},
{path:'googlePay/:id',component:GooglePayComponent},
{path:'userRecipt/:id',component:UserReciptComponent},
{path:'forgetPassword',component:ForgetPasswordComponent},
{path:'forgetPassword2',component:ForgetPassword2Component},
{path:'**',component:PageNotFoundComponent}


// {path:'deliveryInfo/:id',component:DeliveryInfoComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
