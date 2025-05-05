import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NavbarDoctorComponent } from "../../components/navbar-doctor/navbar-doctor.component";

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, NavbarDoctorComponent],
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.scss'
})
export class DoctorLayoutComponent {

}
