import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ProductpageService } from './services/productpage.service';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddcartComponent } from './components/cart/addcart/addcart.component';
import { FillterPipe } from './shared/fillter.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { adminlogin } from './components/adminLogin/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { AdminOrderUsersComponent } from './components/admin-order-users/admin-order-users.component';
import { OrderDetailsService } from './services/order-details.service';

//added
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductpageComponent,
    AddProductComponent,
    AddcartComponent,
    FillterPipe,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    adminlogin,
    AdminComponent,
    UsersComponent,
    UserOrdersComponent,
    AdminOrderUsersComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    [RouterModule]
  ],
  providers: [ProductpageService,OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
