import { Component, inject } from '@angular/core';
import { AuthsellerService } from '../../core/services/authseller.service';

@Component({
  selector: 'app-navseller',
  standalone: true,
  imports: [],
  templateUrl: './navseller.component.html',
  styleUrl: './navseller.component.scss'
})
export class NavsellerComponent {



  private readonly _AuthsellerService=inject(AuthsellerService)
  //for signout
  loggedout (): void
  {
    this._AuthsellerService.logout()
  }



}
