import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { NavbarBlankComponent } from "../navbar-blank/navbar-blank.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarBlankComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent
{
  private readonly _Router = inject( Router )
  //navigate to shop
  navigatenowshop (): void
  {
    this._Router.navigate(['/shop'])
  }
  //navigate to shop
  navigatenowblog (): void
  {
    this._Router.navigate(['/blog'])
  }
    //navigate to shop
    navigatenowcommunity (): void
    {
      this._Router.navigate(['/community'])
  }
    //navigate to shop
    navigatenowappointment (): void
    {
      this._Router.navigate(['/doctor'])
  }
  //navigate to install app
  getapp (): void
  {
    this._Router.navigate(['/getapp'])
  }
  //navigate to register
  join():void
    {
this._Router.navigate(['/register'])
  }
}
