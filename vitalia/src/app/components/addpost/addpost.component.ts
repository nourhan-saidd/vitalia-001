import { Component} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.scss',

})
export class AddpostComponent {

}






