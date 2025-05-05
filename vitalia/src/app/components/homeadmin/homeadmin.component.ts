import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homeadmin',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './homeadmin.component.html',
  styleUrl: './homeadmin.component.scss'
})
export class HomeadminComponent {

}
