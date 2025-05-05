import { Component, inject } from '@angular/core';
import { AuthdoctorService } from '../../core/services/authdoctor.service';

@Component({
  selector: 'app-navbar-doctor',
  standalone: true,
  imports: [],
  templateUrl: './navbar-doctor.component.html',
  styleUrl: './navbar-doctor.component.scss'
})
export class NavbarDoctorComponent
{





  private readonly _AuthdoctorService=inject(AuthdoctorService)
  //for signout
  loggedout (): void
  {
    this._AuthdoctorService.logout()
  }


  
}
