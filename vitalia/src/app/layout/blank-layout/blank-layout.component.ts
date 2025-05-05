import { Component } from '@angular/core';
import { NavbarBlankComponent } from "../../components/navbar-blank/navbar-blank.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { HomeComponent } from "../../components/home/home.component";

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [NavbarBlankComponent, RouterOutlet, FooterComponent, HomeComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
