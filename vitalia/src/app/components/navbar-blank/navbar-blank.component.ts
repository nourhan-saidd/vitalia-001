import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthclientService } from '../../core/services/authclient.service';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.scss'
})
export class NavbarBlankComponent {


  private readonly _AuthclientService = inject( AuthclientService )


  loggedout (): void
  {
    this._AuthclientService.logout()
  }
}
