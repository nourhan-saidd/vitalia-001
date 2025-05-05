import { Iaddress } from './../../iaddress'; // تأكد من الاسم هنا
import { Component, inject } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  //inject api
  private readonly _OrderService = inject(OrderService);

  // تهيئة الواجهة بـ قيم افتراضية
  listaddress: Iaddress = { address: '', phone: '' };
  address: string = '';
  phone: string = '+201010101010';

  sendData(): void {
    const data: Iaddress = {
      address: this.address,
      phone: this.phone,
    };

    this._OrderService.sendAddress(data).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
