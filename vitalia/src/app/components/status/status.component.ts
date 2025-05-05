import { Component, inject, OnInit } from '@angular/core';
import { Iorder } from '../../core/interfaces/iorder';
import { ShopService } from '../../core/services/shop.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit
{
  //api
  private readonly _ShopService=inject(ShopService)
  //interface
  listorder: Iorder[] = [];
  ngOnInit(): void {
    this._ShopService.getOrderStatus().subscribe({
      next: (res) => {
        console.log('بيانات الطلبات:', res);
        this.listorder = res.orders;
        // فحص إذا كان فيه orderId ناقص
        res.orders.forEach((order: Iorder) => {
          if (!order.orderId) {
            console.warn('طلب بدون orderId:', order);
          }
        });
      },
      error: (err) => {
        console.error('خطأ في جلب الطلبات:', err);
      }
    });
  }
  //updates status
  updateOrderStatus ( order: Iorder )
  {
    console.log(order.orderId);
    this._ShopService.updateStatus(order.orderId, order.status).subscribe({
      next: (res) => {
        console.log('Status updated successfully', res);
        // ممكن هنا تعمل توست مثلا أو رسالة نجاح
      },
      error: (err) => {
        console.error('Error updating status', err);
        // هنا تعامل مع الخطأ
      }
    });
  }


}
