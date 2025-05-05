import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '../../core/services/admin.service';
import { Messages } from '../../core/interfaces/messages';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  //inject api
  private readonly _AdminService = inject( AdminService );
  //inject interface
  listmessages: Messages[] = [];
  email: string = '';
  text: string = '';
  phone: number = 0;

  sendmessages(): void {
    const data = {
      email: this.email,
      text: this.text,
      phone: this.phone
    };

    this._AdminService.sendmessage(data).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }


}
