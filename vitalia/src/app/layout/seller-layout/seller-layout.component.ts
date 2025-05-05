import { Component } from '@angular/core';
import { NavsellerComponent } from "../../components/navseller/navseller.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-seller-layout',
  standalone: true,
  imports: [NavsellerComponent, RouterOutlet, FooterComponent],
  templateUrl: './seller-layout.component.html',
  styleUrl: './seller-layout.component.scss'
})
export class SellerLayoutComponent {

}
