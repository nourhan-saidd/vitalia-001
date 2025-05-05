
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { BlankLayoutComponent } from "./layout/blank-layout/blank-layout.component";
import { HomeComponent } from "./components/home/home.component";
import { DoctorLayoutComponent } from './layout/doctor-layout/doctor-layout.component';
import { SellerLayoutComponent } from './layout/seller-layout/seller-layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthLayoutComponent, BlankLayoutComponent, HomeComponent,DoctorLayoutComponent,SellerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vitalia';

}
