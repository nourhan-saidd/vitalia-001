import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CommunityComponent } from './components/community/community.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { DashboardSellerComponent } from './components/dashboard-seller/dashboard-seller.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { ClientComponent } from './components/client/client.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SellerComponent } from './components/seller/seller.component';
import { ClientloginComponent } from './components/clientlogin/clientlogin.component';
import { authclientGuard } from './core/guards/authclient.guard';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { SellerloginComponent } from './components/sellerlogin/sellerlogin.component';
import { GetappComponent } from './components/getapp/getapp.component';
import { SellerLayoutComponent } from './layout/seller-layout/seller-layout.component';
import { DoctorLayoutComponent } from './layout/doctor-layout/doctor-layout.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { AddblogComponent } from './components/addblog/addblog.component';
import { ChatdoctorComponent } from './components/chatdoctor/chatdoctor.component';
import { MoneydoctorComponent } from './components/moneydoctor/moneydoctor.component';
import { AppointmetComponent } from './components/appointmet/appointmet.component';
import { AdddateComponent } from './components/adddate/adddate.component';
import { ProductsComponent } from './components/products/products.component';
import { StatusComponent } from './components/status/status.component';
import { MoneysellerComponent } from './components/moneyseller/moneyseller.component';
import { ChatusersComponent } from './components/chatusers/chatusers.component';
import { PostusersComponent } from './components/postusers/postusers.component';
import { ProfiledoctorComponent } from './components/profiledoctor/profiledoctor.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { AllpostsComponent } from './components/allposts/allposts.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AppointmentinfoComponent } from './components/appointmentinfo/appointmentinfo.component';
import { AppointmentinfoclientComponent } from './components/appointmentinfoclient/appointmentinfoclient.component';
import { DoctorinfoComponent } from './components/doctorinfo/doctorinfo.component';
import { PhoneclientdoctorComponent } from './components/phoneclientdoctor/phoneclientdoctor.component';
import { PaymentdoctorComponent } from './components/paymentdoctor/paymentdoctor.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { AcceptDoctorsComponent } from './components/accept-doctors/accept-doctors.component';
import { AcceptSellersComponent } from './components/accept-sellers/accept-sellers.component';
import { TechnicalSupportComponent } from './components/technical-support/technical-support.component';
import { AdminMoneyDoctorComponent } from './components/admin-money-doctor/admin-money-doctor.component';
import { AdminMoneySellerComponent } from './components/admin-money-seller/admin-money-seller.component';
import { ShowDoctorsFilesComponent } from './components/show-doctors-files/show-doctors-files.component';
import { ShowSellersFilesComponent } from './components/show-sellers-files/show-sellers-files.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import { ProfilesellerComponent } from './components/profileseller/profileseller.component';
export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'getapp', component: GetappComponent },
      // {path:'login',redirectTo:'login',pathMatch:'full'},
      {
        path: 'login',
        component: LoginComponent,
        children: [
          { path: 'clientlogin', component: ClientloginComponent },
          { path: 'doctorlogin', component: DoctorloginComponent },
          { path: 'sellerlogin', component: SellerloginComponent },
        ],
      },
      {
        path: 'register',
        component: RegisterComponent,
        children: [
          {
            path: 'client',
            component: ClientComponent,
          },
          { path: 'doctors', component: DoctorsComponent },
          { path: 'seller', component: SellerComponent },
        ],
      },
      { path: 'clientlogin', component: ClientloginComponent },
      { path: 'doctorlogin', component: DoctorloginComponent },
      { path: 'sellerlogin', component: SellerloginComponent },
      {
        path: 'forgetpassword',
        component: ForgetpasswordComponent,
      },
      {
        path: 'resetpassword',
        component: ResetpasswordComponent,
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'blog',
        component: BlogComponent,
        canActivate: [authclientGuard],
      },
      {
        path: 'blogdetails/:id',
        component: BlogdetailsComponent,
      },
      {
        path: 'appointmentinfoclient',
        component: AppointmentinfoclientComponent,
      },
      {
        path: 'doctor',
        component: DoctorComponent,
        canActivate: [authclientGuard],
      },
      {
        path: 'doctorinfo/:id',
        component: DoctorinfoComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
        canActivate: [authclientGuard],
      },
      {
        path: 'clientprofile',
        component: ClientprofileComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'phoneclientdoctor/:id',
        component: PhoneclientdoctorComponent,
      },
      {
        path: 'paymentdoctor',
        component: PaymentdoctorComponent,
      },
      {
        path: 'community',
        component: CommunityComponent,
        canActivate: [authclientGuard],
        children: [
          { path: 'chatusers', component: ChatusersComponent },
          { path: 'postusers', component: PostusersComponent },
          { path: '', redirectTo: 'postusers', pathMatch: 'full' },
        ],
      },
      {
        path: 'productdetails/:id',
        component: ProductdetailsComponent,
      },
    ],
  },
  {
    path: '',
    component: SellerLayoutComponent,
    children: [
      {
        path: 'dashboard-seller',
        component: DashboardSellerComponent,
        children: [
          {
path:'profileseller',component:ProfilesellerComponent
        },
          { path: 'products', component: ProductsComponent },
          { path: 'status', component: StatusComponent },
          { path: 'moneyseller', component: MoneysellerComponent },
        ],
      },
    ],
  },

  {
    path: '',
    component: DoctorLayoutComponent,
    children: [
      {
        path: 'dashboard-doctor',
        component: DashboardDoctorComponent,
        children: [
          {
            path: 'addpost',
            component: AddpostComponent,
            children: [
              {
                path: 'myposts',
                component: MypostsComponent,
              },
              {
                path: 'allposts',
                component: AllpostsComponent,
              },
            ],
          },
          { path: 'addblog', component: AddblogComponent },
          { path: 'appointmentinfo/:id', component: AppointmentinfoComponent },
          { path: 'chatdoctor', component: ChatdoctorComponent },
          { path: 'moneydoctor', component: MoneydoctorComponent },
          {
            path: 'consultation',
            component: ConsultationComponent,
          },
          { path: 'appointment', component: AppointmetComponent },
          { path: 'adddate', component: AdddateComponent },
          { path: 'profiledoctor', component: ProfiledoctorComponent },
          { path: 'blogdetails/:id', component: BlogdetailsComponent },
        ],
      },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'adminlogin',
        component: AdminloginComponent,
      },
      {
        path: '',
        component: DashboardAdminComponent,
      },
      {
        path: 'homeadmin',
        component: HomeadminComponent,
        children: [
          {
            path: 'accept-doctors',
            component: AcceptDoctorsComponent,
          },
          {
            path: 'show-doctors-files/:id',
            component: ShowDoctorsFilesComponent,
          },
          {
            path: 'accept-sellers',
            component: AcceptSellersComponent,
          },
          {
            path: 'show-sellers-files/:id',
            component: ShowSellersFilesComponent,
          },
          {
            path: 'Technical-support',
            component: TechnicalSupportComponent,
          },
          {
            path: 'admin-money-doctor',
            component: AdminMoneyDoctorComponent,
          },
          {
            path: 'admin-money-seller',
            component: AdminMoneySellerComponent,
          },
        ],
      },
    ],
  },
];
