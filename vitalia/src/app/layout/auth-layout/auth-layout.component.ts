import { Component } from '@angular/core';
import { NavbarAuthComponent } from "../../components/navbar-auth/navbar-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HomeComponent } from "../../components/home/home.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavbarAuthComponent, RouterOutlet, FooterComponent, HomeComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
